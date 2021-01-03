import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './List.css';
import Item from '../Item/Item'
import Mock from '../mock.js'

class List extends Component {

  render() {
    const items = Mock.mockitems.map(item => {
      return <Item key={item.item_id} id={item.item_id} item_name={item.item_name} assigned={item.item_assign} status={item.item_status}/>
    }) 
    return (
      <div className='List'>
        <h3>My List</h3> {/* Replace 'title' const from data */}
        <ul className='List_ul'>
          {items}
        </ul>
        <button>
          <Link className='router_link' to='/fgxbEp/add-item'>
            + Add List Item
          </Link>
        </button>
      </div>
    )
  }
}


export default List;
