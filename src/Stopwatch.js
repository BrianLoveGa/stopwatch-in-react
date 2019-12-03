import React, { Component } from 'react';
import "./Stopwatch.css"



class Stopwatch extends Component {

  constructor() {
    super()

    this.state = { 
      count: 0,
      active: false,
      timer: null
    
    };
 
  };


  timerStart = () => {

    if (this.state.active !== true) {

      this.timer = setInterval(
        () => 
        this.setState({
          count: this.state.count +1,
          active: true
        }),
        1000
      );
    }

  };





pauseCount = () => {

    clearInterval(this.timer);
    this.setState({ active: false});
   
  };


  resetCount = () => {
   
    clearInterval(this.timer);
    this.setState({
      active: false,
      count: 0
    })

  };


  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.count}</h1>
        <div className="controls">
          <button  onClick={this.resetCount}>Reset</button>
          <button  onClick={this.timerStart}>Start</button>
          <button  onClick={this.pauseCount}>Pause</button>
        </div>
      </div>
    );
  }
}




export default Stopwatch;
