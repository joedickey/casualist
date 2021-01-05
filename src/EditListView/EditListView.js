import React, { Component } from 'react';
import './EditListView.css';
import Header from '../Header/Header'
import EditList from '../EditList/EditList'

class EditListView extends Component {

  render() {
    return (
      <>
        <Header view='edit' />
        <div className='EditListView'>
            <div className='view_container'>
              <EditList />
            </div>
        </div>
      </>
    )
  }
}


export default EditListView;
