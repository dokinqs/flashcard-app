import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor() {
    super();

    this.state = {
      flashcards: []
    };
  }
  
  componentDidMount() {
    fetch(`${BASE_URL}/flashcards`)
      .then(resp => resp.json())
      .then(data => this.setState({
        flashcards: data.flashcards
      }));
  }
  
  render() {
    return (
      <div className="App">
        <Home />
        <div>react flashcardzzz</div>
        <div>{JSON.stringify(this.state.flashcards)}</div>
        {this.state.flashcards.map(flashcard => {
          return <p key={flashcard.id}> Question: {flashcard.question}, Answer: {flashcard.answer} </p>
        })}
        <div>{BASE_URL}</div>
      </div>
    );
  }
}

export default App;
