import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Bonny",
      imageUrl: "images/profile-pic1.jpg",
      message: "Whatsup?"
    },
    {
      name: "Bonny",
      imageUrl: "images/profile-pic1.jpg",
      message: "Hey There!"
    },
    {
      message: "Hey! How are you?"
    }
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH BONNY ON 12/09/2020
      </p>

      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar src={`/${message.imageUrl}`} alt="" />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          type="text"
          className="chatScreen__inputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="chatScreen__inputButton"
          onClick={handleSend}
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
