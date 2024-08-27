import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

const MainContaier = () => {
  const [conversation, setConversation] = useState([
    {
      name: "Said",
      lastMessage: "lastMessage1",
      timeStamp: "today",
    },
  ]);

  return (
    <div className="main-container">
      <Sidebar />
      <div className="chatArea-container">
        {conversation.map((conversation) => {
          return <ChatArea props={conversation} key={conversation.name} />;
        })}
      </div>
    </div>
  );
};

export default MainContaier;
