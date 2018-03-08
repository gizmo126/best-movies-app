import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { ListResult } from './ListResult.jsx'

export class SearchResults extends Component {
   constructor(props) {
      super(props);
      this.state = {
         pages: 0,
         results: [],
         search: []
      };
   }
   componentWillMount() {
      // get the number of pages
      getResults(-1)
         .then(function (response) {
            this.setState({ pages: response.data.total_pages });
         }.bind(this))
         .catch(function (error) {
            console.log(error);
         });
      // get the top ranked movies
      getResults(this.state.pages)
         .then(function (response) {
            let results = [];
            for (let i = 0; i < response.length; i++) {
               for (let j = 0; j < response[i].data.results.length; j++) {
                  response[i].data.results[j].rank = i * response.length + j + 1;
                  results.push(response[i].data.results[j]);
               }
            }
            this.setState({ results: results });
            this.setState({ count: results.length });
         }.bind(this))
         .catch(function (error) {
            console.log(error);
         });
   }
   componentWillReceiveProps(nextProps) {
      if (nextProps.userInput.length > 0 && (this.props.radioOrder !== nextProps.sortBy || this.props.userInput !== nextProps.userInput || this.props.sortBy !== nextProps.sortBy)) {
         let sortedResults = sortResults(this.state.results, nextProps.userInput, nextProps.sortBy, nextProps.radioOrder);
         this.setState({ search: sortedResults });
      }
   }
   render() {
      // results are initially undefined so don't render
      // also display no results if searchbar is cleared
      if (this.props.userInput.length <= 0 || typeof this.state.results[0] == 'undefined' || typeof this.state.search[0] == 'undefined') {
         return (<div className="SearchResults">
        <h1>No Results</h1>
      </div>);
      } else {
         return (<div className='SearchResults'>
        <ListResult results={this.state.search}/>
      </div>);
      }
   }
}

function getResults(pages) {
   let newUrl = 'movie/top_rated?api_key=ff9f06c5d8a831c7a2a99295c33936b7&language=en-US';
   if (pages >= 0) {
      let promises = [];
      for (let i = 1; i < 20; i++) {
         promises.push(axios({
            method: 'post',
            baseURL: 'https://api.themoviedb.org/3/',
            url: newUrl + '&page=' + i
         }));
      }
      return axios.all(promises);
   } else {
      return axios({ method: 'post', baseURL: 'https://api.themoviedb.org/3/', url: newUrl });
   }
}

function sortResults(results, userInput, sortBy, radioOrder) {
   let sortedResults = [];
   let searchResults = getMatching(results, userInput);
   if (sortBy == 'rank' && radioOrder == 'descending') {
      return searchResults;
   } else if (sortBy == 'rank' && radioOrder == 'ascending') {
      for (let i = searchResults.length - 1; i >= 0; i--) {
         sortedResults.push(searchResults[i]);
      }
      return sortedResults;
   } else if (sortBy == 'title' && radioOrder == 'descending') {
      sortedResults = searchResults.sort(function (a, b) {
         if (a.title > b.title)
            return -1;
         if (a.title < b.title)
            return 1;
         return 0;
      });
      return sortedResults;
   } else if (sortBy == 'title' && radioOrder == 'ascending') {
      sortedResults = searchResults.sort(function (a, b) {
         if (a.title < b.title)
            return -1;
         if (a.title > b.title)
            return 1;
         return 0;
      });
      return sortedResults;
   } else {
      return sortedResults;
   }
}

function getMatching(results, userInput) {
   let sortedResults = [];
   for (let i = 0; i < results.length; i++) {
      if (results[i].title.toLocaleLowerCase()
         .includes(userInput.toLocaleLowerCase())) {
         sortedResults.push(results[i]);
      }
   }
}

SearchResults.propTypes = {
   userInput: PropTypes.string,
   radioOrder: PropTypes.string.isRequired,
   sortBy: PropTypes.string.isRequired
}

export default SearchResults