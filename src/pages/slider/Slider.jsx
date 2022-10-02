import React, { Component } from "react";
import { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import hand from "../../assets/hand.png"
import stripe from "../../assets/stripe.jpeg"

class Thing extends React.Component {
  render() {
    return (
        <><div
            style={{
                marginTop: "80px",
            }}
        >
         <img src={stripe} height="40px" width="1420px" />
        </div><div
            style={{
                marginLeft: this.props.left + "px",
                marginTop: "100px",
            }}
        >
                <img src={hand} height="40px" width="40px" />
            </div></>
    );
  }
}

function Controls(props) {
  const [stop, setStop] = useState(false);
  var left = 0,
    moving = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      move();
    }, 50);
    return () => clearInterval(interval);
  }, []);
  function move() {
      console.log(stop)
    if (stop) {
      console.log(left);
    } else {
      if (left === 1400) {
        moving = 1;
      } else if (left === 0) {
        moving = 0;
      }
      if (moving === 1) {
        left = left - 10;
        props.move(-10, 0);
      } else if (moving === 0) {
        left = left + 10;
        props.move(10, 0);
      }
    }
  }
  return (
    <section className="showScore-section">
    <div style={{textAlign: 'center'}}>
        <div style={{fontSize: '20px'}}>
        <button onClick={()=>{setStop(true);console.log(stop)}}>Stop</button>
        </div>
    </div>
    </section>
  );
  }

export default class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      left: 0,
    };
  }

  move(x) {
    this.setState({
      left: this.state.left + x,
    });
  }

  render() {
    return (
      <div>
        <Thing left={this.state.left} top={this.state.top} />
        <Controls
          move={(x) => this.move(x)}
          left={this.state.left}
        />
      </div>
    );
  }
}
