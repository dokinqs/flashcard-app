import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import _ from 'lodash';

export default class Flashcards extends Component {
  render() {
    return (
      <div className="flashcards-list-div">
        <br />
        <h2>Flashcards List</h2>

        {_.map(this.props.flashcards, flashcard => (

          <div key={flashcard.id} className='flashcard-list'>
            <BrowserRouter>
              <Link to ={`flashcards/${flashcard.id}`}>
                <div key={flashcard.id} >
                  #: {flashcard.id}
                  <p>Q: {flashcard.question}</p>
                  <p>A: {flashcard.answer}</p>
                </div>
              </Link>
            </BrowserRouter>

          </div> 
      ))}
    </div>
    )
  }
}
