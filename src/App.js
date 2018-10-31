import React, { Component, Fragment } from 'react';

import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Start from './views/Start';
import Question from './views/Question';
import Answer from './views/Answer';
import Score from './views/Score';
import NotFound from './views/NotFound';
import Footer from './components/Footer';
const initialState = {
  userAnswer:"",
  totalScoure: 0
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {...initialState};
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="App">
          </div>
          <main>
            <Switch>
              <Route exact path="/"
                render={(props) =>
                  <Start {...props} onStart = { ()=>        this.setState(initialState)}/>}  />
              <Route exact path="/question/:id"
                render= {(props) =>
                  <Question{...props} onQuestion = { () =>
                    this.setState(initialState)}/>}  />
              <Route exact path="/answer/:id"
                render= {(props) =>
                  <Answer{...props} onAnswer = { () =>
                    this.setState(initialState)}/>} />
              <Route exact path="/score"
                render= {(props) =>
                  <Score{...props} onScore = { () =>
                    this.setState(initialState)}/>}  />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </Fragment>
      </BrowserRouter>

    );
  }
}

export default App;
