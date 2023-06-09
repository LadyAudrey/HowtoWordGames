import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Button } from "react-bootstrap";

export default function Header(props) {
  const { setButtonSelection, setSelectionMade } = props;
  return (
    <div className="header-container">
      {/* <img className="info" src="/i.png"></img> */}
      <h1 id="opening-tag" className="fs-1">
        Word game generator
      </h1>
      {/* I tried adding "className="w-75 h-100 bg-light" and changing it to a button,but tha did not work" */}
      <NavLink to={"/"}>
        <Button
          className="bg-dark p-0 border-0 rounded-circle"
          id="header-restart"
        >
          <img className="new-game" src="/gamepad.svg" />
        </Button>
      </NavLink>
    </div>
  );
}
