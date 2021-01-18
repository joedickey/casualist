import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Item from './Item';
import Mock from '../mock.js';
import CasualistContext from '../CasualistContext';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const value = {
        list: Mock.mocklist,
        allItems: Mock.mockitems,
        displayItems: Mock.mockitems,
        currentItem: Mock.mockitems[0],
        currentFilter: 'all',
    };

    ReactDOM.render(
        <CasualistContext.Provider value={value}>
            <Router>
                <DragDropContext>
                    <Droppable droppableId="2">
                        {(provided) => (
                            <Draggable draggableId="1" index="1">
                                {(provided) => (
                                    <Item id={1} />
                                )}
                            </Draggable>
                        )}
                    </Droppable>
                </DragDropContext>
            </Router>
        </CasualistContext.Provider>, div,
    );

    ReactDOM.unmountComponentAtNode(div);
});
