import React, { Component } from 'react';
import './ListView.css';
import Header from '../Header/Header'
import List from '../List/List'

class ListView extends Component {

  render() {
    return (
      <>
        <Header view='list' />
        <div className='ListView'>
            <div className='view_container'>
              <List />
            </div>
        </div>
      </>
    )
  }
}


export default ListView;
