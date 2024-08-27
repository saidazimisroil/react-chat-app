import React from "react";
import "./myStyles.css";

const MessageSelf = () => {
  var props2 = { name: "you", message: "This is Message." };

  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p className="con-title">{props2.name}</p>
        <p className="con-lastMessage">{props2.message}</p>
        <p className="self-timeStamp">12:00pm</p>
      </div>
    </div>
  );
};

export default MessageSelf;
