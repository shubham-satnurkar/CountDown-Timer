import React, { Component } from 'react'

export default class Buttons extends Component {
  
  render() {
    return (
      <div>
        <button className='btn btn-success' onClick={this.props.start}>Start</button>
        <button className='btn btn-primary' style={{margin:10}} onClick={this.props.toggleCountDown}>Pause/Resume</button>
        <button className='btn btn-danger' onClick={this.props.reset}>Reset</button>
      </div>
    )
  }
}
