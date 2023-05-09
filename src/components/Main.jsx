import "./Main.css";
import { containsLetters } from "../utils/ContainsLetters";

export default function Main() {
  return (
    <>
      <div className="main-body">
        <h2>What Word Games would you like to play?</h2>
        <div id="game-buttons">
          <button onClick={containsLetters} className="WGbutton">
            Contains These Letters
          </button>
          <button className="WGbutton">Contains Letter Sequence</button>
          <button id="palindrome" className="WGbutton">
            Palindrome
          </button>
          <button id="anagram" className="WGbutton">
            Anagrams
          </button>
          <button id="scrabble-solver" className="WGbutton">
            Scrabble Play
          </button>
        </div>
      </div>
    </>
  );
}
