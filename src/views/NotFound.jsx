import React, {Component, Fragment} from 'react';
class NotFound extends Component {
  componentDidMount(){
    document.title = 'Not Found | Quizzard';
  }

  render() {
    return (
      <Fragment>
        <h2>404 NOT FOUND!</h2>
        <p>Sorry Mz. thing, but what you are looking for is not here</p>
        <button onClick={this.props.history.goBack}>Back</button>
      </Fragment>
    );
  }
}


export default NotFound;
