import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AddListItem from './AddListItem';



it.skip('renders without crashing', () => {  

    const div = document.createElement('div');


    ReactDOM.render(
    <Router>
        <AddListItem />
    </Router>, div);
    
    ReactDOM.unmountComponentAtNode(div);
});
