import Quiz from "./pages/quiz/Quiz";
import Puzzle from "./pages/puzzle/Puzzle";
import Slider from "./pages/slider/Slider";
import Home from "./pages/home/Home"
import Jumbleword from "./pages/jumbleWord/JumbleWord"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";


function App() {
  return (
    <Router>
      <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/slider" element={<Slider />} />
          <Route path={"/jumbleword"} element={<Jumbleword/>}/>
      </Routes>
    </Router>
  );
}

export default App;