import "./Main.css";
import { containsLetters } from "../utils/ContainsLetters";
import { containsString } from "../utils/ContainsString";
import { palindrome } from "../utils/Palindrome";
import { anagram } from "../utils/Anagram";
import WordInput from "./WordInput";
import { useState } from "react";
import Output from "./Output";

export default function Main() {
  const wordList = [
    "AARDWOLVES",
    "ABEL",
    "AARGH",
    "ACT",
    "BALE",
    "BOOK",
    "BOOKKEEPER",
    "BRR",
    "KAYAK",
    "NOON",
    "ROTATOR",
  ];
  return (
    <>
      <div className="main-body">
        <h2>What Word Games would you like to play?</h2>
        <div id="game-buttons">
          <button
            onClick={() => {
              console.log(containsLetters(wordList, "ABEL"));
            }}
            className="WGbutton"
          >
            Contains These Letters
          </button>
          <button
            onClick={() => {
              console.log(containsString(wordList, "ACT"));
            }}
            className="WGbutton"
          >
            Scrabble Solver
          </button>
          <button
            onClick={() => {
              console.log(palindrome(wordList));
            }}
            className="WGbutton"
          >
            Palindrome
          </button>
          <button
            onClick={() => {
              console.log(anagram(wordList, "ABEL"));
            }}
            className="WGbutton"
          >
            Anagram
          </button>
        </div>
        <WordInput />
        <Output output="it's working!" />
      </div>
    </>
  );
}
