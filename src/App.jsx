import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";
import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import HomePage from "./pages/HomePage";
import ScrabbleSolverPage from "./pages/ScrabbleSolverPage";
import PalindromePage from "./pages/PalindromePage";
import AnagramPage from "./pages/AnagramPage";
import WordCloudPage from "./pages/WordCloudPage";
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restart" element={<HomePage />} />
          <Route path="/scrabble-solver" element={<ScrabbleSolverPage />} />
          <Route path="/palindrome" element={<PalindromePage />} />
          <Route path="/anagram" element={<AnagramPage />} />
          <Route path="/word-cloud" element={<WordCloudPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

{
  /* <Main
                buttonSelection={buttonSelection}
                setButtonSelection={setButtonSelection}
                selectionMade={selectionMade}
                setSelectionMade={setSelectionMade}
              /> */
}
