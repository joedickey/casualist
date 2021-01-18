import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import EditItem from './EditItem';
import Mock from '../mock.js';
import CasualistContext from '../CasualistContext';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const value = {
        list: Mock.mocklist,
        allItems: Mock.mockitems,
        displayItems: Mock.mockitems,
        currentItem: Mock.mockitems,
        currentFilter: 'all',
    };

    ReactDOM.render(
        <CasualistContext.Provider value={value}>
            <Router>
                <EditItem />
            </Router>
        </CasualistContext.Provider>, div,
    );

    ReactDOM.unmountComponentAtNode(div);
});
