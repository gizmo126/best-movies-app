import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './Home.scss'

import { SearchBar } from '../Home/SearchBar.jsx'

export class List extends Component {
    render() {
        return(
            <div className="Home">
                <SearchBar/>
            </div>
        )
    }
}

export default List
