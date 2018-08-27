import React, { Component } from 'react';
import './ComponentStyles/MovieRow.css';

class MovieRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieWatched: 'NOT WATCHED'
    }
  }

  toggleWatchedMovie() {
    if (this.props.movie.watched) {
      this.setState({ movieWatched:'NOT WATCHED' });
      this.props.movie.watched = false;
    } else {
      this.setState({ movieWatched:'WATCHED' });
      this.props.movie.watched = true;
    }
  }

  render() {
    return (
    <div className="row">
        <div className="movieRow">
          <div className="row">
            <div className="col-sm-6">
              <p className="movieTitle"> {this.props.movie.title} </p>
            </div>
            <div className="col-sm-6">
              <button className="watchedButton" 
                      onClick={() => { this.toggleWatchedMovie() }}> 
                <p> {this.state.movieWatched} </p>
              </button>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default MovieRow;