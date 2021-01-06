import React, { Component } from 'react';
import './AddListItem.css';

class AddListItem extends Component {

  render() {
    return (
      <div className='AddListItem'>
        <form className='AddListItem_form'>
          <label htmlFor='form_name' className='AddListItem_label'>Name:</label>
          <input id='form_name' name='form_name' className='AddListItem_input' type='text' placeholder=''></input>
          <label htmlFor='form_assign' className='AddListItem_label'>Assigned To:</label>
          <input id='form_assign' name='form_assign' className='AddListItem_input' type='text' placeholder=''></input>
          <label htmlFor='form_notes' className='AddListItem_label'>Notes:</label>
          <textarea id='form_notes' name='form_notes' className='AddListItem_input' type='text' placeholder=''></textarea>
          <div className='AddListItem_bottom'>
            <button  type='submit' className='AddListItem_button'>
              Submit
            </button>
            <button className='AddListItem_button'>
                Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}


export default AddListItem;
