import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Item.css';

class Item extends Component {

  render() {
    return (
      <div className='Item'>
        <div className="Item_left">
          <h4>{this.props.item_name}</h4>
          <p className={`${this.props.assigned ? '' : 'hidden'}`}>Assigned to: {this.props.assigned}</p>
          <div className="Item_status">
            <span className={`Item_stat_tog ${this.props.status === 'todo' ? 'Item_todo' : ''}`}>To Do</span>
            <span className={`Item_stat_tog ${this.props.status === 'doing' ? 'Item_doing' : ''}`}>Doing</span>
            <span className={`Item_stat_tog ${this.props.status === 'done' ? 'Item_done' : ''}`}>Done</span>
          </div>
        </div>
        <div className="Item_right">
          <button className="Item_button">Delete</button>
          <button className="Item_button">Edit</button>
          <button className="Item_button">
            <Link className='router_link' to={`/fgxbEp/detail/${this.props.id}`}>
              Details
            </Link>
          </button>
        </div>
      </div>
    )
  }
}


export default Item;
