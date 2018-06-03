import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import _ from 'lodash';

export default class Flashcard extends Component {
  render() {
    // const { flashcard } = this.props.flashcard;
    console.log('render flashcard: ', this.props.flashcard);
    // const str = this.props.flashcard;
    console.log(typeof(parseInt(this.props.id)));
    console.log(parseInt(this.props.id));
    console.log(this.props.id);

    const loadflashcard = (this.props.id) != 'flashcards' ? (
      <div className="flashcard-div">
        <br />
        <h2>Flashcard</h2>
        <div>
          <p> Q: {this.props.flashcard.question} </p>
        </div>
        {/* <p>q: {str.question}</p> */}
        <p>id: {this.props.id}</p>

          {/* <div key={flashcard.id} className='flashcard-list'>
            <BrowserRouter>
              <Link to ={`flashcards/${flashcard.id}`}>
                <div key={flashcard.id} >
                  # {flashcard.id}
                  <p>Q: {flashcard.question}</p>
                  <p>A: {flashcard.answer}</p>
                </div>
              </Link>
            </BrowserRouter>
          </div>  */}

    </div>) : (<div> URL error </div>)

    return (
      <div>
       {loadflashcard} 
      </div>
    )
  }
}
