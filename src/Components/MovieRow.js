import React, { Component } from 'react';
import './ComponentStyles/MovieRow.css';

class MovieRow extends Component {
  render() {
    return (
    <div className="row">
        <div className="movieRow">
            <p className="test"> {this.props.title} </p>
        </div>
    </div>
    );
  }
}

export default MovieRow;