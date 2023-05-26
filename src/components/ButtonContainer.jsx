import React from "react";
import "./ButtonContainer.css";
import { containsLetters } from "../utils/ContainsLetters";

export default function ButtonContainer(props) {
  const { setButtonSelection, buttonSelection, setSelectionMade } = props;
  return (
    <div id="game-buttons">
      <button
        onClick={() => {
          setButtonSelection("containsLetters");
          setSelectionMade(true);
        }}
        className={
          buttonSelection === "containsLetters"
            ? "WGbutton active-button"
            : "WGbutton"
        }
      >
        Contains These Letters
      </button>
      <button
        onClick={() => {
          setButtonSelection("containsString");
          setSelectionMade(true);
        }}
        className={
          buttonSelection === "containsString"
            ? "WGbutton active-button"
            : "WGbutton"
        }
      >
        Contains This Sequence
      </button>
      <button
        onClick={() => {
          setButtonSelection("palindrome");
          setSelectionMade(true);
        }}
        className={
          buttonSelection === "palindrome"
            ? "WGbutton active-button"
            : "WGbutton"
        }
      >
        Palindrome
      </button>
      <button
        onClick={() => {
          setButtonSelection("anagram");
          setSelectionMade(true);
        }}
        className={
          buttonSelection === "anagram" ? "WGbutton active-button" : "WGbutton"
        }
      >
        Anagram
      </button>
    </div>
  );
}
