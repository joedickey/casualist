import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import CasualistContext from './CasualistContext'
import LandingPage from './LandingPage/LandingPage';
import ListView from './ListView/ListView'
import ItemDetailView from './ItemDetailView/ItemDetailView'
import CreateItemView from './CreateItemView/CreateItemView';
import EditItemView from './EditItemView/EditItemView'
import EditListView from './EditListView/EditListView'
import Mock from './mock.js'

class App extends Component {
  static contextType = CasualistContext

  state = {
    list: Mock.mocklist,
    allItems: Mock.mockitems,
    displayItems: Mock.mockitems,
    currentItem: {},
    view: 'list'
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

  render() {
    const contextValue = {
      list: this.state.list,
      allItems: this.state.allItems,
      displayItems: this.state.displayItems,
      currentItem: this.state.currentItem,
      view: this.state.view,
      filterItems: this.filterItems,
      updateCurrItem: this.updateCurrItem
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
          <Route
            exact
            path={'/:list_id/detail/:item_id'}
            component={ItemDetailView}/>
          <Route
            exact
            path={'/:list_id/add-item/'}
            component={CreateItemView}/>
          <Route
            exact
            path={'/:list_id/edit/:item_id'}
            component={EditItemView}/>
          <Route
            exact
            path={'/edit/:list_id'}
            component={EditListView}/>
        </CasualistContext.Provider>
      </main>
    )
  }
}


export default App;
