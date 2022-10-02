import Quiz from "./pages/quiz/Quiz";
import Puzzle from "./pages/puzzle/Puzzle";
import JumbleWord from "./pages/jumbleWord/JumbleWord"
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path={"/jumbleword"} element={<JumbleWord />} />
      </Routes>
    </Router>
  );
}

export default App;