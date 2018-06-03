import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const loggedIn = this.props.user;
    const logConfirm = loggedIn ? "Logout" : "Login"
    return (
      <nav className="nav-bar">
        {/* <BrowserRouter> */}
        <ul>
          <Link to='/'>
            <li className="nav-li">Home</li>
          </Link>
          <Link to='/flashcards'>
            <li className="nav-li">Flashcards</li>
          </Link>
          <Link to='/flashcards/new'>
            <li className="nav-li">New</li>
          </Link>
          <Link to='/login'>
            <li className="nav-li">{logConfirm}</li>
          </Link>
          <Link to='/register'>
            <li className="nav-li">Register</li>
          </Link>
        </ul>
        {/* </BrowserRouter> */}
      </nav>
    )
  }
}
