import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Nav from './Nav';

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        {/* <Nav /> */}
        <h1 className="font">Flashcardzzz</h1>
        <br/><br/>
        <Link to='/flashcards'>Start Studying</Link>
      </div>
    )
  }
}
