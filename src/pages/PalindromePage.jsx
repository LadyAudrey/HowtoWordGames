import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { palindrome } from "../utils/Palindrome";
import "./palindrome.css";

export default function PalindromePage() {
  const [output, setOutput] = useState("");
  const [inputValue, setInputValue] = useState("");
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit() {
    setOutput(palindrome(inputValue));
  }
  return (
    <div className="w-75 h-100 bg-light px-5 text-center">
      <h2 className="text-center">Palindrome</h2>
      <Form.Control
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Example"
        className="p-3 ms-3"
      />
      <Button variant="primary" className="my-4 m-auto" onClick={handleSubmit}>
        Let's Play
      </Button>
      {output.length > 0 && (
        <div className="border border-5 rounded-3 m-auto p-3 bg-success output">
          {output}
        </div>
      )}
    </div>
  );
}
