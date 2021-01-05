import React from 'react'

const CasualistContext = React.createContext({
    list: {},
    items: [],
    currentItem: {},
    view: '',
    filterItems: () => {},
    updateCurrItem: () => {}
})

export default CasualistContext;