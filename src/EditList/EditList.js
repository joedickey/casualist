import React, { Component } from 'react';
import CasualistContext from '../CasualistContext';
import './EditList.css';

class EditList extends Component {
  static contextType = CasualistContext

  handleSubmit = (e, callback) => {
    e.preventDefault()
    const newListName = e.target.form_name.value
    const patchData = {'name': newListName}

    callback(patchData)

    this.props.toggleEditListModal()
  }

  render() {
    const list = this.context.list

    return (
      <div className='EditList'>
        <CasualistContext.Consumer>
          {({patchList}) => (
            <form className='EditList_form' onSubmit={(e) => this.handleSubmit(e, patchList)}>
              <div className='EditList_top'>
                <label htmlFor='form_name' className='EditList_label'>Name:</label>
                <input id='form_name' name='form_name' className='EditList_input' type='text' defaultValue={list.name}></input>
              </div>
              <div className='EditList_bottom'>
                <button  type='submit' className='EditList_button'>
                  Submit
                </button>
                <button type='button' className='EditList_button' onClick={() => this.props.toggleEditListModal()}>
                  Cancel
                </button>
              </div>
            </form>
          )}
        </CasualistContext.Consumer>
      </div>
    )
  }
}


export default EditList;
