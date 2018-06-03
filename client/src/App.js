import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Flashcard from './components/Flashcard';
import Flashcards from './components/Flashcards';
import CreateFlashcard from './components/CreateFlashcard';


const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor() {
    super();

    this.state = {
      flashcards: 
      [
        {
          question: 'qqq',
          answer: 'aaa'
        },
        {
          question: 'qqq2',
          answer: 'aaa2'
        }
      ],
      email: '',
      name: '',
      password:'',
      isLoggedIn: null
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
    localStorage.removeItem("jwt");
    this.setState({
      isLoggedIn: false,
      flashcards: []
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
    }))
    .then(() => this.getFlashcards())
    .catch(err => console.log(err))
  }
      
  componentDidMount() {
    this.isLoggedIn();
    this.getFlashcards();
  }

  render() {
    // const { flashcards = []} = this.state;
    // const display = this.state.isLoggedIn ? this.state.flashcards.map(flashcard => {
    //   return <p key={flashcard.id}> QUESTION:{flashcard.question}, ANSWER:{flashcard.answer} </p>
    // }) : "UNAUTHORIZED"

    // const display = this.state.flashcards.map(f => {
    //   return (
    //   <div>
    //     <h2>{f.question}</h2>
    //     <h3>{f.answer}</h3>
    //   </div>
    //   );
    // })

    console.log('rendered typeof this.state.flashcards: ', typeof(this.state.flashcards))
    // return (
    //   <div>
    //   <ul>
    //   {
    //     this.state.flashcards.map(flashcard => 
    //       <li key={flashcard.id}>{flashcard.question}</li>
    //     )
    //   }
    //   </ul>
    //   </div>
    // )
    return (
      <div className="App">
        {/* <Home /> */}
        {/* <div>{JSON.stringify(this.state.flashcards)}</div> */}
        {/* <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
          />
          <br /><br />
          <label htmlFor="name">Username: </label>
          <br />
          <input
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            type="name"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            onChange={this.handleChange}
            value={this.state.value}
            type="password"
          />
          </form>
          <br />

          <button onClick={this.login}>Login</button>
          <button onClick={this.logout}>Logout</button>
          <button onClick={this.getFlashcards}>Get Flashcards</button> */}

          {/* <div> {display} </div>  */}

          <BrowserRouter>
          <Switch>

            <Route exact path="/login" 
            component={(props) => (
              <LoginForm
              {...props}
                login={this.login}
                logout={this.logout}
              /> 
            )} />
            {/* <Route exact path="/register" component={(props) => (
              <RegisterForm
              {...props}
                register={this.register}
              /> )} 
            /> */}
            <Route exact path="/flashcards" component={(props)=> (
              <Flashcards
                {...props}
                flashcards={this.state.flashcards}
              />
            )} />
            <Route exact path="/flashcards/:id" component={(props)=> (
              <Flashcard 
                {...props}
                flashcards={this.state.flashcards}
              />
            )} />
            <Route exact path="/flashcards/create" component={(props)=> (
              <CreateFlashcard
                {...props}
                handleCreateFlashcard={this.handleCreateFlashcard} 
                flashcard={this.state.createdFlashcard}
              />
            )} />
            <Route path='/' component={(props) => (
              <Home

              /> 
            )} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
