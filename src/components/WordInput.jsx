import "./WordInput.css";
import { useState } from "react";

import { containsLetters } from "../utils/ContainsLetters";
import { containsString } from "../utils/ContainsString";
import { palindrome } from "../utils/Palindrome";
import { anagram } from "../utils/Anagram";

export default function WordInput(props) {
  let inputValue = "";
  function handleChange(e) {
    inputValue = e.target.value;
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div id="interactive">
        <label htmlFor="wordArgument">Your input:</label>
        <input
          type="text"
          name="wordArgument"
          value={inputValue}
          onChange={handleChange}
        />
        <button class="WGbutton" id="lets-play" onClick={handleSubmit}>
          Let's Play
        </button>
      </div>
    </>
  );
}
