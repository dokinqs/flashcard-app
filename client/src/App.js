import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }
  
  componentDidMount() {
    fetch(`${BASE_URL}/cards`)
      .then(resp => resp.json())
      .then(data => this.setState({
        cards: data.cards
      }));
  }
  render() {
    return (
      <div className="App">
        <div>hi karen</div>
        <div>JSON.stringify(this.state.juices)</div>
        <div>{BASE_URL}</div>
      </div>
    );
  }
}

export default App;
