import React, { Component } from 'react';
import CasualistContext from '../CasualistContext';
import './EditList.css';
import { default as submitIcon } from '../assets/submit_icon.svg';
import { default as cancelIcon } from '../assets/cancel_icon.svg';

class EditList extends Component {
  static contextType = CasualistContext

  handleSubmit = (e, callback) => {
      e.preventDefault();
      const newListName = e.target.form_name.value;
      const patchData = {'name': newListName};

      callback(patchData);

      this.props.toggleEditListModal();
  }

  render() {
      const list = this.context.list;

      return (
          <div className='EditList'>
              <CasualistContext.Consumer>
                  {({patchList}) => (
                      <form className='EditList_form' onSubmit={(e) => this.handleSubmit(e, patchList)}>
                          <div className='EditList_top'>
                              <label htmlFor='form_name' className='EditList_label'>Name:</label>
                              <input id='form_name' name='form_name' className='EditList_input' type='text' defaultValue={list.name} required></input>
                          </div>
                          <div className='EditList_bottom'>
                              <button type='submit' className='EditList_button'>
                                  <img className ='SubmitCancel_icons'src={submitIcon} alt='submit'></img>
                              </button>
                              <button type='button' className='EditList_button' onClick={() => this.props.toggleEditListModal()}>
                                  <img className ='SubmitCancel_icons'src={cancelIcon} alt='cancel'></img>
                              </button>
                          </div>
                      </form>
                  )}
              </CasualistContext.Consumer>
          </div>
      );
  }
}


export default EditList;
