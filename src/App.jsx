import Quiz from "./pages/quiz/Quiz";
import Puzzle from "./pages/puzzle/Puzzle";
import Slider from "./pages/slider/Slider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/slider" element={<Slider />} />
      </Routes>
    </Router>
  );
}

export default App;