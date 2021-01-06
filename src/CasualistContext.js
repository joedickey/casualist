import React from 'react'

const CasualistContext = React.createContext({
    list: {},
    items: [],
    currentItem: {},
    displayItems: [],
    filterItems: () => {},
    updateCurrItem: () => {},
    updateDisplayItemsOrder: () => {}
})

export default CasualistContext;