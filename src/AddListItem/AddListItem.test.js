import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CasualistContext from '../CasualistContext';
import AddListItem from './AddListItem';
import Mock from '../mock';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const contextValue = {
        list: Mock.mocklist,
        allItems: Mock.mockitems,
        displayItems: Mock.mockitems,
        currentItem: Mock.mockitems[0],
        currentFilter: 'all',
    };

    ReactDOM.render(
        <CasualistContext.Provider value={contextValue}>
            <Router>
                <AddListItem />
            </Router>
        </CasualistContext.Provider>, div,
    );

    ReactDOM.unmountComponentAtNode(div);
});
