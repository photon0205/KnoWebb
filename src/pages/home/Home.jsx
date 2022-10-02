import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

const Home = () => {
    return (
        <div className="my-4">
            <Link className="link" to="/quiz">Quiz</Link>
            <Link className="link" to="/puzzle">Puzzle</Link>
            <Link className="link" to="/jumbleword">JumbleWord</Link>
            <Link className="link" to="/order">Order</Link>
        </div>
    )
}

export default Home