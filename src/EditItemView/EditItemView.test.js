import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import EditItemView from './EditItemView';



it('renders without crashing', () => {  

    const div = document.createElement('div');


    ReactDOM.render(
    <Router>
        <EditItemView />
    </Router>, div);
    
    ReactDOM.unmountComponentAtNode(div);
});
