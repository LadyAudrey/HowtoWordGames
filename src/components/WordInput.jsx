import "./WordInput.css";
import { useState } from "react";

export default function WordInput() {
  const [wordInput, setWordInput] = useState("");
  function handleChange(e) {
    setWordInput(e.target.value);
  }
  return (
    <>
      <div id="interactive">
        <label htmlFor="wordArgument">Your input:</label>
        <input type="text" name="wordArgument" onChange={handleChange} />
        <button class="WGbutton" id="lets-play">Let's Play</button>
      </div>
    </>
  );
}
