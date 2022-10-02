import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './puzzle.css'
import { useTimer } from 'react-timer-hook';
import { useState } from "react";


export default function Puzzle() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10);
    const [stop, setStop] = useState(false);
    const [end, setEnd] = useState(false);
    const [seconds, setSeconds] = useState(false);
    const [minutes, setMinutes] = useState(false);

    function MyTimer({ expiryTimestamp }) {

        const {
          seconds,
          minutes,
          isRunning,
          start,
          pause,
        } = useTimer({ expiryTimestamp, onExpire: () => onTime() });

        function onTime(){
            setStop(true)
            setEnd(true)
            setSeconds(seconds)
            setMinutes(minutes)
            pause()
        }
      
        return (
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '20px'}}>
              <span>{minutes}</span>:<span>{seconds}</span>
            </div>
          </div>
        );
      }
      function onSolved(){
          setMinutes(minutes)
          setSeconds(seconds)
          setStop(true)
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
                    You Took <span>{minutes}</span>:<span>{seconds}</span> Time!!!
                    </div>
                </div>
                </section>
            )
        ):(
            <><MyTimer expiryTimestamp={time} />,
            <JigsawPuzzle
            imageSrc='https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg'
            rows={2}
            columns={2}
            onSolved={() => onSolved()}
            className="jigsaw-puzzle" /></>
        )}
        </div>
    )
}