import React from 'react';

const CasualistContext = React.createContext({
    list: {},
    items: [],
    currentItem: {},
    displayItems: [],
    filterItems: () => {},
    updateCurrItem: () => {},
    updateDisplayItemsOrder: () => {},
    updateFilter: () => {},
    loadList: () => {},
    loadListItems: () => {},
    addItem: () => {},
    deleteItem: () => {},
    patchList: () => {},
    patchItem: () => {},
});

export default CasualistContext;
