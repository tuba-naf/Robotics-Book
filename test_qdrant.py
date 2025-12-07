import os
from dotenv import load_dotenv
from qdrant_client import QdrantClient

load_dotenv()  # <-- IMPORTANT

print("OPENAI_API_KEY:", os.getenv("OPENAI_API_KEY"))
print("QDRANT_URL:", os.getenv("QDRANT_URL"))
print("QDRANT_API_KEY:", os.getenv("QDRANT_API_KEY"))

client = QdrantClient(
    url=os.getenv("QDRANT_URL"),
    api_key=os.getenv("QDRANT_API_KEY")
)

print("Connected. Collections:")
print(client.get_collections())
