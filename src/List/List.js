import React, { Component } from 'react';
import Modal from 'react-modal';
import { DragDropContext, Droppable} from 'react-beautiful-dnd';
import CasualistContext from '../CasualistContext';
import './List.css';
import Item from '../Item/Item';
import EditList from '../EditList/EditList';
import AddListItem from '../AddListItem/AddListItem';
import ItemDetail from '../ItemDetail/ItemDetail';
import EditItem from '../EditItem/EditItem';
import { default as editIcon } from '../assets/edit_icon.svg';
import { default as addIcon } from '../assets/add_icon.svg';

class List extends Component {
  static contextType = CasualistContext

  state = {
      editListModalIsOpen: false,
      addListItemModalIsOpen: false,
      itemDetailModalIsOpen: false,
      editItemModalIsOpen: false
  }

  toggleEditListModal = () => {
      this.setState({
          editListModalIsOpen: !this.state.editListModalIsOpen
      });
  }

  toggleAddListItemModal = () => {
      this.setState({
          addListItemModalIsOpen: !this.state.addListItemModalIsOpen
      });
  }

  toggleItemDetailModal = () => {
      this.setState({
          itemDetailModalIsOpen: !this.state.itemDetailModalIsOpen
      });
  }

  toggleEditItemModal = () => {
      this.setState({
          editItemModalIsOpen: !this.state.editItemModalIsOpen
      });
  }

  handleOnDragEnd = (result, callback) => {
      callback(result);
  }
  
  componentDidMount() {
      Modal.setAppElement('body');
  }

  render() {
      const modalStyles = {
          content : {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
          },
      };

      Modal.defaultStyles.content.padding = '0px';
      Modal.defaultStyles.content.border = 'none';


      const items = this.context.displayItems.map((item, index) => {
          return <Item 
              index={index}
              key={item.id} 
              id={item.id} 
              item_name={item.name} 
              assigned={item.assign} 
              status={item.status} 
              toggleItemDetailModal={this.toggleItemDetailModal}
              toggleEditItemModal={this.toggleEditItemModal}/>;
      }); 

      return (
          <div className='List'>
              <div className='List_title'>
                  <h3 id='list_title'>{this.context.list.name}</h3>
                  <button id='edit_list' onClick={() => this.toggleEditListModal()}>
                      <img className ='Item_icons'src={editIcon} alt='edit'></img>
                  </button>
              </div>
              <CasualistContext.Consumer>
                  {({updateDisplayItemsOrder}) => (
                      <DragDropContext onDragEnd={(result) => this.handleOnDragEnd(result, updateDisplayItemsOrder)}>
                          <Droppable droppableId={'list_droppable_area'} isDropDisabled={this.context.currentFilter !== 'all' ? true : false}>
                              {(provided) => (
                                  <ul className='List_ul' {...provided.droppableProps} ref={provided.innerRef}>
                                      {items}
                                      {provided.placeholder}
                                  </ul>
                              )}
                          </Droppable>
                      </DragDropContext>
                  )}
              </CasualistContext.Consumer>
              <button onClick={() => this.toggleAddListItemModal()}>
                  <img className ='Item_icons'src={addIcon} alt='add'></img>
              </button>

              <Modal /* Pop up Edit List Modal */
                  isOpen={this.state.editListModalIsOpen} 
                  style={modalStyles}
                  onRequestClose ={this.toggleEditListModal}
                  closeTimeoutMS={50}
                  shouldCloseOnOverlayClick={true}> 
                  <EditList toggleEditListModal={this.toggleEditListModal}/>
              </Modal>

              <Modal /* Pop up Item Detail Modal */
                  isOpen={this.state.itemDetailModalIsOpen} 
                  style={modalStyles} 
                  onRequestClose ={this.toggleItemDetailModal}
                  closeTimeoutMS={50}
                  shouldCloseOnOverlayClick={true}> 
                  <ItemDetail 
                      toggleEditItemModal={this.toggleEditItemModal} 
                      toggleItemDetailModal={this.toggleItemDetailModal} />
              </Modal>

              <Modal /* Pop up Edit Item Modal */
                  isOpen={this.state.editItemModalIsOpen} 
                  style={modalStyles} 
                  onRequestClose ={this.toggleEditItemModal}
                  closeTimeoutMS={50}
                  shouldCloseOnOverlayClick={true}> 
                  <EditItem toggleEditItemModal={this.toggleEditItemModal} />
              </Modal>

              <Modal /* Pop up Add List Item Modal */
                  isOpen={this.state.addListItemModalIsOpen} 
                  style={modalStyles} 
                  onRequestClose ={this.toggleAddListItemModal}
                  closeTimeoutMS={50}
                  shouldCloseOnOverlayClick={true}> 
                  <AddListItem toggleAddListItemModal={this.toggleAddListItemModal}/>
              </Modal>
          </div>
      );
  }
}


export default List;
