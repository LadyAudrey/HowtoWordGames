import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Button } from "react-bootstrap";

export default function Header() {
  return (
    <div className="header-container">
      <h1 id="opening-tag" className="fs-1">
        Word game generator
      </h1>
      <NavLink to={import.meta.env.BASE_URL + "/"}>
        <Button
          className="bg-dark p-0 border-0 rounded-circle"
          id="header-restart"
        >
          <img
            className="new-game"
            src={import.meta.env.BASE_URL + "/gamepad.svg"}
          />
        </Button>
      </NavLink>
    </div>
  );
}
