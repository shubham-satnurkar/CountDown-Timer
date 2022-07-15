import React, { Component } from 'react';
// import { ReactDOM } from 'react'
import Timerinput from './Timerinput';
import Timer from './Timer';
import Buttons from './Buttons';

export default class Timerapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: '00',
    }

    this.second = this.secondsRemaining;
    this.interval = this.intervalHandle;
    this.handleChangeMin = this.handleChangeMin.bind(this);
    // this.handleChangeSec = this.handleChangeSec.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.resetCountDown = this.resetCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }


  handleChangeMin(event) {
    this.setState({
      minutes: event.target.value,
    })
  }
  // handleChangeSec(event) {
  //   this.setState({
  //     seconds: event.target.value
  //   })
  // }

  tick() {
    var min = Math.floor(this.second / 60);
    var sec = this.second - (min * 60);

    this.setState({
      minutes: min,
      seconds: sec
    })

    // if (sec < 10) {
    //   this.setState({
    //     seconds: "" + this.state.seconds,
    //   })
    // }

    // if (min < 10) {
    //   this.setState({
    //     value: "" + this.state.min,
    //   })
    // }

    if (min === 0 & sec === 0) {
      clearInterval(this.interval);
    }
    this.second--

  }

  startCountDown() {
    this.interval = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.second = time * 60;
    this.setState({
      isClick: true
    })
  }
  resetCountDown(){
    clearInterval(this.interval); 
  }

  render() {
    return (
      <>
        <Timerinput minutes={this.state.minutes}  handleChangeMin={this.handleChangeMin}  />
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <Buttons start={this.startCountDown} reset={this.resetCountDown} minutes={this.state.minutes}  />
      </>
    )
  }
}
