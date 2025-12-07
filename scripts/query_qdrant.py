import os
from qdrant_client import QdrantClient
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

# Configure Gemini API
genai.configure(api_key=GEMINI_API_KEY)

# Initialize Qdrant client
qdrant = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY)
collection_name = "robotics_book"

# Function to generate embeddings via Gemini
def embed_text(text):
    result = genai.embed_content(
        model="models/text-embedding-004",
        content=text
    )
    return result["embedding"]

# Function to query Qdrant
def query_qdrant(query_text, top_k=3):
    query_emb = embed_text(query_text)

    # Query using high-level wrapper
    response = qdrant.query_points(
        collection_name=collection_name,
        query=query_emb,
        limit=top_k,
        with_payload=True
    )

    # Extract results
    results = []
    for point in response.points:
        if point.payload and "text" in point.payload:
            results.append(point.payload["text"])
    return results

# Example query
if __name__ == "__main__":
    user_query = input("Enter your query: ")
    results = query_qdrant(user_query)

    print(f"\nQuery: {user_query}\n")
    for i, text in enumerate(results, 1):
        print(f"Result {i}: {text}\n")
