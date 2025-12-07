from flask import Flask, request, jsonify
from flask_cors import CORS  # <-- allow cross-origin requests
from chatbot import ask_bot  # your Python function

app = Flask(__name__)
CORS(app)  # <-- this fixes frontend fetch issues

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_query = data.get("query", "").strip()
    if not user_query:
        return jsonify({"answer": "Please provide a question."})
    answer = ask_bot(user_query)
    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(port=5000)
