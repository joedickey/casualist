import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import EditList from './EditList';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Router>
            <EditList />
        </Router>, div,
    );

    ReactDOM.unmountComponentAtNode(div);
});
