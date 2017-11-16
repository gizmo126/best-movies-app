import React, { Component } from 'react';
import { Search, Dropdown, Menu } from 'semantic-ui-react';

import { SearchResults } from './SearchResults.jsx';
import { RadioButtons } from './RadioButtons.jsx';

export class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { userInput : '', sortBy : 'rank', radioOrder : 'descending' };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSortBy = this.handleSortBy.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
    }
    handleUserInput(event){
        this.setState({
            userInput: event.target.value
        });
    }
    handleSortBy(e, {value} ){
        this.setState({
            sortBy: value
        });
    }
    handleRadio(e, { value }){
        this.setState({
            radioOrder: value
        });
    }
    render() {
        // when user type into searchbar, state is changed and
        // userInput is passed to SearchResults as a URL to query TMDB
        return(
            <div className="SearchBar">
                <div className="stuff">
                    <div className="SearchInput">
                        <Search
                            onSearchChange={this.handleUserInput}
                            open={false}
                            type='text' value={this.userInput}
                        />
                    </div>
                    <div className="FilterOptions">
                        <RadioButtons
                            handleRadio={this.handleRadio}
                            radioOrder={this.state.radioOrder}
                        />
                    </div>
                    <div className="SortByOptions">
                        <Menu compact>
                            <Dropdown inline item closeOnChange text='Sort By' >
                                <Dropdown.Menu>
                                    <Dropdown.Item text="Title" value='title' onClick={this.handleSortBy}/>
                                    <Dropdown.Item text="Rank" value='rank' onClick={this.handleSortBy}/>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu>
                    </div>
                </div>
                <SearchResults
                    sortBy={this.state.sortBy}
                    radioOrder={this.state.radioOrder}
                    userInput={this.state.userInput}
                />
            </div>
        );
    }
}


export default SearchBar
