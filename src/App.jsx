import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
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
      <div className="d-flex" style={{ height: "75vh" }}>
        <SideBar />
        <Main
          buttonSelection={buttonSelection}
          setButtonSelection={setButtonSelection}
          selectionMade={selectionMade}
          setSelectionMade={setSelectionMade}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
