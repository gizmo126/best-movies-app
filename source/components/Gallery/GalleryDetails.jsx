import React, {Component} from 'react';
import {Image, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {GalleryResult} from './GalleryResult.jsx';

export class GalleryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      result: [],
      index: -1
    };
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  componentWillMount() {
    this.setState({
      results: JSON.stringify(this.props.location.param.results),
      result: JSON.stringify(this.props.location.param.result),
      index: JSON.stringify(this.props.location.param.index)
    });
  }
  handlePrev() {
    let results = JSON.parse(this.state.results);
    let result = JSON.parse(this.state.result);
    let index = JSON.parse(this.state.index);
    if (index > 0) {
      this.setState({
        results: JSON.stringify(results),
        result: JSON.stringify(results[index - 1]),
        index: JSON.stringify(index - 1)
      });
    } else {
      this.setState({
        results: JSON.stringify(results),
        result: JSON.stringify(results[results.length - 1]),
        index: JSON.stringify(results.length - 1)
      });
    }
  }
  handleNext() {
    let results = JSON.parse(this.state.results);
    let result = JSON.parse(this.state.result);
    let index = JSON.parse(this.state.index);
    if (index < results.length - 1) {
      this.setState({
        results: JSON.stringify(results),
        result: JSON.stringify(results[index + 1]),
        index: JSON.stringify(index + 1)
      });
    } else {
      this.setState({
        results: JSON.stringify(results),
        result: JSON.stringify(results[0]),
        index: JSON.stringify(0)
      });
    }
  }
  render() {
    let results = JSON.parse(this.state.results);
    let result = JSON.parse(this.state.result);
    let index = JSON.parse(this.state.index);
    return (<div className="GalleryDetails">
      <h4>{index + 1}/{results.length}</h4>
      <div className="prev" onClick={this.handlePrev}>&#x21E6;</div>
      <div className="next" onClick={this.handleNext}>&#x21E8;</div>
      <div className="GalleryDetailsImage">
        <Image inline="inline" size='medium' src={getImage(result)}/>
      </div>
      <h1>{results[index].title}</h1>
      <h3>Rating: {results[index].vote_average}</h3>
      <h3>Released: {results[index].release_date}</h3>
      <h4>{results[index].overview}</h4>
    </div>)
  }
}

function getImage(result) {
  let url = result['poster_path'];
  if (!url) {
    url = result['backdrop_path'];
  }
  return 'https://image.tmdb.org/t/p/w185//' + url;
}

GalleryResult.Details = {
  location: PropTypes.object
}

export default GalleryDetails
