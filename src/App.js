import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import ListView from './ListView/ListView'
import ItemDetailView from './ItemDetailView/ItemDetailView'
import CreateItemView from './CreateItemView/CreateItemView';

class App extends Component {

  render() {
    return (
      <main className='App'>
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
      </main>
    )
  }
}


export default App;
