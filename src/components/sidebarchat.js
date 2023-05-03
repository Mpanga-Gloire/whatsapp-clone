import React from "react";
import "../style/sidebarchat.css";
import { Avatar } from "@mui/material";

const sidebarchat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>This is the last messge</p>
      </div>
    </div>
  );
};

export default sidebarchat;
