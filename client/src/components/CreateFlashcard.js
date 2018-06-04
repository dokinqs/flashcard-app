import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FlashcardForm from './FlashcardForm';

export default class CreateFlashcard extends Component {
		render(){
			const loggedIn = this.props.isLoggedIn;
			const logConfirm = loggedIn ? (

				<FlashcardForm
					id='create'
					func={this.props.onSubmit}

        />
			) : (<Link to='/login'><h1 class="prompt">Please log in to create a flashcard</h1></Link>);

		return(
			<div>
				{logConfirm}
			</div>
		)
	}
}
