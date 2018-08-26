import React, { Component } from 'react';
import './ComponentStyles/SearchBar.css';
import magnifier from '../Images/magnifier-black.svg';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.searchQuery = "";
    }

    changeSearchQuery(newQuery) {
        this.searchQuery = newQuery;
    }

    render() {
        return (
            <div className="searchBar">
                <button className="magnifier"
                        onClick={() => { this.props.search(this.searchQuery) }}>
                    <img className="magnifier_img" src={magnifier} alt="Search Button"></img>
                </button>
                <input onChange={(e) => { this.changeSearchQuery(e.target.value) }} className="inputText" type="text"></input>
            </div>
        );
    }
}

export default SearchBar;