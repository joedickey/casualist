import React, { Component } from 'react';
import CasualistContext from '../CasualistContext';
import { Draggable } from 'react-beautiful-dnd'
import './Item.css';
import StatusBar from '../StatusBar/StatusBar'

class Item extends Component {
  static contextType = CasualistContext

  handleClick = (e, id, callback) => {
    callback(id)
    e.target.value === 'edit' ? this.props.toggleEditItemModal() : this.props.toggleItemDetailModal()
    
  }

  render() {
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {(provided) => (
          <div className='Item' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
                  <button className='Item_button' value='edit' onClick={(e) => this.handleClick(e, this.props.id, updateCurrItem)}>
                      Edit
                  </button>
                  <button className='Item_button' value='details' onClick={(e) => this.handleClick(e, this.props.id, updateCurrItem)}>
                    Details
                  </button>
                </div>
                </>
              )}
            </CasualistContext.Consumer>
          </div>
        )}
      </Draggable>
    )
  }
}


export default Item;
