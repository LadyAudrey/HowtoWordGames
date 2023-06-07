import Output from "../components/Output";
import WordInput from "../components/WordInput";
import { useState } from "react";
import { palindrome } from "../utils/Palindrome";

export default function PalindromePage() {
  const [output, setOutput] = useState(["Your answer will be here"]);
  const [inputGiven, setInputGiven] = useState(false);
  return (
    <div className="w-75 h-100 bg-light">
      <h2 className="text-center">Palindrome</h2>
      <WordInput
        setOutput={setOutput}
        setInputGiven={setInputGiven}
        buttonSelection="palindrome"
      />
      <Output output={output} />
    </div>
  );
}
