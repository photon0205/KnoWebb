import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './puzzle.css'
import { useTimer } from 'react-timer-hook';
import { useState } from "react";


export default function Puzzle() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10);
    console.log(time)
    const [stop, setStop] = useState(false);
    const [end, setEnd] = useState(false);
    const {
        seconds,
        minutes,
        pause
      } = useTimer({ time, onExpire: () => onSolved()});

      function onSolved(){
          setStop(true)
          setEnd(true)
      }

    return (
        <div>{ stop? (
            end?(
                <section className="showScore-section">
                <p>Your Time's Up!!</p>
                </section>
            ):(
                <section className="showScore-section">
                <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: '20px'}}>
                        You Took
                        <span>{minutes}</span>:<span>{seconds}</span> much Time!!
                    </div>
                </div>
                </section>
            )
        ):(
            <>
            <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '20px'}}>
              <span>{minutes}</span>:<span>{seconds}</span>
            </div>
          </div>,
            <JigsawPuzzle
            imageSrc='https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg'
            rows={3}
            columns={3}
            onSolved={() => alert('Solved!')}
            className="jigsaw-puzzle" /></>
        )}
        </div>
    )
}