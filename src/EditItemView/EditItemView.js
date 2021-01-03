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
              <EditItem key='' id='1' item_name='Item 1' assigned='Me' status='todo' notes='These are my notes. These are my notes. These are my notes. These are my notes.' /> {/* props will be in state */}
            </div>
        </div>
      </>
    )
  }
}


export default EditItemView;
