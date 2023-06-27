import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import ScrabbleSolverPage from "./pages/ScrabbleSolverPage";
import PalindromePage from "./pages/PalindromePage";
import AnagramPage from "./pages/AnagramPage";
import WordCloudPage from "./pages/WordCloudPage";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
  const [text, setText] = useState([]);
  return (
    <>
      <Header />
      <div className="d-flex" style={{ height: "75vh" }}>
        <SideBar />
        <Routes>
          <Route
            path={import.meta.env.BASE_URL + "/"}
            element={<HomePage setText={setText} text={text} />}
          />
          <Route
            path={import.meta.env.BASE_URL + "/restart"}
            element={<HomePage />}
          />
          <Route
            path={import.meta.env.BASE_URL + "/scrabble-solver"}
            element={<ScrabbleSolverPage wordArray={text} />}
          />
          <Route
            path={import.meta.env.BASE_URL + "/palindrome"}
            element={<PalindromePage />}
          />
          <Route
            path={import.meta.env.BASE_URL + "/anagram"}
            element={<AnagramPage wordArray={text} />}
          />
          <Route
            path={import.meta.env.BASE_URL + "/word-cloud"}
            element={<WordCloudPage />}
          />
          <Route
            path="*"
            element={<Navigate to={import.meta.env.BASE_URL + "/"} />}
          />
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
