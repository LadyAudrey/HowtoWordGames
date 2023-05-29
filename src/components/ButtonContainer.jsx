import React from "react";
import "./ButtonContainer.css";
import { containsLetters } from "../utils/ContainsLetters";

export default function ButtonContainer(props) {
  const { setButtonSelection, buttonSelection, setSelectionMade } = props;
  return (
    <div id="game-buttons">
      {(buttonSelection === "" || buttonSelection === "containsLetters") && (
        <button
          onClick={() => {
            setButtonSelection("containsLetters");
            setSelectionMade(true);
          }}
          className={
            buttonSelection === "containsLetters"
              ? "btn btn-danger btn-lg active-button"
              : "btn btn-danger btn-lg"
          }
        >
          Contains These Letters
        </button>
      )}
      {(buttonSelection === "" || buttonSelection === "containsString") && (
        <button
          onClick={() => {
            setButtonSelection("containsString");
            setSelectionMade(true);
          }}
          className={
            buttonSelection === "containsString"
              ? "btn btn-danger btn-lg active-button"
              : "btn btn-danger btn-lg"
          }
        >
          Contains This Sequence
        </button>
      )}
      {(buttonSelection === "" || buttonSelection === "palindrome") && (
        <button
          onClick={() => {
            setButtonSelection("palindrome");
            setSelectionMade(true);
          }}
          className={
            buttonSelection === "palindrome"
              ? "btn btn-danger btn-lg active-button"
              : "btn btn-danger btn-lg"
          }
        >
          Palindrome
        </button>
      )}
      {(buttonSelection === "" || buttonSelection === "anagram") && (
        <button
          onClick={() => {
            setButtonSelection("anagram");
            setSelectionMade(true);
          }}
          className={
            buttonSelection === "anagram"
              ? "btn btn-danger btn-lg active-button"
              : "btn btn-danger btn-lg"
          }
        >
          Anagram
        </button>
      )}
    </div>
  );
}
