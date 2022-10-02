import Quiz from "./pages/quiz/Quiz";
import Puzzle from "./pages/puzzle/Puzzle";
import JumbleWord from "./pages/jumbleWord/JumbleWord"
import Home from "./pages/home/Home";
import Slider from "./pages/slider/Slider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Order from "./pages/order/order";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path={"/jumbleword"} element={<JumbleWord />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;