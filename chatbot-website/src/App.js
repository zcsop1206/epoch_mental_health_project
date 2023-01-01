import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { bot: true, message: "Hey , I'm Qwacky" },
  ]);

  return (
    <section className="msger">
      <header className="msger-header">
        <div className="msger-header-title">
          <i className="fas fa-comment-alt" /> Qwacky
        </div>
        <div className="msger-header-options">
          <span>
            <i className="fas fa-cog" />
          </span>
        </div>
      </header>
      <main className="msger-chat">
        {messages.map((v) => (
          <div className={`msg-bubble ${!v.bot && "blue-bg"}`}>
            <div className="msg-info">
              <div className="msg-info-name">{v.bot ? "Qwacky" : "You"}</div>
            </div>
            <div className="msg-text">{v.message}</div>
          </div>
        ))}
      </main>
      <form
        className="msger-inputarea"
        onSubmit={(e) => {
          e.preventDefault();
          setMessages([...messages, { bot: false, message: input }]);
          setInput("");
        }}
      >
        <input
          type="text"
          className="msger-input"
          placeholder="Enter your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="msger-send-btn">
          Send
        </button>
      </form>
    </section>
  );
}

export default App;
