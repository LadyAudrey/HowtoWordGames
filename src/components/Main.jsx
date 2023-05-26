import { useState } from "react";
import "./Main.css";
import ButtonContainer from "./ButtonContainer";
import WordInput from "./WordInput";
import Output from "./Output";

export default function Main() {
  const [buttonSelection, setButtonSelection] = useState("");
  const [output, setOutput] = useState(["Your answer will be here"]);
  const [selectionMade, setSelectionMade] = useState(false);
  const [inputGiven, setInputGiven] = useState(false);

  return (
    <main className="main-body">
      <h2>What Word Games would you like to play?</h2>
      <ButtonContainer
        setButtonSelection={setButtonSelection}
        buttonSelection={buttonSelection}
        setSelectionMade={setSelectionMade}
      />
      {selectionMade && (
        <WordInput
          setOutput={setOutput}
          buttonSelection={buttonSelection}
          setInputGiven={setInputGiven}
        />
      )}
      {selectionMade && inputGiven && <Output output={output} />}
    </main>
  );
}
