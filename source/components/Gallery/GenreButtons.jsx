import React, {Component} from 'react';
import {List, Button} from 'semantic-ui-react';
import axios from 'axios';
import PropTypes from 'prop-types';

export class GenreButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }
  componentWillMount() {
    getGenres().then(function(response) {
      this.setState({genres: response.data.genres});
    }.bind(this)).catch(function(error) {
      console.log(error);
    });
  }
  render() {
    return (<div className="GenreButtons">
      <List horizontal="horizontal" relaxed="very">
        {
          this.state.genres.map((genre, index) => (<Button key={index} onClick={() => this.props.handleButtonClick(genre.id)} basic="basic" compact="compact">
            {genre.name}
          </Button>))
        }
      </List>
    </div>);
  }
}
function getGenres() {
  let newUrl = 'genre/movie/list?api_key=ff9f06c5d8a831c7a2a99295c33936b7&language=en-US';
  return axios({method: 'get', baseURL: 'https://api.themoviedb.org/3/', url: newUrl});
}

GenreButtons.propTypes = {
  handleButtonClick: PropTypes.func.isRequired
}

export default GenreButtons
