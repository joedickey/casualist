import React, { Component } from 'react';
import CasualistContext from '../CasualistContext';
import { Draggable } from 'react-beautiful-dnd';
import './Item.css';
import StatusBar from '../StatusBar/StatusBar';
import { default as editIcon } from '../assets/edit_icon.svg';
import { default as deleteIcon } from '../assets/delete_icon.svg';
import { default as detailIcon } from '../assets/detail_icon.svg';


class Item extends Component {
  static contextType = CasualistContext

  handleClick = (e, id, callback) => {
      callback(id);
      e.target.alt === 'edit' ? this.props.toggleEditItemModal() : this.props.toggleItemDetailModal();
    
  }

  handleDelete = (id, callback) => {
      callback(id);
  }

  render() {
      return (
          <Draggable draggableId={this.props.id.toString()} index={this.props.index}>
              {(provided) => (
                  <CasualistContext.Consumer>
                      {({updateCurrItem, deleteItem}) => (
                          <div className='Item' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                              <div className='Item_left' >
                                  <h4>{this.props.item_name}</h4>
                                  <p className={`${this.props.assigned ? '' : 'hidden'}`}>Assigned to: {this.props.assigned}</p>
                                  <StatusBar status={this.props.status} item_id={this.props.id}/>             
                              </div>
                              <div className='Item_right' >
                                  <button className='Item_button' onClick={(e) => this.handleDelete(this.props.id, deleteItem)}>
                                      <img className ='Item_icons'src={deleteIcon} alt='delete'></img>
                                  </button>
                                  <button className='Item_button' value='edit' onClick={(e) => this.handleClick(e, this.props.id, updateCurrItem)}>
                                      <img className ='Item_icons'src={editIcon} alt='edit'></img>
                                  </button>
                                  <button className='Item_button' value='details' onClick={(e) => this.handleClick(e, this.props.id, updateCurrItem)}>
                                      <img className ='Item_icons'src={detailIcon} alt='detail'></img>
                                  </button>
                              </div>
                          </div>
                      )}
                  </CasualistContext.Consumer>
              )}
          </Draggable>
      );
  }
}


export default Item;
