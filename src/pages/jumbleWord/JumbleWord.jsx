import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { randomWord, updateList } from './functions';
import './jumbleWord.css'
import { Link } from 'react-router-dom'

const JumbleWord = () => {
    const [list, setList] = useState([]);
    const [word, setWord] = useState();
    const [moves, setMoves] = useState();
    const [score, setScore] = useState(0);
    const [games, setGames] = useState(5);

    useEffect(() => {
        if (games !== 0) {
            const { word, list } = randomWord(games);
            setWord(word);
            setList(list);
            setMoves(word.length + 5);
        }
        if(games===0) {
            localStorage.setItem("jumbleword_score", score)
        }
    }, [games])

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const { items, correct } = updateList(list, result, word)
        setList(items);
        setMoves(moves - 1);
        if (moves - 1 === 0 && !correct) setGames(games - 1);
        if (correct) { setScore(score + 2); setGames(games - 1); }
    }

    return (
        <>
            <span className='d-block alignIt my-4'>Drag And Drop</span>
            {games !== 0 ? (<div className='alignIt my-4'><span className='d-block'>{`Moves : ${moves}`}</span><span className='d-block'>{`Score : ${score}`}</span><DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="droppable" direction='horizontal'>
                    {(provided) => (<>
                        <div className='custom-container my-4' ref={provided.innerRef}  {...provided.droppableProps}>
                            {list.map((ele, index) => {
                                return (
                                    <Draggable key={ele.id} draggableId={ele.id} index={index}>
                                        {(provided) => (<div ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps} className="item" draggable>
                                            {ele.letter}
                                        </div>)}
                                    </Draggable>)
                            })}
                        </div>
                        {provided.placeholder}</>
                    )}
                </Droppable>
            </DragDropContext> </div>) : (<div className='d-block alignIt my-4'><small>Game Over!!</small>
                <h4>{`Your score is ${score}`}</h4>
                <Link className='link' to="/">Next Challenge</Link>
            </div>)}
        </>)
}

export default JumbleWord