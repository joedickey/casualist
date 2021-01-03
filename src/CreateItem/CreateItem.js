import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './CreateItem.css';

class CreateItem extends Component {

  render() {
    return (
      <div className='CreateItem'>
        <form className='CreateItem_form'>
          <label for='form_name' class='CreateItem_label'>Name:</label>
          <input id='form_name' name='form_name' class='CreateItem_input' type='text' placeholder=''></input>
          <label for='form_assign' class='CreateItem_label'>Assigned To:</label>
          <input id='form_assign' name='form_assign' class='CreateItem_input' type='text' placeholder=''></input>
          <label for='form_notes' class='CreateItem_label'>Notes:</label>
          <textarea id='form_notes' name='form_notes' class='createitem_input' type='text' placeholder=''></textarea>
          <div className='CreateItem_bottom'>
            <button  type='submit' className='CreateItem_button'>
              <Link className='router_link' to={`/fgxbEp`}>
                Submit
              </Link>
            </button>
            <button className='CreateItem_button'>
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


export default CreateItem;
