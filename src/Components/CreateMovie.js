import React, { Component } from 'react';
import './ComponentStyles/CreateMovie.css';
import plusImg from '../Images/add-black.svg';

class CreateMovie extends Component {
    constructor(props) {
        super(props);
        this.inputTitle = "";
    }

    render() {
        return (
            <div className="createMovie">
                <button className="addButton"
                        onClick={() => { this.props.createMovie(this.inputTitle) }}>
                    <img className="plus_img" src={plusImg} alt="Search Button"></img>
                </button>
                <input onChange={(e) => { this.inputTitle = e.target.value; }} 
                       className="addMovieInput" 
                       type="text"></input>
            </div>
        );
    }
}

export default CreateMovie;