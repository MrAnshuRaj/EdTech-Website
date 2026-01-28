import { useState } from "react";

export default function DoubtBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 Ask your doubt here!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    // fake teacher reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Teacher will reply shortly 😊" },
      ]);
    }, 800);
  };

  return (
    <>
      {/* BOT ICON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-3/4 -translate-y-1/2 bg-black text-white w-18 h-18 rounded-full shadow-xl flex items-center justify-center text-4xl z-50 hover:scale-105 transition"
      >
        🤷‍♂️
      </button>

      {/* CHAT BOX */}
      {open && (
        <div className="fixed left-20 top-1/2 -translate-y-1/2 w-[340px] h-[420px] bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-black text-white px-4 py-3 flex justify-between items-center">
            <span>Doubt Chat</span>
            <button onClick={() => setOpen(false)} className="text-xl">
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                  m.from === "user"
                    ? "ml-auto bg-black text-white"
                    : "bg-white border"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t flex items-center gap-2">
            {/* Image Upload */}
            <label className="cursor-pointer text-xl">
              📷
              <input type="file" className="hidden" />
            </label>

            {/* Voice (UI only) */}
            <button className="text-xl">🎤</button>

            {/* Text */}
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your doubt..."
              className="flex-1 border rounded px-3 py-1 text-sm outline-none"
            />

            {/* Send */}
            <button
              onClick={sendMessage}
              className="bg-black text-white px-3 py-1 rounded"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
