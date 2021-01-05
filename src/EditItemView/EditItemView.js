import React, { Component } from 'react';
import './EditItemView.css';
import Header from '../Header/Header'
import EditItem from '../EditItem/EditItem'

class EditItemView extends Component {

  render() {
    return (
      <>
        <Header view='edit' />
        <div className='EditItemView'>
            <div className='view_container'>
              <EditItem />
            </div>
        </div>
      </>
    )
  }
}


export default EditItemView;
