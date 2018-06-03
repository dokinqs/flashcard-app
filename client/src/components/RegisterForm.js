import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectLogin: false,
      username: '',
      email: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleRegister(this.state);
    this.setState({
      redirectHome: true,
      username: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <div className="form">
        <br />
        <h2>SIGN UP</h2>
        <form onSubmit={this.handleSubmit} className="login" method="post">
          {this.state.redirectHome && <Redirect to='/' />}
          <label htmlFor="username">
            <input
              placeholder="Create a Username"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.username}
              name="username"
            />
          </label>
          <br />
          <br />
          <label htmlFor="email">
            <input
              placeholder="Email Address"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.email}
              name="email"
            />
          </label>
          <br />
          <br />
          <label htmlFor="password">
            <input
              placeholder="Create a password"
              type="password"
              onChange={this.handleInputChange}
              value={this.state.password}
              name="password"
            />
          </label>
          <br />
          <br />
          <input
            className="button"
            type="submit"
            value="Register"
            onSubmit={this.handleSubmit}
          />
        </form>
      </div>
    )
  }
}
