import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import _ from 'lodash';
import jwt from 'jwt-js';
import Nav from './components/Nav';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Flashcard from './components/Flashcard';
import Flashcards from './components/Flashcards';
import CreateFlashcard from './components/CreateFlashcard';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor() {
    super();

    this.state = {
      flashcards: [],
      // [
      //   {
      //     question: 'qqq',
      //     answer: 'aaa'
      //   },
      //   {
      //     question: 'qqq2',
      //     answer: 'aaa2'
      //   }
      // ],
      email: '',
      name: '',
      password: '',
      isLoggedIn: null
    };
    this.getFlashcards = this.getFlashcards.bind(this);
    this.findFlashcard = this.findFlashcard.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  isLoggedIn() {
    const res = !!(localStorage.getItem("jwt"));
    this.setState({
      isLoggedIn: res
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
    .then(resp => {
      if (!resp.ok) {
        throw Error('oops: ', resp.message);
      }
      return resp.json();
    })
    .then(data => this.setState({
      flashcards: data
    }))
    .then(console.log('this.state.flashcards: ', this.state.flashcards, 'fetch typeof: ', typeof(this.state.flashcards)))
    .catch(err => console.log(`error: ${err}`))

    console.log('isLoggedIn: ', this.isLoggedIn());
  }

  findFlashcard(id) {
    console.log('find flashcards.. ', this.state.flashcards);
    // const flashcard = _.filter(this.state.flashcards, t => (t.id == parseInt(id, 10)));
    const flashcard = this.state.flashcards.filter(t => (t.id == parseInt(id, 10)));
    console.log('find filtered flashcard: ', flashcard);
    return flashcard;
    // return flashcard[0];
  }

  createFlashcard(f) {
    fetch('/flashcards/new', {
      method: 'POST',
      body: JSON.stringify(f),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(resBody => {
      this.setState((prevState, props) => {
        return {
          flashcards: prevState.flashcard.concat(resBody.data)
        }
      })
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
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
      isLoggedIn: true
    }))
    .then(() => this.getFlashcards())
    .catch(err => console.log(err))
  }
      
  logout() {
    localStorage.removeItem("jwt");
    this.setState({
      isLoggedIn: false,
      flashcards: []
    })
  }

  registerReq(creds) {
    const url = `${BASE_URL}/user_token`;
    const body = {"user": {"email": this.state.email, "password": this.state.password, "password_confirmation": this.state.password}}
    const init = { method: 'POST',
                    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                    mode: 'cors',
                    body: JSON.stringify(body),
                    }
    fetch(url, init)
    .then(res => res.json())
    .then(res => localStorage.setItem("jwt", res.jwt))
    .then(() => this.setState({
      isLoggedIn: true
    }))
    .then(() => this.getFlashcards())
    .catch(err => console.log(err))
  }
  //   fetch('/register', {
  //     method: 'POST',
  //     body: JSON.stringify(creds),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //     .then(resp => {
  //       if (!resp.ok) throw new Error(resp.statusMessage);
  //       return resp.json();
  //     })
  //     .then(respBody => {
  //       console.log(respBody);
  //       localStorage.setItem('authToken', respBody.token);
  //       this.setState({
  //         currentUser: jwt.decodeToken(respBody.token).payload
  //       })
  //     })
  // }

  handleRegister(creds) {
    this.registerReq(creds);
  }

  componentDidMount() {
    this.isLoggedIn();
    this.getFlashcards();
    this.findFlashcard();
  }

  render() {
    // const { flashcards = []} = this.state;
    // const display = this.state.isLoggedIn ? this.state.flashcards.map(flashcard => {
    //   return <p key={flashcard.id}> QUESTION:{flashcard.question}, ANSWER:{flashcard.answer} </p>
    // }) : "UNAUTHORIZED"
    console.log('rendered typeof this.state.flashcards: ', typeof(this.state.flashcards));
    const { flashcards } = this.state;
    console.log('fc ',this.state.flashcards);
    return (
      <div className="App">
          <Nav />

          {/* <Nav /> */}
          <Switch>

            <Route exact path="/login" 
            component={(props) => (
              <LoginForm
              {...props}
                login={this.login}
                logout={this.logout}
              /> 
            )} />
            <Route exact path="/register" component={(props) => (
              <RegisterForm
              {...props}
                handleRegister={this.handleRegister}
              /> )} 
            />

            <Route exact path="/flashcards/new" component={(props)=> (
              <CreateFlashcard
                {...props}
                handleCreateFlashcard={this.handleCreateFlashcard} 
                createFlashcard={this.state.createFlashcard}
                isLoggedIn={this.state.isLoggedIn}
              />
            )} />

            {/* <Route exact path="/flashcards/:id" render={(props)=> ( */}
            <Route exact path="/flashcards/:id" component={(props)=> (

              <Flashcard 
                {...props}
                flashcard={this.findFlashcard(props.match.params.id)}
                id={props.match.params.id}
              />
            )} />

            <Route exact path="/flashcards" component={(props)=> (
              <Flashcards
                {...props}
                flashcards={this.state.flashcards}
                isLoggedIn={this.state.isLoggedIn}
              />
            )} />
        
            <Route exact path='/' component={(props) => (
              <Home

              /> 
            )} />
        </Switch>

      </div>
    );
  }
}

export default App;
