import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './ListView.css';
import Header from '../Header/Header'

class ListView extends Component {

  render() {
    return (
      <div className='ListView'>
          <Header />
          <div className='view_container'>
          ListView
          </div>
      </div>
    )
  }
}


export default ListView;
