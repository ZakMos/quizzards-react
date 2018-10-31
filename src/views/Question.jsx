import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { quiz } from '../components/quiz'



class Question extends Component {
  constructor(props){
    super(props);
      // this.state = { items: [], text: ''};
      // this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
   e.preventDefault();
   if (!this.state.text.length) {
     return;
   }
 }
  render() {
    return(
    <Fragment>
        <p className="display-4">
          <span className="text-muted">Q:</span>
          ${quiz.id}
        </p>
        <form
          onSubmit={this.handleSubmit}
          className="mt-4"
          id="answer-form">
          <div className="form-row">
            <div className="col">
                <input
                  type="text"
                  className="form-control"
                  name="answer"
                  id="answer"
                  placeholder="Your answer goes here..."
                  required
                  value={this.props.value}
                  />
            </div>
            <Link type="submit" className="btn btn-primary" id="check-answer">Answer</Link>
          </div>
        </form>
  </Fragment>
  )
}
}
export default Question;
