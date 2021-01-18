import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import StatusBar from './StatusBar';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Router>
            <StatusBar />
        </Router>, div,
    );

    ReactDOM.unmountComponentAtNode(div);
});
