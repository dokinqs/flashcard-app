import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    const loggedname = this.props.isLoggedIn ? this.props.name : "Guest"
    return (
      <div className="home-page">
        <h1 className="font">Flashcardzzz</h1>
        <br/><br/>
        <h2>Welcome {loggedname}</h2>
        <Link to='/flashcards'>Start Studying</Link>
      </div>
    )
  }
}
