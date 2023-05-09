import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <h1 id="opening-tag"> Your word game generator</h1>
      <img id="header-restart" className="new-game" src="/gamepad.svg" />
    </div>
  );
}
