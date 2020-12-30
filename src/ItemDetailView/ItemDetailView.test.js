import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ItemDetailView from './ItemDetailView';



it('renders without crashing', () => {  

    const div = document.createElement('div');


    ReactDOM.render(
    <Router>
        <ItemDetailView />
    </Router>, div);
    
    ReactDOM.unmountComponentAtNode(div);
});
