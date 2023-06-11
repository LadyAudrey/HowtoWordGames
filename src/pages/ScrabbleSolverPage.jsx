import Output from "../components/Output";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import scrabbleSolver from "../utils/ScrabbleSolver";
import { Navigate } from "react-router-dom";

export default function ScrabbleSolverPage(props) {
  if (props.wordArray.length < 1) {
    return <Navigate to={import.meta.env.BASE_URL + "/"} />;
  }
  const [output, setOutput] = useState([
    "Your",
    "answer",
    "will",
    "be",
    "here",
  ]);
  const [inputValue, setInputValue] = useState("");
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit() {
    setOutput(scrabbleSolver(props.wordArray, inputValue));
  }
  return (
    <div className="w-75 h-100 px-5 text-center overflow-auto bg-light">
      <h2 className="test-center">Scrabble Solver</h2>
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
