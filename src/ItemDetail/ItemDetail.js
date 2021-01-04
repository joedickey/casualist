import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './ItemDetail.css';

class ItemDetail extends Component {

  render() {
    return (
      <div className='ItemDetail'>
        <ul className='ItemDetail_ul'> 
          <div className='ItemDetail_item'>
            <div className='ItemDetail_top'>
              <div className='ItemDetail_left'>
                <h4>{this.props.item_name}</h4>
                <p className={`${this.props.assigned ? '' : 'hidden'}`}>Assigned to: {this.props.assigned}</p>
                <div className='ItemDetail_status'>
                  <span className={`ItemDetail_stat_tog ${this.props.status === 'todo' ? 'Item_todo' : ''}`}>To Do</span>
                  <span className={`ItemDetail_stat_tog ${this.props.status === 'doing' ? 'Item_doing' : ''}`}>Doing</span>
                  <span className={`ItemDetail_stat_tog ${this.props.status === 'done' ? 'Item_done' : ''}`}>Done</span>
                </div>
              </div>
              <div className='ItemDetail_right'>
                <button className='ItemDetail_button'>Delete</button>
                <button className='ItemDetail_button'>
                  <Link className='router_link' to={`/fgxbEp/edit/${this.props.id}`}>
                    Edit
                  </Link>
                </button>
                <button className='ItemDetail_button'>
                  <Link className='router_link' to={'/fgxbEp'}>
                    Back
                  </Link>
                </button>
              </div>
            </div>
            <div className='ItemDetail_bottom'>
              <p>Notes:</p>
              <p>{this.props.notes}</p>
            </div>
        </div>
        </ul>
      </div>
    )
  }
}


export default ItemDetail;
