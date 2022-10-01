import Quiz from "./pages/quiz/Quiz";
import Puzzle from "./pages/puzzle/Puzzle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/puzzle" element={<Puzzle />} />
      </Routes>
    </Router>
  );
}

export default App;