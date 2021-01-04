import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './EditItem.css';

class EditItem extends Component {

  render() {
    return (
      <div className='EditItem'>
        <form className='EditItem_form'>
          <label htmlFor='form_name' className='EditItem_label'>Name:</label>
          <input id='form_name' name='form_name' className='EditItem_input' type='text' defaultValue={this.props.item_name}></input>
          <label htmlFor='form_assign' className='EditItem_label'>Assigned To:</label>
          <input id='form_assign' name='form_assign' className='EditItem_input' type='text' defaultValue={this.props.assigned}></input>
          <div className='EditItem_status'>
            <span className={`Item_stat_tog ${this.props.status === 'todo' ? 'Item_todo' : ''}`}>To Do</span>
            <span className={`Item_stat_tog ${this.props.status === 'doing' ? 'Item_doing' : ''}`}>Doing</span>
            <span className={`Item_stat_tog ${this.props.status === 'done' ? 'Item_done' : ''}`}>Done</span>
          </div>
          <label htmlFor='form_notes' className='EditItem_label'>Notes:</label>
          <textarea id='form_notes' name='form_notes' className='EditItem_input' type='text' defaultValue={this.props.notes}></textarea>
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
