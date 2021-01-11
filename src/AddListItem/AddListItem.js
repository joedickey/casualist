import React, { Component } from 'react';
import CasualistContext from '../CasualistContext';
import config from '../config'
import './AddListItem.css';

class AddListItem extends Component {
  static contextType = CasualistContext

  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      'list_id': this.context.list.id,
      'name': e.target.form_name.value,
      'assign': e.target.form_assign.value,
      'notes': e.target.form_notes.value
    }
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(newItem)
    }
    
    fetch(`${config.API_ENDPOINT}/items`, requestOptions)
      .then(res => {
        if(!res.ok) {
          throw new Error('Could not create list')
        }
        return res.json()
      })
      .catch(err => err.message)

  }

  render() {
    return (
      <div className='AddListItem'>
        <form className='AddListItem_form' onSubmit={(e) => this.handleSubmit(e)}>
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
            <button type='button' className='AddListItem_button'>
                Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}


export default AddListItem;
