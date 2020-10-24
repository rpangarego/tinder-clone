import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Bonny"
        message="Hey there!"
        timestamp="40 seconds ago"
        profilePic="images/profile-pic1.jpg"
      />
      <Chat
        name="Ramen"
        message="Whats up?!"
        timestamp="10 minutes ago"
        profilePic="images/profile-pic3.jpg"
      />
      <Chat
        name="Marcel Cooper"
        message="See you"
        timestamp="2 hours ago"
        profilePic="images/profile-pic2.jpg"
      />
      <Chat
        name="James"
        message="Can't wait to see you there"
        timestamp="10/03/2020"
        profilePic="images/profile-pic4.jpg"
      />
    </div>
  );
}

export default Chats;
