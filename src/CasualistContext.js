import React from 'react'

const CasualistContext = React.createContext({
    list: {},
    items: [],
    currentItem: {},
    displayItems: [],
    filterItems: () => {},
    updateCurrItem: () => {},
    updateDisplayItemsOrder: () => {},
    updateFilter: () => {}
})

export default CasualistContext;