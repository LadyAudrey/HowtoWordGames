import React from "react";
import "./ButtonContainer.css";

export default function ButtonContainer(props) {
  return (
    <div id="game-buttons">
      <button
        onClick={() => {
          props.setButtonSelection("containsLetters");
        }}
        className="WGbutton"
      >
        Contains These Letters
      </button>
      <button
        onClick={() => {
          props.setButtonSelection("containsString");
        }}
        className="WGbutton"
      >
        Scrabble Solver
      </button>
      <button
        onClick={() => {
          props.setButtonSelection("palindrome");
        }}
        className="WGbutton"
      >
        Palindrome
      </button>
      <button
        onClick={() => {
          props.setButtonSelection("anagram");
        }}
        className="WGbutton"
      >
        Anagram
      </button>
    </div>
  );
}
