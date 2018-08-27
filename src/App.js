import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import SearchBar from './Components/SearchBar';
import CreateMovie from './Components/CreateMovie';
import ListOfMovies from './Components/ListOfMovies';
import Movie from './Classes/Movie';
import fakeData from './Fake Data/fakeData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: {},
      searchFilter: ""
    }
  }

  componentDidMount() {
    this.addAllMoviesToList(fakeData);
    setTimeout(() => { console.log(this.state) }, 3000);
  }

  createMovie(input, callback) {
    var inputMovie = (typeof input === 'string') ? {title: input} : input;
    var title = "";
    var genre = "";
    var releaseDate = "";
    var watched = false;

    for (var prop in inputMovie) {
      if (prop === 'title')  title = inputMovie[prop];
      if (prop === 'genre')  genre = inputMovie[prop];
      if (prop === 'releaseDate')  releaseDate = inputMovie[prop];
      if (prop === 'watched')  watched = inputMovie[prop];
    }

    var movie = new Movie(title, genre, releaseDate, watched);
    this.addMovieToList(movie, callback);
  }

  addMovieToList(movie, callback = function(){}) {
    if (movie) {  
      let updatedMovieList = Object.assign({}, this.state.movieList);
      updatedMovieList[movie.title] = movie;
      this.setState({movieList:updatedMovieList}, callback);
    }
  }

  addAllMoviesToList(listOfMovies, index = 0) {
    // Recursively iterate through every movie and add it to list
    if (index < listOfMovies.length) {
      this.createMovie(listOfMovies[index], () => { this.addAllMoviesToList(listOfMovies, index+1) });
    }
  }

  searchForMovie(query) {
    this.setState({searchFilter:query});
  }

  render() {
    return (
    <div>
      <div className="navigation"></div>
      <div className="container">
        <div className="align-self-center">
          <Title />
          <CreateMovie createMovie={this.createMovie.bind(this)}/>
          <SearchBar search={this.searchForMovie.bind(this)}/>
          <ListOfMovies movies={this.state.movieList}
                        filter={this.state.searchFilter}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;