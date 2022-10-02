import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './puzzle.css'
import { useTimer } from 'react-timer-hook';
import { useState } from "react";


export default function Puzzle() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 100);
    const [stop, setStop] = useState(false);
    const [end, setEnd] = useState(false);
    const [seconds, setSeconds] = useState(false);
    const [minutes, setMinutes] = useState(false);
    
     const imgList = ['https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/spaceimg%2Fgsfc_20171208_archive_e000226_orig.jpg?alt=media&token=10e37a81-5bbf-4958-8b41-9351aa641152',
  'https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/spaceimg%2Fhubble.jpg?alt=media&token=de1c630e-143b-4370-9fd8-6e1a58cdd7da',
  'https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/spaceimg%2Fhubble2.jpg?alt=media&token=b95b71a1-3683-43af-976c-2b75a9bf36a1',
  'https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/spaceimg%2Fhubble_iras055062414_potw2238a.jpg?alt=media&token=a163b8d1-184e-4db2-9007-4b2e72c0bde5',
  'https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/spaceimg%2Fhubble_ugc9391_potw2152ajpg.jpg?alt=media&token=e593a3a3-63a6-4eba-9022-c1bae521bfa2',
  'https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/spaceimg%2Fss1.jpeg?alt=media&token=9d630634-ceb8-4407-8b80-2f5be3fe5d51',
  'https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/spaceimg%2Fss2.jpg?alt=media&token=804237a0-56f5-4f32-b5c4-b374907119ed',
  'https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/spaceimg%2Fss3.jpg?alt=media&token=5d05ca25-5754-4672-a748-a2cf8668615e',
  'https://firebasestorage.googleapis.com/v0/b/nasa-hackathon-50da5.appspot.com/o/spaceimg%2Fss5.jpg?alt=media&token=685fdd03-4e9d-4614-9d17-524b58cfd19b'
  ];
    
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
                <section >
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
           imageSrc={imgList[Math.random()*imgList.length()]}
            rows={1}
            columns={6}
             
            onSolved={() => onSolved()}
            className="jigsaw-puzzle" /></>
        )}
        </div>
    )
}
