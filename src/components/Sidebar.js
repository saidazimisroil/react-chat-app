import React, { useState } from "react";
import "./myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import SearchIcon from "@mui/icons-material/Search";
import ConversationsItem from "./ConversationsItem";

const Sidebar = () => {
  const [conversations, setConversation] = useState([
    {
      name: "Said",
      lastMessage: "lastMessage1",
      timeStamp: "today",
    },
    {
      name: "Temur",
      lastMessage: "lastMessage1",
      timeStamp: "today",
    },
    {
      name: "Bobur",
      lastMessage: "lastMessage1",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <ModeNightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="search" className="search-box" />
      </div>

      <div className="sb-conversations">
        {conversations.map((conversation) => {
          return <ConversationsItem props={conversation} key={conversation.name} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
