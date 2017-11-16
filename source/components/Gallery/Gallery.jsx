import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import { GenreButtons } from './GenreButtons.jsx';
import { GenreResults } from './GenreResults.jsx';

import styles from './Gallery.scss';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = { genre : 28 };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(genreId){
        this.setState({
            genre: genreId
        });
    }
    render() {
        return(
            <div className="Gallery">
                <GenreButtons handleButtonClick={this.handleButtonClick} />
                <GenreResults genre={this.state.genre} />
            </div>
        )
    }
}

export default Gallery
