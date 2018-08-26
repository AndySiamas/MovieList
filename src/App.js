import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import SearchBar from './Components/SearchBar';
import ListOfMovies from './Components/ListOfMovies';
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
  }

  addAllMoviesToList(listOfMovies, index = 0) {
    if (index >= listOfMovies.length) return;

    let updatedMovieList = Object.assign({}, this.state.movieList);
    let movie = listOfMovies[index];
    updatedMovieList[movie.title] = movie;

    this.setState({movieList:updatedMovieList}, () => { 
      this.addAllMoviesToList(listOfMovies, index + 1) 
    });
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