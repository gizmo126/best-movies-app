import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import Home from './components/Home/Home.jsx';
import List from './components/Home/List.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import ListDetails from './components/Home/ListDetails.jsx';
import GalleryDetails from './components/Gallery/GalleryDetails.jsx';

// Include any new stylesheets here
// Note that components' stylesheets should NOT be included here.
// They should be 'require'd in their component class file.
require('./styles/main.scss');

render(
    <Router>
        <div className='Router'>
            <h1>My Movie Database</h1>
            <ul>
                <li><Link to="/list">Search</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/list" component={List}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/list_details/" component={ListDetails}/>
            <Route path="/gallery_details/" component={GalleryDetails}/>
        </div>
    </Router>,
    // Define your router and replace <Home /> with it!
    document.getElementById('app')
);
