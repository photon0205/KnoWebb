import React, { Component } from "react";
import { useState, useEffect } from "react";
import hand from "../../assets/hand.png"
import stripe from "../../assets/stripe.jpeg"
import jwst from "../../assets/jwst.jpeg"
import Blur from 'react-blur';
import (Link} from 'react-router-dom'

class Thing extends React.Component {
  render() {
    return (
        <>
        <div
            style={{
                marginTop: "80px",
            }}
        >
         <Blur img={jwst} blurRadius={this.props.radius} enableStyles>
         <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
         </Blur>
        </div><div
            style={{
                marginTop: "80px",
            }}
        >
         <img src={stripe} height="20px" width="1420px" />
        </div><div
            style={{
                marginLeft: this.props.left + "px",
                marginTop: "10px",
            }}
        >
                <img src={hand} height="40px" width="40px" />
            </div><div style={{textAlign: 'center'}}>
            <div style={{fontSize: '20px'}}>
              You are {Math.floor(100-Math.abs(this.props.left-700)/7)}% accurate
            <Link to="/"> Next Challenge </Link>
            </div>
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
    }, 1);
    return () => clearInterval(interval);
  }, [stop]);
  function move() {
    if (stop) {
        localStorage.setItem('slider_score',parseInt(10-Math.abs(this.props.left-700)/7))
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
  onkeypress = (event) =>{
    console.log(event)
    if(event.key===" "){
        setStop(true)
    }
}
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
        <Thing left={this.state.left} top={this.state.top} radius= {Math.abs(this.state.left/10-70)}/>
        <Controls
          move={(x) => this.move(x)}
          left={this.state.left}
        />
      </div>
    );
  }
}
