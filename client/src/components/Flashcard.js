import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default class Flashcard extends Component {
  constructor() {
    super();

    this.state = {
      isEdit: false
    }
  }

  editFlashcard(id) {
    this.props.history.push(`/flashcards/${this.props.id}`);
  }

  editClick() {
    this.state = {
      isEdit: true
    }
  }

  render() {
    const { question, answer } = this.props.flashcard;
    console.log('render flashcard: ', this.props.flashcard);
    // const str = this.props.flashcard;
    // console.log('params.id: ', this.props.params.id);

    const loadflashcard = (this.props.id) != 'flashcards' ? (
      <div className="flashcard-div">
        <br />
        <h2>Flashcard #{this.props.id}</h2>
        <div className="flip flashcard-list">
          <p> Q: {question} 
          </p>
          <p> A: {answer} 
          </p>
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
          <Link to={`/flashcards/${this.props.id}/edit`}>
            <button onClick={this.editClick.bind(this)}>Edit</button>
          </Link>
          <Link to="/flashcards">
            <button>Delete</button>
          </Link>
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
