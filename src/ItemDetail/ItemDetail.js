import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CasualistContext from '../CasualistContext';
import './ItemDetail.css';
import StatusBar from '../StatusBar/StatusBar'

class ItemDetail extends Component {
  static contextType = CasualistContext

  render() {
    const currentItem = this.context.currentItem[0]

    return (
      <div className='ItemDetail'>
        <ul className='ItemDetail_ul'> 
          <div className='ItemDetail_item'>
            <div className='ItemDetail_top'>
              <div className='ItemDetail_left'>
                <h4>{currentItem.name}</h4>
                <p className={`${currentItem.assign ? '' : 'hidden'}`}>Assigned to: {currentItem.assign}</p>
                <StatusBar status={currentItem.status}/> 
              </div>
              <div className='ItemDetail_right'>
                <button className='ItemDetail_button'>Delete</button>
                <button className='ItemDetail_button'>
                  <Link className='router_link' to={`/fgxbEp/edit/${currentItem.id}`}>
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
              <p>{currentItem.notes}</p>
            </div>
        </div>
        </ul>
      </div>
    )
  }
}


export default ItemDetail;
