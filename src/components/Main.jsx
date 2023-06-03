import { useState } from "react";
import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";

import ButtonContainer from "./ButtonContainer";
import WordInput from "./WordInput";
import Output from "./Output";

export default function Main(props) {
  const {
    buttonSelection,
    setButtonSelection,
    selectionMade,
    setSelectionMade,
  } = props;
  const [output, setOutput] = useState(["Your answer will be here"]);
  const [inputGiven, setInputGiven] = useState(false);

  return (
    <Container as="main" className="bg-light">
      <Row className="text-center">
        <h2>What Word Game would you like to play?</h2>
        <ButtonContainer
          setButtonSelection={setButtonSelection}
          buttonSelection={buttonSelection}
          setSelectionMade={setSelectionMade}
        />
      </Row>
      {selectionMade && (
        <WordInput
          setOutput={setOutput}
          buttonSelection={buttonSelection}
          setInputGiven={setInputGiven}
        />
      )}
      {selectionMade && inputGiven && <Output output={output} />}
    </Container>
  );
}
