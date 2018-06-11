import React, { Component } from 'react';
import FlashcardForm from './FlashcardForm';

export default class EditFlashcard extends Component {
  render() {
    return (
      <div>
        <h1>Edit Flashcard #{this.props.id}</h1>
        <FlashcardForm 
          flashcard={this.props.flashcard} 
          func={this.props.onSubmit}

        />
      </div>
    )
  }
}
