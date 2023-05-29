import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [buttonSelection, setButtonSelection] = useState("");
  const [selectionMade, setSelectionMade] = useState(false);
  return (
    <>
      <Header
        setButtonSelection={setButtonSelection}
        setSelectionMade={setSelectionMade}
      />
      <Main
        buttonSelection={buttonSelection}
        setButtonSelection={setButtonSelection}
        selectionMade={selectionMade}
        setSelectionMade={setSelectionMade}
      />
      <Footer />
    </>
  );
}

export default App;
