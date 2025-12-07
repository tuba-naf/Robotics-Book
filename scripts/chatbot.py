# import os
# from qdrant_client import QdrantClient
# from dotenv import load_dotenv
# import google.generativeai as genai

# # Load environment variables
# load_dotenv()

# GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
# QDRANT_URL = os.getenv("QDRANT_URL")
# QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

# # Configure Gemini API
# genai.configure(api_key=GEMINI_API_KEY)

# # Initialize Qdrant client
# qdrant = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY)
# collection_name = "robotics_book"

# # Function to generate embeddings via Gemini
# def embed_text(text):
#     result = genai.embed_content(
#         model="models/text-embedding-004",
#         content=text
#     )
#     return result["embedding"]

# # Function to ask a question
# def ask_bot(question):
#     question = question.strip()
#     if not question:
#         return "Please provide a question."  # prevents crash
#     # 1️⃣ Generate embedding for the question
#     query_emb = embed_text(question)

#     # 2️⃣ Search in Qdrant using the modern high-level wrapper
#     response = qdrant.query_points(
#         collection_name=collection_name,
#         query=query_emb,
#         limit=3,
#         with_payload=True
#     )

#     # 3️⃣ Build context from retrieved results
#     context_list = []
#     for scored_point in response.points:  # ✅ use .points
#         if scored_point.payload and "text" in scored_point.payload:
#             context_list.append(scored_point.payload["text"])
#     context = "\n".join(context_list)

#     # 4️⃣ Build prompt for Gemini
#     prompt = (
#         "Answer the question strictly using the context below.\n\n"
#         f"Context:\n{context}\n\n"
#         f"Question: {question}\nAnswer:"
#     )

#     # 5️⃣ Call Gemini generative model using the correct base model ID
#     model = genai.GenerativeModel("gemini-2.5-flash")  # ✅ Updated model
#     response = model.generate_content(prompt)
#     return response.text

# # CLI loop
# while True:
#     user_input = input("You: ")
#     if user_input.lower() in ["exit", "quit"]:
#         print("Bot: Goodbye!")
#         break
#     print("Bot:", ask_bot(user_input))
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

# Function to ask a question
def ask_bot(question):
    question = question.strip()
    if not question:
        return "Please provide a question."  # prevents crash

    # 1️⃣ Generate embedding for the question
    query_emb = embed_text(question)

    # 2️⃣ Search in Qdrant
    response = qdrant.query_points(
        collection_name=collection_name,
        query=query_emb,
        limit=3,
        with_payload=True
    )

    # 3️⃣ Build context
    context_list = []
    for scored_point in response.points:
        if scored_point.payload and "text" in scored_point.payload:
            context_list.append(scored_point.payload["text"])
    context = "\n".join(context_list)

    # 4️⃣ Build prompt
    prompt = (
        "Answer the question strictly using the context below.\n\n"
        f"Context:\n{context}\n\n"
        f"Question: {question}\nAnswer:"
    )

    # 5️⃣ Call Gemini generative model
    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(prompt)
    return response.text
