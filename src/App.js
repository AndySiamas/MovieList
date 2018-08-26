import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import ListOfMovies from './Components/ListOfMovies';
import fakeData from './Fake Data/fakeData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: {}
    }
  }

  componentDidMount() {
    this.addAllMoviesToList(fakeData);
    setTimeout(() => { console.log(this.state) }, 5000);
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

  render() {
    return (
    <div>
      <div className="navigation"></div>
      <div className="container">
        <div className="align-self-center">
          <Title />
          <ListOfMovies movies={this.state.movieList}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;