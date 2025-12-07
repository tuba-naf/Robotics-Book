import os
import json
import uuid
from qdrant_client import QdrantClient
from qdrant_client.http import models
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

# Configure Gemini
genai.configure(api_key=GEMINI_API_KEY)

# Initialize clients
qdrant = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY)
collection_name = "robotics_book"

# Helper: Get embeddings from Gemini
def embed_text(text):
    result = genai.embed_content(
        model="models/text-embedding-004",
        content=text
    )
    return result["embedding"]

# Check embedding size (we'll use it for Qdrant collection)
test_emb = embed_text("test")
embedding_size = len(test_emb)
print(f"Embedding size detected: {embedding_size}")

# Delete old collection if it exists (optional, but ensures no dimension mismatch)
if qdrant.collection_exists(collection_name):
    qdrant.delete_collection(collection_name)
    print(f"Deleted old collection: {collection_name}")

# Create new collection with correct embedding size
qdrant.create_collection(
    collection_name=collection_name,
    vectors_config=models.VectorParams(size=embedding_size, distance=models.Distance.COSINE)
)
print(f"Created new collection: {collection_name} with {embedding_size}-dim embeddings")

# Load book data
with open("book_texts.json", "r", encoding="utf-8") as f:
    book_data = json.load(f)

# Split text into chunks
def chunk_text(text, max_len=500):
    words = text.split()
    return [" ".join(words[i:i+max_len]) for i in range(0, len(words), max_len)]

# Upload book to Qdrant
for item in book_data:
    chunks = chunk_text(item["content"])
    for chunk in chunks:
        emb = embed_text(chunk)
        qdrant.upsert(
            collection_name=collection_name,
            points=[
                models.PointStruct(
                    id=str(uuid.uuid4()),  # <- fixed: use UUID
                    vector=emb,
                    payload={"text": chunk}
                )
            ]
        )

print("Book uploaded to Qdrant successfully!")
