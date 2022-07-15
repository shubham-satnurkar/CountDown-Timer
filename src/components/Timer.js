import React, { Component } from 'react'

export default class Timer extends Component {
  
  render() {
    return (
      <>
        <h1 style={{fontSize:100}}>{this.props.minutes}:{this.props.seconds}</h1>
      </>
    )
  }
}
