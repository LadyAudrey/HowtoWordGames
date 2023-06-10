import Output from "../components/Output";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { anagram } from "../utils/Anagram";

export default function AnagramPage(props) {
  const [output, setOutput] = useState([
    "Your",
    "anagram(s)",
    "will",
    "be",
    "here",
  ]);
  const [inputValue, setInputValue] = useState("");
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit() {
    setOutput(anagram(props.wordArray, inputValue));
  }
  return (
    <div className="w-75 h-100 bg-light overflow-auto px-5 text-center">
      <h2 className="text-center">Anagram</h2>
      <Form.Control
        type="text"
        value={inputValue}
        rows={5}
        onChange={handleChange}
        placeholder="sample"
        className="p-3"
      />
      <Button variant="primary" className="my-4 m-auto" onClick={handleSubmit}>
        Let's Play
      </Button>
      <Output output={output} />
    </div>
  );
}
