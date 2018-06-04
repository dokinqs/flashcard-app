import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default class Flashcard extends Component {
  render() {
    // const { flashcard } = this.props.flashcard;
    console.log('render flashcard: ', this.props.flashcard);
    // const str = this.props.flashcard;
    // console.log('params.id: ', this.props.params.id);

    const loadflashcard = (this.props.id) != 'flashcards' ? (
      <div className="flashcard-div">
        <br />
        <h2>Flashcard #{this.props.id}</h2>
        <div className="flip">
          <p> Q: {this.props.flashcard.question} </p>
          <p> A: {this.props.flashcard.answer} </p>
        </div>
        {/* <p>q: {str.question}</p> */}
        {/* <p>id: {this.props.id}</p> */}

          {/* <div key={flashcard.id} className='flashcard-list'>
              <Link to ={`flashcards/${flashcard.id}`}>
                <div key={flashcard.id} >
                  # {flashcard.id}
                  <p>Q: {flashcard.question}</p>
                  <p>A: {flashcard.answer}</p>
                </div>
              </Link>
          </div>  */}
          <div className="lr">
            <Link to={`/flashcards/${parseInt(this.props.id)-1}`}>« Previous</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={`/flashcards/${parseInt(this.props.id)+1}`}>Next »</Link>
          </div>
          <br/>
          <button>Edit</button>
          <button>Delete</button>
    </div>) 
    : (
      <div> URL error </div>
    )

    return (
      <div>
       {loadflashcard} 
      </div>
    )
  }
}
