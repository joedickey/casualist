import React, { Component } from 'react';
import './CreateItemView.css';
import Header from '../Header/Header'

class CreateItemView extends Component {

  render() {
    return (
      <>
        <Header view='create' />
        <div className='CreateItemView'>
            <div className='view_container'>
              Create Item View
            </div>
        </div>
      </>
    )
  }
}


export default CreateItemView;
