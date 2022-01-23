import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">MyAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">60</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">34</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8Di5Xe-0ty58fzXIdk_2OQHaFj%26pid%3DApi&f=1" alt="avatar" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
