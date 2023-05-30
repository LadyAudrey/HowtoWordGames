import "./WordInput.css";
import { useState, useEffect } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";

import { containsLetters } from "../utils/ContainsLetters";
import { containsString } from "../utils/ContainsString";
import { palindrome } from "../utils/Palindrome";
import { anagram } from "../utils/Anagram";

export default function WordInput(props) {
  const { setOutput, buttonSelection } = props;
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState([""]);
  useEffect(() => {
    if (text.length === 1) {
      fetch("/sowpods.txt")
        .then((r) => r.text())
        .then((text) => {
          setText(text.split("\n"));
        });
    }
  }, []);
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    // prevents refreshing the page
    e.preventDefault();
    props.setInputGiven(true);
    switch (buttonSelection) {
      case "containsLetters":
        const lettersResult = containsLetters(text, inputValue);
        setOutput(lettersResult);
        break;
      case "containsString":
        const stringResult = containsString(text, inputValue);
        setOutput(stringResult);
        break;
      case "palindrome":
        const palindromeResult = palindrome(inputValue);

        setOutput(["Your ", "answer ", "is ", palindromeResult]);
        break;
      case "anagram":
        const anagramResult = anagram(text, inputValue);
        setOutput(anagramResult);
        break;
      default:
        setOutput("This is a default string");
    }
  }
  return (
    <div id="interactive" className="mt-4">
      {/* <label htmlFor="wordArgument">Your input:</label> */}
      {/* <input
          type="text"
          name="wordArgument"
          value={inputValue}
          onChange={handleChange}
        /> */}
      <FloatingLabel
        controlId="wordArgument"
        label="Input"
        className="input-container"
      >
        <Form.Control
          type="text"
          onChange={handleChange}
          placeholder="sample"
          // className="p-3 ms-3"
        />
      </FloatingLabel>
      <Button variant="primary" className="my-4" onClick={handleSubmit}>
        Let's Play
      </Button>
    </div>
  );
}
