import React, { Component } from 'react';
import FlashcardForm from './FlashcardForm';

export default class EditFlashcard extends Component {
  render() {
    const { flashcard, id } = this.props
    return (
      <div>
        <h1>Edit Flashcard #{id}</h1>
        <FlashcardForm 
          flashcard={this.props.flashcard} 
          func={this.props.onSubmit}

        />
      </div>
    )
  }
}
