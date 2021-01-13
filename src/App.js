import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import CasualistContext from './CasualistContext'
import LandingPage from './LandingPage/LandingPage';
import ListView from './ListView/ListView'
import config from './config'

class App extends Component {
  static contextType = CasualistContext

  state = {
    list: {},
    allItems: [],
    displayItems: [],
    currentItem: {},
    currentFilter: 'all'
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
    const currentItem = this.state.allItems.filter(item => item.id === id)
    
    this.setState({
      currentItem: currentItem
    })
  }

  updateDisplayItemsOrder = (result) => {
    if (!result.destination) return;
    const items = Array.from(this.state.displayItems)
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem)
    const newItemOrder = []
    items.forEach(item => newItemOrder.push(item.id))

    this.patchList({'item_order': newItemOrder}) //API call to update list.item_order with newItemOrder

    this.setState({
      allItems: items,
      displayItems: items
    })
  }

  updateFilter = (val) => { // Used conditionally to only allow drag and drop when all items are displayed
    this.setState({
      currentFilter: val
    })
  }

  loadList = (list) => {
    this.setState({
      list: list
    })
  }

  loadListItems = (items) => {
    this.setState({
      allItems: items,
      displayItems: items
    })

    this.sortByItemOrder()
  }

  sortByItemOrder = () => { // sorts list based on item order (by ID)
    const items = this.state.allItems
    const list = this.state.list
    const sortedItems = []
    for(let i = 0; i < list.item_order.length; i++ ) {
      for(let j = 0; j < items.length; j++){
        if(list.item_order[i] === items[j].id) {
          sortedItems.push(items[j])
        }
      }
    }

    this.setState({
      allItems: sortedItems,
      displayItems: sortedItems
    })
  }

  addItem = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(data)
    }
    
    fetch(`${config.API_ENDPOINT}/items`, requestOptions) // Create Item
      .then(res => {
        if(!res.ok) {
          throw new Error('Could not create list')
        }
        return res.json()
      })
      .then(resJson => {
        const { id } = resJson
        const { item_order, url_path } = this.state.list

        this.state.allItems.push(resJson)

        item_order.push(id)
        
        const patchRequestOptions = {
          ...requestOptions, 
          method: 'PATCH', 
          body: JSON.stringify({'item_order': item_order})}

        fetch(`${config.API_ENDPOINT}/lists/${url_path}`, patchRequestOptions ) // Add new item to list item_order and update in database
          .then(res => {
            if(!res.ok) {
              throw new Error('Could not update list item order')
            }
            return res
          })
          .catch(err => err.message)
      })
      .catch(err => err.message)

      setTimeout(() => {
        this.setState({ // trigger rerender with new item
          allItems: this.state.allItems
        })
      }, 400)
    
  }

  deleteItem = (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
    }
    
    fetch(`${config.API_ENDPOINT}/items/${id}`, requestOptions) // DELETE Item
      .then(res => {
        if(!res.ok) {
          throw new Error('Could not delete item')
        }
        return res
      })
      .then(res => {
        const newItemOrder = this.state.list.item_order.filter(item => item !== id) // Removes item id from item_order
        const patchData = {
          'item_order': newItemOrder
        }
        this.patchList(patchData)
        
      })
      .catch(err => err.message)

    const newAllItems = this.state.allItems.filter(item => item.id !== id)

    this.setState({
      allItems: newAllItems,
      displayItems: newAllItems,
      currentFilter: 'all'
    })
  }

  patchList = (data) => { // handles all list patches
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(data)
    }

    fetch(`${config.API_ENDPOINT}/lists/${this.state.list.url_path}`, requestOptions)
      .then(res => {
        if(!res.ok) {
          throw new Error('Could not update list details.')
        }
        return res
      })
      .catch(err => err.message)

      this.setState({
        list: {...this.state.list, ...data} //trigger re-render with updates
      })
  }

  patchItem = (id, data) => { // handles all items patches
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(data)
    }

    fetch(`${config.API_ENDPOINT}/items/${id}`, requestOptions)
      .then(res => {
        if(!res.ok) {
          throw new Error('Could not update list details.')
        }
        return res
      })
      .catch(err => err.message)

      const allItemsIndex = this.state.allItems.findIndex(item => item.id === id)
      const displayItemsIndex = this.state.displayItems.findIndex(item => item.id === id)
      let newAllItems = [...this.state.allItems]
      let newDisplayItems = [...this.state.displayItems]
      let newCurrentItem = [{...this.state.currentItem[0], ...data}]

      newAllItems[allItemsIndex] = {...newAllItems[allItemsIndex], ...data}
      newDisplayItems[displayItemsIndex] = {...newDisplayItems[displayItemsIndex], ...data}

      this.setState({ //trigger re-render with updates
        allItems: newAllItems,
        displayItems: newDisplayItems,
        currentItem: newCurrentItem
      })
    
  }

  render() {
    const contextValue = {
      list: this.state.list,
      allItems: this.state.allItems,
      displayItems: this.state.displayItems,
      currentItem: this.state.currentItem,
      currentFilter: this.state.currentFilter,
      filterItems: this.filterItems,
      updateCurrItem: this.updateCurrItem,
      updateDisplayItemsOrder: this.updateDisplayItemsOrder,
      updateFilter: this.updateFilter,
      loadList: this.loadList,
      loadListItems: this.loadListItems,
      addItem: this.addItem,
      deleteItem: this.deleteItem,
      patchList: this.patchList,
      patchItem: this.patchItem,
      
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
