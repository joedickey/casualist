import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CasualistContext from '../CasualistContext';
import './EditItem.css';
import StatusBar from '../StatusBar/StatusBar'

class EditItem extends Component {
  static contextType = CasualistContext

  render() {
    const currentItem = this.context.currentItem[0]

    return (
      <div className='EditItem'>
        <form className='EditItem_form'>
          <label htmlFor='form_name' className='EditItem_label'>Name:</label>
          <input id='form_name' name='form_name' className='EditItem_input' type='text' defaultValue={currentItem.name}></input>
          <label htmlFor='form_assign' className='EditItem_label'>Assigned To:</label>
          <input id='form_assign' name='form_assign' className='EditItem_input' type='text' defaultValue={currentItem.assign}></input>
          <StatusBar status={currentItem.status} />
          <label htmlFor='form_notes' className='EditItem_label'>Notes:</label>
          <textarea id='form_notes' name='form_notes' className='EditItem_input' type='text' defaultValue={currentItem.notes}></textarea>
          <div className='EditItem_bottom'>
            <button  type='submit' className='EditItem_button'>
              <Link className='router_link' to={`/fgxbEp`}>
                Submit
              </Link>
            </button>
            <button className='EditItem_button'>
              <Link className='router_link' to={`/fgxbEp`}>
                Cancel
              </Link>
            </button>
          </div>
        </form>
      </div>
    )
  }
}


export default EditItem;
