import React from "react";
import "./Header.css";

export default function Header(props) {
  const { setButtonSelection, setSelectionMade } = props;
  return (
    <div className="header-container">
      <img className="info" src="/i.png"></img>
      <h1 id="opening-tag" className="fs-1">
        Word game generator
      </h1>
      <img
        onClick={() => {
          setButtonSelection("");
          setSelectionMade(false);
        }}
        id="header-restart"
        className="new-game"
        src="/gamepad.svg"
      />
    </div>
  );
}
