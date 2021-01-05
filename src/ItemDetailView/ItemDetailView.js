import React, { Component } from 'react';
import './ItemDetailView.css';
import Header from '../Header/Header'
import ItemDetail from '../ItemDetail/ItemDetail'

class ItemDetailView extends Component {

  render() {
    return (
      <>
        <Header view='detail' />
        <div className='ItemDetailView'>
            <div className='view_container'>
              <ItemDetail />
            </div>
        </div>
      </>
    )
  }
}


export default ItemDetailView;
