import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class ListResult extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (<div className="ListResult">
      <List relaxed="very">
        {
          this.props.results.map((result, index) => (<List.Item key={index}>
            <Link to={{
                pathname: '/list_details/',
                param: {
                  results: this.props.results,
                  index: index,
                  result: result
                }
              }}>
              <div className="listItem">
                <div className="listImage">
                  <Image inline size='tiny' src={getImage(result)}/>
                </div>
                <div className="listContent">
                  <List.Content>
                    <h1>{result.title}</h1>
                    <h3>Rank: {result.rank}</h3>
                    <h3>Rating: {result.vote_average}</h3>
                  </List.Content>
                </div>
              </div>
            </Link>
          </List.Item>))
        }
      </List>
    </div>);
   }
}

function getImage(result) {
   let url = result['poster_path'];
   if (!url) {
      url = result['backdrop_path'];
   }
   return 'https://image.tmdb.org/t/p/w185//' + url;
}

ListResult.propTypes = {
   //results: PropTypes.object,
}

export default ListResult