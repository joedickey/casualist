import React, { Component } from 'react';
import './CreateItemView.css';
import Header from '../Header/Header'
import CreateItem from '../CreateItem/CreateItem'

class CreateItemView extends Component {

  render() {
    return (
      <>
        <Header view='create' />
        <div className='CreateItemView'>
            <div className='view_container'>
              <CreateItem />
            </div>
        </div>
      </>
    )
  }
}


export default CreateItemView;
