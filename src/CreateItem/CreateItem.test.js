import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateItem from './CreateItem';



it('renders without crashing', () => {  

    const div = document.createElement('div');


    ReactDOM.render(
    <Router>
        <CreateItem />
    </Router>, div);
    
    ReactDOM.unmountComponentAtNode(div);
});
