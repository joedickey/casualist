import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ListView from './ListView';
import Mock from '../mock.js';
import CasualistContext from '../CasualistContext';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const value = {
        list: Mock.mocklist,
        allItems: Mock.mockitems,
        displayItems: Mock.mockitems,
        currentItem: {},
        currentFilter: 'all',
    };

    ReactDOM.render(
        <CasualistContext.Provider value={value}>
            <Router>
                <ListView />
            </Router>
        </CasualistContext.Provider>, div,
    );

    ReactDOM.unmountComponentAtNode(div);
});
