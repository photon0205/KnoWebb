import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./order.css";
import a from "../../assets/order/1.jpg";
import b from "../../assets/order/2.jpg";
import c from "../../assets/order/3.jpg";
import d from "../../assets/order/4.jpg";
import e from "../../assets/order/5.jpg";
import f from "../../assets/order/6.jpg";

const Order = () => {
  const [done, setdone] = useState(false);
  const [minutes, setminutes] = useState(1);
  const [seconds, setseconds] = useState(0);
  const [score, setscore] = useState(0);
  var timer;
  var arr = [a, b, c, d, e, f];
  const [activeImg, setactiveImg] = useState(null);
  const [shuffleImages, setShuffleImages] = useState([a, b, c, d, e, f]);
  const [ansArr1, setAnsArr1] = useState(null);
  const [ansArr2, setAnsArr2] = useState(null);
  const [ansArr3, setAnsArr3] = useState(null);
  const [ansArr4, setAnsArr4] = useState(null);
  const [ansArr5, setAnsArr5] = useState(null);
  const [ansArr6, setAnsArr6] = useState(null);
  useEffect(() => {
    timer = done
      ? null
      : setInterval(() => {
          setseconds(seconds - 1);
          if (seconds === 0) {
            setminutes(minutes - 1);
            setseconds(59);
          }
          if (seconds === 0 && minutes === 0) {
            alert("Time Up!!!");
            localStorage.setItem("order_score", "5");
            setdone(true);
          }
        }, 1000);

    return () => clearInterval(timer);
  });

  useEffect(() => {
    function checkAns() {
      if (
        ansArr1 !== null &&
        ansArr2 !== null &&
        ansArr3 !== null &&
        ansArr4 !== null &&
        ansArr5 !== null &&
        ansArr6 !== null
      ) {
        if (
          ansArr1 === a &&
          ansArr2 === b &&
          ansArr3 === c &&
          ansArr4 === d &&
          ansArr5 === e &&
          ansArr6 === f
        ) {
          var scor = seconds / 4;
          scor = scor > 10 ? 10 : scor;
          scor = Math.floor(scor);
          setscore(scor);
          localStorage.setItem("order_score", scor);
          setdone(true);
        } else {
          alert("Wrong");
        }
      }
    }
    checkAns();
  }, [ansArr1, ansArr2, ansArr3, ansArr4, ansArr5, ansArr6]);

  useEffect(() => {
    function shuffle() {
      var array = arr;
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      setShuffleImages(array);
    }
    shuffle();
  }, []);

  return (
    <div className="main">
      {done ? (
        <div className="score">
          {score}
          <Link className="link" to="/result">
            {" "}
            Results
          </Link>
        </div>
      ) : (
        <div className="game">
          <div className="heading">
            Set the Images of the Telescope in the right order
          </div>
          <div className="timer">
            {minutes}:{seconds}
          </div>
          <div className="order_view">
            <div
              className="order-1"
              onClick={() => {
                !activeImg && setactiveImg(ansArr1);
                !activeImg && setAnsArr1(null);
                activeImg && setAnsArr1(activeImg);
                activeImg && setactiveImg(null);
              }}
            >
              {ansArr1 && <img src={ansArr1} alt="" />}
            </div>
            <div
              className="order-2"
              onClick={() => {
                !activeImg && setactiveImg(ansArr2);
                !activeImg && setAnsArr2(null);
                activeImg && setAnsArr2(activeImg);
                activeImg && setactiveImg(null);
              }}
            >
              {ansArr2 && <img src={ansArr2} alt="" />}
            </div>
            <div
              className="order-3"
              onClick={() => {
                !activeImg && setactiveImg(ansArr3);
                !activeImg && setAnsArr3(null);
                activeImg && setAnsArr3(activeImg);
                activeImg && setactiveImg(null);
              }}
            >
              {ansArr3 && <img src={ansArr3} alt="" />}
            </div>
            <div
              className="order-4"
              onClick={() => {
                !activeImg && setactiveImg(ansArr4);
                !activeImg && setAnsArr4(null);
                activeImg && setAnsArr4(activeImg);
                activeImg && setactiveImg(null);
              }}
            >
              {ansArr4 && <img src={ansArr4} alt="" />}
            </div>
            <div
              className="order-5"
              onClick={() => {
                !activeImg && setactiveImg(ansArr5);
                !activeImg && setAnsArr5(null);
                activeImg && setAnsArr5(activeImg);
                activeImg && setactiveImg(null);
              }}
            >
              {ansArr5 && <img src={ansArr5} alt="" />}
            </div>
            <div
              className="order-6"
              onClick={() => {
                !activeImg && setactiveImg(ansArr6);
                !activeImg && setAnsArr6(null);
                activeImg && setAnsArr6(activeImg);
                activeImg && setactiveImg(null);
              }}
            >
              {ansArr6 && <img src={ansArr6} alt="" />}
            </div>
          </div>
          <div className="order_names"></div>
          <div className="shuffle_images">
            {
              <img
                className="shufImg"
                src={
                  activeImg !== shuffleImages[0] &&
                  !(
                    ansArr1 === shuffleImages[0] ||
                    ansArr2 === shuffleImages[0] ||
                    ansArr3 === shuffleImages[0] ||
                    ansArr4 === shuffleImages[0] ||
                    ansArr5 === shuffleImages[0] ||
                    ansArr6 === shuffleImages[0]
                  )
                    ? shuffleImages[0]
                    : null
                }
                alt=""
                onClick={() => {
                  setactiveImg(shuffleImages[0]);
                }}
              />
            }
            {
              <img
                className="shufImg"
                src={
                  activeImg !== shuffleImages[1] &&
                  !(
                    ansArr1 === shuffleImages[1] ||
                    ansArr2 === shuffleImages[1] ||
                    ansArr3 === shuffleImages[1] ||
                    ansArr4 === shuffleImages[1] ||
                    ansArr5 === shuffleImages[1] ||
                    ansArr6 === shuffleImages[1]
                  )
                    ? shuffleImages[1]
                    : null
                }
                alt=""
                onClick={() => {
                  setactiveImg(shuffleImages[1]);
                }}
              />
            }
            {
              <img
                className="shufImg"
                src={
                  activeImg !== shuffleImages[2] &&
                  !(
                    ansArr1 === shuffleImages[2] ||
                    ansArr2 === shuffleImages[2] ||
                    ansArr3 === shuffleImages[2] ||
                    ansArr4 === shuffleImages[2] ||
                    ansArr5 === shuffleImages[2] ||
                    ansArr6 === shuffleImages[2]
                  )
                    ? shuffleImages[2]
                    : null
                }
                alt=""
                onClick={() => {
                  setactiveImg(shuffleImages[2]);
                }}
              />
            }
            {
              <img
                className="shufImg"
                src={
                  activeImg !== shuffleImages[3] &&
                  !(
                    ansArr1 === shuffleImages[3] ||
                    ansArr2 === shuffleImages[3] ||
                    ansArr3 === shuffleImages[3] ||
                    ansArr4 === shuffleImages[3] ||
                    ansArr5 === shuffleImages[3] ||
                    ansArr6 === shuffleImages[3]
                  )
                    ? shuffleImages[3]
                    : null
                }
                alt=""
                onClick={() => {
                  setactiveImg(shuffleImages[3]);
                }}
              />
            }
            {
              <img
                className="shufImg"
                src={
                  activeImg !== shuffleImages[4] &&
                  !(
                    ansArr1 === shuffleImages[4] ||
                    ansArr2 === shuffleImages[4] ||
                    ansArr3 === shuffleImages[4] ||
                    ansArr4 === shuffleImages[4] ||
                    ansArr5 === shuffleImages[4] ||
                    ansArr6 === shuffleImages[4]
                  )
                    ? shuffleImages[4]
                    : null
                }
                alt=""
                onClick={() => {
                  setactiveImg(shuffleImages[4]);
                }}
              />
            }
            {
              <img
                className="shufImg"
                src={
                  activeImg !== shuffleImages[5] &&
                  !(
                    ansArr1 === shuffleImages[5] ||
                    ansArr2 === shuffleImages[5] ||
                    ansArr3 === shuffleImages[5] ||
                    ansArr4 === shuffleImages[5] ||
                    ansArr5 === shuffleImages[5] ||
                    ansArr6 === shuffleImages[5]
                  )
                    ? shuffleImages[5]
                    : null
                }
                alt=""
                onClick={() => {
                  setactiveImg(shuffleImages[5]);
                }}
              />
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
