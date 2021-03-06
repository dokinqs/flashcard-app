# Flashcardzzz

## Table of Contents
 * [User Story](#user-story)
 * [Technologies](#technologies)
 * [Installation](#installation)
 * [MVP](#mvp)
 * [Post-MVP](#post-mvp)
 * [Wireframe](#wireframe)
 * [ERD](#erd)
 * [Time Mangement](#time-management)
 * [Obstacles](#obstacles)
 * [Code Snippet](#code-snippet)
  
## Deployed Site (Heroku and Surge)
https://rapid-bedroom.surge.sh/

## Summary
Flashcardzzz is a flashcard application for people to create and learn about computer programming. If logged in, the user can read, create, edit, delete, and like flashcards. 

## User Story <a id="user-story"></a>
- On the landing page of the website, cards ordered by time added will be listed.

- A new user can register and a returning user can log in or log out. 
- Or, log in with the demo account.

- On the home page after login, a personalized page will show the user's liked cards and created cards.

- CRUD:
- Create a card
- Read a card
- Edit a card
- Delete a card

- Like/unlike a card

## Technologies <a id="technologies"></a>
- React
- Rails
- Devise Knock gem
- PostgreSQL

## Installation <a id="installation"></a>
- in client, npm start
- in rails, rails s

## MVP <a id="mvp"></a>
- Auth
- Layout
- CRUD

## Post MVP <a id="post-mvp"></a>
- Quizlet API
- Search bar
- User Profile
- Gamification
- Keydown controls L/R/flip
- Mobile: React Native

## Wireframe <a id="wireframe"></a>
<img src="wireframe.jpg" />

## ERD <a id="erd"></a>
<img src="erd.jpg" />
<img src="erd_flashcardzzz.png" />

## Time Management <a id="time-management"></a>
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setup Server |  | 1hr| 1hr | 1hr |
| CRUD (Rails/React) | H | 30hrs | 30hrs | 30hrs |
| API | H | 10hrs| 9hrs | 9hrs |
| Auth | H | 10hrs| 12hrs | 12hrs |
| Navigation | H | 10hrs | 10hrs | 10hrs |
| Styling | L | 5hrs| 8hrs | 8hrs |
|  |  | |  |  |
| Total |  | 70hrs | 69hrs | 69hrs |

## Obstacles <a id="obstacles"></a>
stuck on database for a long time
one error would take days to debug

## Code-snippet <a id="code-snippet"></a>
```
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
```