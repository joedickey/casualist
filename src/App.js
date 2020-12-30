import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import ListView from './ListView/ListView'

class App extends Component {

  render() {
    return (
      <main className='App'>
        <Route
          exact
          path={'/'}
          component={LandingPage}/>
          <Route
          path={'/:list_id'}
          component={ListView}/>
      </main>
    )
  }
}


export default App;
