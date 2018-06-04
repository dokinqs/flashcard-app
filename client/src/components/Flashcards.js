import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default class Flashcards extends Component {
  render() {
    const loggedIn = this.props.isLoggedIn;
			const logConfirm = loggedIn ? (
        <div className="flashcards-list-div">
          <br />
          <h2>Flashcards List</h2>
          <p>( click on one to start studying )</p>

          {_.map(this.props.flashcards, flashcard => (

            <div key={flashcard.id} className='flashcard-list'>
              <Link to={`/flashcards/${flashcard.id}`}>
                <div key={flashcard.id} >
                  # {flashcard.id}
                  <p className="q">Q: {flashcard.question}</p>
                  <p>A: {flashcard.answer}</p>
                </div>
              </Link>
            </div> 
        ))}
      </div>
      ) : (<Link to='/login'><h1 class="prompt">Please log in to see flashcards</h1></Link>);
    return (
      <div>
				{logConfirm}
			</div>
    )
  }
}
