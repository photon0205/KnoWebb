import Quiz from "./pages/quiz/Quiz";
import Puzzle from "./pages/puzzle/Puzzle";
import Slider from "./pages/slider/Slider";
import Home from "./pages/home/Home"
import Jumbleword from "./pages/jumbleWord/JumbleWord"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Result from "./pages/result/result"
import Order from "./pages/order/order.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/slider" element={<Slider />} />
        <Route path={"/jumbleword"} element={<Jumbleword />} />
        <Route path={"/order"} element={<Order />} />
        <Route path={"/result"} element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;