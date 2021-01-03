import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import EditItem from './EditItem';



it('renders without crashing', () => {  

    const div = document.createElement('div');


    ReactDOM.render(
    <Router>
        <EditItem />
    </Router>, div);
    
    ReactDOM.unmountComponentAtNode(div);
});
