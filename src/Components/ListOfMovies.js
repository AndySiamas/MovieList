import React, { Component } from 'react';
import MovieRow from './MovieRow.js';
import './ComponentStyles/ListOfMovies.css';
import _ from 'underscore';

class ListOfMovies extends Component {

    constructor(props) {
        super(props);
        this.moviesDisplayed = 0;
    }

    displayAllMovies(movies) {
        this.moviesDisplayed = 0;

        var moviesFound = (
            <div className="listOfMovies">
                {_.map(this.props.movies, (movie) =>  
                    this.displayMovie(movie)
                )}
            </div>
        );

        var noMoviesFound = (
            <div className="listOfMovies">
                <p> No movies found </p>
            </div>
        )

        return (this.moviesDisplayed > 0) ? moviesFound : noMoviesFound;
    }

    displayMovie(movie) {
        if (this.doesTitleMatchFilter(movie.title)) {
            this.moviesDisplayed++;
            return <MovieRow movie={movie}/>;
        }
    }

    doesTitleMatchFilter(title) {
        let filter = this.props.filter.toLowerCase();
        title = title.toLowerCase();
        if (filter.length) {
            for (var i = 0; i < filter.length; i++) {
                if (filter[i] !== title[i]) {
                    return false;
                }
            }
        }
        return true;
    }

    componentDidMount() {
        if (this.props.movies[0]) {
            setTimeout(() => { this.doesTitleMatchFilter(this.props.movies[0].title); }, 1000);
        }
    }

  render() {
    return (
    <div>
        <div>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
        </div>
        <div className="row">
            <div className="col-md-12">
                { this.displayAllMovies(this.props.movies) }
            </div>
        </div>
    </div>
    );
  }
}

export default ListOfMovies;