import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateItemView from './CreateItemView';



it('renders without crashing', () => {  

    const div = document.createElement('div');


    ReactDOM.render(
    <Router>
        <CreateItemView />
    </Router>, div);
    
    ReactDOM.unmountComponentAtNode(div);
});
