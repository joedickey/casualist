import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CasualistContext from '../CasualistContext';
import './Item.css';
import StatusBar from '../StatusBar/StatusBar'

class Item extends Component {
  static contextType = CasualistContext

  handleClick = (id, callback) => {
    callback(id)
  }

  render() {
    return (
      <div className='Item'>
        <CasualistContext.Consumer>
          {({updateCurrItem}) => (
            <>
            <div className='Item_left'>
              <h4>{this.props.item_name}</h4>
              <p className={`${this.props.assigned ? '' : 'hidden'}`}>Assigned to: {this.props.assigned}</p>
              <StatusBar status={this.props.status}/>             
            </div>
            <div className='Item_right'>
              <button className='Item_button'>Delete</button>
              <button className='Item_button' onClick={() => this.handleClick(this.props.id, updateCurrItem)}>
                <Link className='router_link' to={`/fgxbEp/edit/${this.props.id}`}>
                  Edit
                </Link>
              </button>
              <button className='Item_button' onClick={() => this.handleClick(this.props.id, updateCurrItem)}>
                <Link className='router_link' to={`/fgxbEp/detail/${this.props.id}`}>
                  Details
                </Link>
              </button>
            </div>
            </>
          )}
        </CasualistContext.Consumer>
      </div>
    )
  }
}


export default Item;
