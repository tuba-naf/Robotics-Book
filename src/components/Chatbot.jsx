import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userMsg.text }),
      });

      const data = await res.json();
      const botMsg = { sender: "bot", text: data.answer };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error connecting to chatbot backend." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Robot Book Chatbot</h2>

      <div style={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...styles.message,
              ...(msg.sender === "user" ? styles.userMsg : styles.botMsg),
            }}
          >
            {msg.text}
          </div>
        ))}

        {loading && <div style={styles.loading}>Thinking...</div>}
      </div>

      <div style={styles.inputRow}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask something from your Robotics Book..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
}

export function FloatingChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
      {open && <Chatbot />}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#2563eb",
          color: "white",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          fontSize: 24,
        }}
      >
        {open ? "✖" : "💬"}
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "380px",
    background: "white",
    padding: "12px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    height: "480px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  chatBox: {
    flex: 1,
    overflowY: "auto",
    background: "#f7f7f7",
    padding: "8px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "10px",
  },
  message: {
    padding: "8px 12px",
    borderRadius: "14px",
    maxWidth: "80%",
    fontSize: "14px",
  },
  userMsg: {
    background: "#2563eb",
    color: "white",
    alignSelf: "flex-end",
  },
  botMsg: {
    background: "#e5e7eb",
    color: "black",
    alignSelf: "flex-start",
  },
  loading: {
    background: "#d1d5db",
    padding: "6px 10px",
    borderRadius: "10px",
    alignSelf: "flex-start",
  },
  inputRow: {
    display: "flex",
    gap: "8px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 14px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};
