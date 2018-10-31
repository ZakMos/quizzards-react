import React, { Fragment } from 'react';
// import Question from './Question';
import logo from '../quizz-lettre.gif';
import { Link } from 'react-router-dom';
const Start = (props) =>
  <Fragment>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <main className="container d-flex mt-5">
      <dev>
        <h2>Welcome to my Quizzard</h2>
        <Link to={`/question/:id`}
          color="primary"
          size="lg">
          Start Quizz
        </Link>
      </dev>
    </main>
  </Fragment>


export default Start;
