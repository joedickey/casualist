import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import CasualistContext from './CasualistContext'
import LandingPage from './LandingPage/LandingPage';
import ListView from './ListView/ListView'
import Mock from './mock.js'

class App extends Component {
  static contextType = CasualistContext

  state = {
    list: Mock.mocklist,
    allItems: Mock.mockitems,
    displayItems: Mock.mockitems,
    currentItem: {},
  }

  filterItems = (val) => {
    if(val === 'all') {
      this.setState({
        displayItems: this.state.allItems
      })
    }
    else if(val === 'todo' || val === 'doing' || val ==='done') {
      const filterItems = this.state.allItems.filter(item => item.status === val)
      
      this.setState({
        displayItems: filterItems
      })
    }
    else {
      const assignVal = val.slice(10)
      const filterItems = this.state.allItems.filter(item => item.assign === assignVal)
      
      this.setState({
        displayItems: filterItems
      })
    }
  }

  updateCurrItem = (id) => {
    const currentItem = this.state.allItems.filter(item => item.id === id.toString())
    
    this.setState({
      currentItem: currentItem
    })
  }

  updateDisplayItemsOrder = (result) => {
    if (!result.destination) return;
    const items = Array.from(this.state.displayItems)
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem)

    this.setState({
      displayItems: items
    })
  }

  render() {
    const contextValue = {
      list: this.state.list,
      allItems: this.state.allItems,
      displayItems: this.state.displayItems,
      currentItem: this.state.currentItem,
      filterItems: this.filterItems,
      updateCurrItem: this.updateCurrItem,
      updateDisplayItemsOrder: this.updateDisplayItemsOrder
    }

    return (
      <main className='App'>
        <CasualistContext.Provider value={contextValue}>
          <Route
            exact
            path={'/'}
            component={LandingPage}/>
          <Route
            exact
            path={'/:list_id'}
            component={ListView}/>
        </CasualistContext.Provider>
      </main>
    )
  }
}


export default App;
