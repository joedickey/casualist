import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CasualistContext from '../CasualistContext';
import './EditList.css';

class EditList extends Component {
  static contextType = CasualistContext

  render() {
    const list = this.context.list

    return (
      <div className='EditList'>
        <form className='EditList_form'>
            <div className='EditList_top'>
                <label htmlFor='form_name' className='EditList_label'>Name:</label>
                <input id='form_name' name='form_name' className='EditList_input' type='text' defaultValue={list.name}></input>
            </div>
            <div className='EditList_bottom'>
                <button  type='submit' className='EditList_button'>
                <Link className='router_link' to={`/fgxbEp`}>
                    Submit
                </Link>
                </button>
                <button className='EditList_button'>
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


export default EditList;
