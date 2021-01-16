import React, { Component } from 'react';
import CasualistContext from '../CasualistContext';
import './ItemDetail.css';
import StatusBar from '../StatusBar/StatusBar'
import { default as editIcon } from '../assets/edit_icon.svg'
import { default as deleteIcon } from '../assets/delete_icon.svg'
import { default as closeIcon } from '../assets/close_icon.svg'

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
                      <button className='ItemDetail_button' onClick={(e) => this.handleDelete(currentItem.id, deleteItem)}>
                        <img className ='Item_icons'src={deleteIcon} alt='delete'></img>
                      </button>
                      <button className='ItemDetail_button' onClick={() => this.handleClick()}>
                        <img className ='Item_icons'src={editIcon} alt='edit'></img>
                      </button>
                      <button className='ItemDetail_button' onClick={() => this.props.toggleItemDetailModal()}>
                        <img className ='Item_icons'src={closeIcon} alt='close'></img>
                      </button>
                    </div>
                  </div>
                  <div className='ItemDetail_bottom'>
                    <p className={`${currentItem.notes ? '' : 'hidden'}`}>Notes:</p>
                    <p className='ItemDetail_notes'>{currentItem.notes}</p>
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
