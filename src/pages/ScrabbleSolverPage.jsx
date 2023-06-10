import Output from "../components/Output";
import WordInput from "../components/WordInput";
import { useState } from "react";

export default function ScrabbleSolverPage() {
  const [output, setOutput] = useState(["Your answer will be here"]);
  const [inputGiven, setInputGiven] = useState(false);
  return (
    <div className="w-75 h-100 bg-light">
      <h2 className="test-center">Scrabble Solver</h2>
      <WordInput
        setOutput={setOutput}
        setInputGiven={setInputGiven}
        buttonSelection="scrabble-solver"
      />
      <Output output={output} />
    </div>
  );
}
