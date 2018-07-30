import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactSpeedometer from "react-d3-speedometer";

class App extends Component {
  state = {
    va: 332
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        val: Math.floor((Math.random() * 999) + 1)
      })
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">What is your general Sentiment towards Crypto right now?</h1>
        </header>
        <div className="lblStrongBearish">Strong Bearish</div>
        <div className="lblBearish">Bearish</div>
        <div className="lblNeutral">Neutral</div>
        <div className="lblBullish">Bullish</div>
        <div className="lblStrongBullish">Very Bullish</div>
        
        <div className="spedometer">
          <ReactSpeedometer 
            value={this.state.val}
            needleTransitionDuration={2000}
            needleTransition="easeElastic"
          />
        </div>
      </div>
    );
  }
}

export default App;
