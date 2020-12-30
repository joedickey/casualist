import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Item from './Item';



it('renders without crashing', () => {  

    const div = document.createElement('div');


    ReactDOM.render(
    <Router>
        <Item />
    </Router>, div);
    
    ReactDOM.unmountComponentAtNode(div);
});
