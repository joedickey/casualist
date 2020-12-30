import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ItemDetail from './ItemDetail';



it('renders without crashing', () => {  

    const div = document.createElement('div');


    ReactDOM.render(
    <Router>
        <ItemDetail />
    </Router>, div);
    
    ReactDOM.unmountComponentAtNode(div);
});
