import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Nav from './Nav';

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <Nav /> */}
        <h1 class="font">Flashcardzzz</h1>
        <Link to='/flashcards'>See All Flashcards</Link>
      </div>
    )
  }
}
