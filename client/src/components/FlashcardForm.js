import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import _ from 'lodash';

export default class NewFlashcard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flashcard: Object.assign({
				question: '',
				answer: ''
			}, props.flashcard)
		}
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState((prevState, props) => ({
			flashcard: {
				...prevState.flashcard,
				[name]: value
			}
		}))
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createf(this.state.flashcard);
		this.setState({
			redirectHome: true
		});
  }  
  
  render() {
		console.log(this.state.flashcard);
		console.log(this.props.user);
    const { flashcard, id } = this.state
    const { isEdit } = this.props
		return (
			<div className="flashcard-form-div">
				{/* <h1>{isEdit ? 'Edit this ' : 'Create a New '}  Flashcard </h1> */}
        {/*   {this.props.user.username}</h1> */}
				<form onSubmit={this.handleSubmit.bind(this)}>
					{this.state.redirectHome && <Redirect to='/flashcards' />}

					<label>
						<h3>Question</h3>
						<textarea rows='4' cols ='40'
							name='question'
              value={flashcard.question}
              placeholder="question"
							onChange={this.handleChange.bind(this)} 
            />
					</label><br/>
          {/* value="question" */}

					<label>
						<h3>Answer</h3>
						<textarea rows='4' cols='40'
							name='answer'
							value={flashcard.answer}
              placeholder="answer"
							onChange={this.handleChange.bind(this)} 
            />
					</label><br/>
          {/* value="answer" */}

					<button className='button' type='submit'>
						{/* {isEdit ? 'Edit' : 'Create'} */}
						Submit
						</button>

				</form>
			</div>
		)
	}
}
