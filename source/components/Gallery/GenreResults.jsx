import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { GalleryResult } from './GalleryResult.jsx';

export class GenreResults extends Component {
   constructor(props) {
      super(props);
      this.state = {
         results: []
      };
   }
   componentWillMount() {
      getResults(this.props.genre)
         .then(function (response) {
            this.setState({ results: response.data.results });
         }.bind(this))
         .catch(function (error) {
            console.log(error);
         });
   }
   componentWillReceiveProps(nextProps) {
      if (nextProps.genre !== this.props.genre) {
         getResults(nextProps.genre)
            .then(function (response) {
               this.setState({ results: response.data.results });
            }.bind(this))
            .catch(function (error) {
               console.log(error);
            });
      }
   }
   render() {
      return (<div className="GenreResults">
      <GalleryResult results={this.state.results}/>
    </div>)
   }
}

function getResults(genre) {
   let newUrl = 'genre/' + genre + '/movies?api_key=ff9f06c5d8a831c7a2a99295c33936b7&language=en-US&include_adult=false';
   return axios({ method: 'get', baseURL: 'https://api.themoviedb.org/3/', url: newUrl });
}

GenreResults.propTypes = {
   genre: PropTypes.number.isRequired
}

export default GenreResults