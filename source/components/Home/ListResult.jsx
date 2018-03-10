import React, { Component } from 'react'
import { List, Image, Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class ListResult extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (<div className="ListResult">
      <List centered relaxed>
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
                  <Grid centered padded relaxed>
                      <Grid.Row centered>
                        <Grid.Column stretched width={3}>
                            <div className="listImage">
                              <Image inline size='tiny' src={getImage(result)}/>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={11} textAlign="center">
                              <List.Content>
                                <h2>{result.title}</h2>
                                <h4>Rank: {result.rank}</h4>
                                <h4>Rating: {result.vote_average}</h4>
                              </List.Content>
                        </Grid.Column>
                      </Grid.Row>
                  </Grid>
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
   if (!url) {
      url = 'http://media.comicbook.com/files/img/default-movie.png'
   } else {
      return 'https://image.tmdb.org/t/p/w342//' + url;
   }
}

ListResult.propTypes = {
   //results: PropTypes.object,
}

export default ListResult