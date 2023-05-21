import { useState } from "react";
import "./Main.css";
import { containsLetters } from "../utils/ContainsLetters";
import { containsString } from "../utils/ContainsString";
import { palindrome } from "../utils/Palindrome";
import { anagram } from "../utils/Anagram";
import ButtonContainer from "./ButtonContainer";
import WordInput from "./WordInput";
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
  const [buttonSelection, setButtonSelection] = useState("");
  const [output, setOutput] = useState("Your answer will be here");
  return (
    <>
      <main className="main-body">
        <h2>What Word Games would you like to play?</h2>
        <ButtonContainer setButtonSelection={setButtonSelection} />
        <WordInput setOutput={setOutput} buttonSelection={buttonSelection} />
        <Output output={output} />
      </main>
    </>
  );
}
