import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import EditListView from './EditListView';



it('renders without crashing', () => {  

    const div = document.createElement('div');


    ReactDOM.render(
    <Router>
        <EditListView />
    </Router>, div);
    
    ReactDOM.unmountComponentAtNode(div);
});
