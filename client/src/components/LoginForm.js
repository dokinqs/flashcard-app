import React, { Component } from 'react';
import { Redirect, BrowserRouter, Link } from 'react-router-dom';
import _ from 'lodash';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      flashcards: 
      [
        {
          question: 'Q1: Why are you not logged in',
          answer: 'A1: You forgot to log in dummy'
        },
        {
          question: 'Q2 You can\'t view flashcards',
          answer: 'A2 Please log in or else'
        }
      ],
      email: '',
      name: '',
      password: '',
      isLoggedIn: null,
      redirectHome: false
    };
    this.getFlashcards = this.getFlashcards.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  isLoggedIn() {
    const res = !!(localStorage.getItem("jwt"));
    this.setState({
      isLoggedIn: res,
      redirectHome: true
    })
    return res;
  }

  getFlashcards() {
    console.log('getting flashcards');
    const jwt = localStorage.getItem("jwt");
    const init = { 
      headers: {"Authorization": `Bearer ${jwt}`}
    }

    fetch(`${BASE_URL}/flashcards`, init)
    .then(resp => resp.json())
    .then(data => this.setState({
      flashcards: data
    }))
    .then(console.log('this.state.flashcards: ', this.state.flashcards, 'fetch typeof: ', typeof(this.state.flashcards)))
    .catch(err => console.log(`error: ${err}`))

    console.log('isLoggedIn: ', this.isLoggedIn());
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  logout() {
    console.log('logging out');
    localStorage.removeItem("jwt");
    this.setState({
      isLoggedIn: false,
      flashcards: [],
      redirectHome: true
    })
  }

  login() {
    const url = `${BASE_URL}/user_token`;
    const body = {"auth": {"email": this.state.email, "password": this.state.password} }
    const init = { method: 'POST',
                    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                    mode: 'cors',
                    body: JSON.stringify(body),
                    }
    fetch(url, init)
    .then(res => res.json())
    .then(res => localStorage.setItem("jwt", res.jwt))
    .then(() => this.setState({
      isLoggedIn: true,
      redirectHome: true
    }))
    .then(() => this.getFlashcards())
    .catch(err => console.log(err))
  }
      
  componentDidMount() {
    this.isLoggedIn();
    this.getFlashcards();
  }

  render() {
    return (
      <div>
        <form>
          {/* {this.state.redirectHome && <Redirect to='/'/>} */}
          <h2>LOGIN</h2>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            placeholder="demo@gmail.com"
          />
          <br /><br />
          <label htmlFor="name">Username: </label>
          <br />
          <input
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            type="name"
            placeholder="demo"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            onChange={this.handleChange}
            value={this.state.value}
            type="password"
            placeholder="samplepw"
          />
          </form>
          <br />
          <button onClick={this.login}>Login</button><br/>
          <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}
