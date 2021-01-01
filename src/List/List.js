import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './List.css';
import Item from '../Item/Item'

class List extends Component {

  render() {
    const items = <Item key='' id='1' item_name='Item 1' assigned='Me' status='todo'/>
    return (
      <div className='List'>
        <h3>My List</h3> {/* Replace 'title' const from data */}
        <ul className='List_ul'>
          {items}
        </ul>
        <button>
          <Link className='router_link' to='/fgxbEp/add-item'>+ Add List Item</Link>
        </button>
      </div>
    )
  }
}


export default List;
