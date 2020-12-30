import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ListView from './ListView';



it('renders without crashing', () => {  

    const div = document.createElement('div');


    ReactDOM.render(
    <Router>
        <ListView />
    </Router>, div);
    
    ReactDOM.unmountComponentAtNode(div);
});
