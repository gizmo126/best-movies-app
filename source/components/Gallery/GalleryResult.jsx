import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class GalleryResult extends Component {
    constructor(props){
        super(props);
    }
    render() {
      //http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx
      return (
        <div className="GalleryResult">
          <List horizontal animated relaxed="very">
            { this.props.results.map((result, index) => (
                <List.Item key={index}>
                  <Link to={{pathname: '/gallery_details/',
                              param: {  results : this.props.results,
                                        index : index,
                                        result: result,
                                      }
                            }}>
                      <div className="GalleryItem">
                          <div className="GalleryImage">
                              <Image inline size='small'
                                src={getImage(result)} />
                          </div>
                       </div>
                  </Link>
                </List.Item>
              ))}
          </List>
        </div>
      );
    }
}

function getImage(result) {
    //https://image.tmdb.org/t/p/w185//
    //https://developers.themoviedb.org/3/getting-started/images
    let url = result['poster_path'];
    if(!url){
        url = result['backdrop_path'];
    }
    return 'https://image.tmdb.org/t/p/w500//' + url;
}


export default GalleryResult
