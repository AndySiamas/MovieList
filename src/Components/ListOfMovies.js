import React, { Component } from 'react';
import MovieRow from './MovieRow.js';
import './ComponentStyles/ListOfMovies.css';
import _ from 'underscore';

class ListOfMovies extends Component {
  render() {
    return (
    <div className="listOfMovies">
        {_.map(this.props.movies, (movie) => 
            <MovieRow title={movie.title}/>
        )}
    </div>
    );
  }
}

export default ListOfMovies;