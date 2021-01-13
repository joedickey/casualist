import React, { Component } from 'react';
import CasualistContext from '../CasualistContext';
import './ItemDetail.css';
import StatusBar from '../StatusBar/StatusBar'

class ItemDetail extends Component {
  static contextType = CasualistContext

  handleClick = () => {
    this.props.toggleEditItemModal()
    this.props.toggleItemDetailModal()

  }

  handleDelete = (id, callback) => {
    callback(id)
    this.props.toggleItemDetailModal()
  }

  render() {
    const currentItem = this.context.currentItem[0]

    return (
      <div className='ItemDetail'>
        <ul className='ItemDetail_ul'> 
          <CasualistContext.Consumer>
              {({deleteItem}) => (
                <div className='ItemDetail_item'>
                  <div className='ItemDetail_top'>
                    <div className='ItemDetail_left'>
                      <h4>{currentItem.name}</h4>
                      <p className={`${currentItem.assign ? '' : 'hidden'}`}>Assigned to: {currentItem.assign}</p>
                      <StatusBar status={currentItem.status} item_id={currentItem.id}/> 
                    </div>
                    <div className='ItemDetail_right'>
                      <button className='ItemDetail_button' onClick={(e) => this.handleDelete(currentItem.id, deleteItem)}>Delete</button>
                      <button className='ItemDetail_button' onClick={() => this.handleClick()}>
                        Edit
                      </button>
                      <button className='ItemDetail_button' onClick={() => this.props.toggleItemDetailModal()}>
                        Back
                      </button>
                    </div>
                  </div>
                  <div className='ItemDetail_bottom'>
                    <p className={`${currentItem.notes ? '' : 'hidden'}`}>Notes:</p>
                    <p>{currentItem.notes}</p>
                  </div>
                </div>
              )}
          </CasualistContext.Consumer>
        </ul>
      </div>
    )
  }
}


export default ItemDetail;
