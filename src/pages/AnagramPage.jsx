import Output from "../components/Output";
import WordInput from "../components/WordInput";
import { useState } from "react";
import { palindrome } from "../utils/Palindrome";

export default function AnagramPage() {
  const [output, setOutput] = useState(["Your answer will be here"]);
  const [inputGiven, setInputGiven] = useState(false);
  return (
    <div className="w-75 h-100 bg-light overflow-auto">
      <h2 className="text-center">Anagram</h2>
      <WordInput
        setOutput={setOutput}
        setInputGiven={setInputGiven}
        buttonSelection="anagram"
      />
      <Output output={output} />
    </div>
  );
}
