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
              <ItemDetail key='' id='1' item_name='Item 1' assigned='Me' status='todo' notes='These are my notes. These are my notes. These are my notes. These are my notes.' />
            </div>
        </div>
      </>
    )
  }
}


export default ItemDetailView;
