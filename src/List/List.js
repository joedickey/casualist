import React, { Component } from 'react';
import CasualistContext from '../CasualistContext'
import {Link} from 'react-router-dom'
import './List.css';
import Item from '../Item/Item'

class List extends Component {
  static contextType = CasualistContext

  render() {
    const items = this.context.displayItems.map(item => {
      return <Item key={item.id} id={item.id} item_name={item.name} assigned={item.assign} status={item.status}/>
    }) 
    return (
      <div className='List'>
        <h3>{this.context.list.name}</h3>
        <button>Edit List Name</button>
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
