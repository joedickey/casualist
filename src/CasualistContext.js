import React from 'react'

const CasualistContext = React.createContext({
    list: {},
    items: [],
    currentItem: {},
    view: '',
    filterItems: () => {}
})

export default CasualistContext;