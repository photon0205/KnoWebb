import React, { Component } from "react";
import { useState, useEffect } from "react";
import hand from "../../assets/hand.png"
import stripe from "../../assets/stripe.jpeg"
import Blur from 'react-blur';



class Thing extends React.Component {
  render() {
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
    return (
        <>
        <div
            style={{
                marginTop: "80px",
            }}
        >
         <Blur img={imgList[Math.random()*imgList.length()]} blurRadius={this.props.radius} enableStyles>
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
              You are {parseInt(100-Math.abs(this.props.left-700)/7)}% accurate
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
      localStorage.setItem('slider_score',parseInt(10-Math.abs(this.props.left-700)/70))
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
