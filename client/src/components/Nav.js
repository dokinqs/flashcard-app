import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const loggedIn = this.props.loggedIn;
    const logConfirm = loggedIn ? "Logout" : "Login"
    return (
      <nav className="nav-bar">

        <ul>
          <Link to='/'>
            <li className="nav-li b">Home</li>
          </Link>
          <Link to='/flashcards'>
            <li className="nav-li g">Flashcards</li>
          </Link>
          <Link to='/flashcards/new'>
            <li className="nav-li y">New</li>
          </Link>
          <Link to='/login'>
            <li className="nav-li o">{logConfirm}</li>
          </Link>
          <Link to='/register'>
            <li className="nav-li r">Register</li>
          </Link>
        </ul>

      </nav>
    )
  }
}
