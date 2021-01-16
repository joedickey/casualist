import React, { Component } from 'react';
import CasualistContext from '../CasualistContext';
import './AddListItem.css';
import { default as submitIcon } from '../assets/submit_icon.svg'
import { default as cancelIcon } from '../assets/cancel_icon.svg'

class AddListItem extends Component {
  static contextType = CasualistContext
  state = {
    showAssignInput: true
  }

  handleSelect = (e) => {
    if(e.target.value === 'new'){
      this.setState({
        showAssignInput: true
      })
    }
    else {
      this.setState({
        showAssignInput: false
      })
    }
  }

  handleSubmit = (e, callback) => {
    e.preventDefault()
    const newItem = {
      'list_id': this.context.list.id,
      'name': e.target.form_name.value,
      'assign': this.state.showAssignInput ? e.target.form_assign_input.value : e.target.form_assign.value,
      'notes': e.target.form_notes.value
    }

    callback(newItem)
    this.props.toggleAddListItemModal()
  }

  render() {
    const assignVals = []
    const assignedOptions = this.context.allItems.map(item => {
      if(!assignVals.includes(item.assign) && item.assign !== '') { // removes duplicates
        assignVals.push(item.assign)
        return <option key={item.id} value={item.assign}>{item.assign}</option> // value with additional 'assigned:' string to avoid user input confusion with set options (ie. if user acidentally assigns to 'all', 'todo', etc)
      }
      return null // to avoid compile warning
    })

    return (
      <div className='AddListItem'>
        <CasualistContext.Consumer>
          {({addItem})=> (
            <form className='AddListItem_form' onSubmit={(e) => this.handleSubmit(e, addItem)}>
              <label htmlFor='form_name' className='AddListItem_label'>Name:</label>
              <input id='form_name' name='form_name' className='AddListItem_input' type='text' placeholder='' required></input>
              <label htmlFor='form_assign' className='AddListItem_label'>Assigned To:</label>
              <select name='form_assign' id='form_assign' defaultValue='new' onChange={(e) => this.handleSelect(e)}>
                {assignedOptions}
                {assignVals.length > 0 ? <option disabled>──────────────────</option> : ''}
                <option value='new'>+ Add New</option>
                <option value=''>No One</option>
              </select>
              <input id='form_assign_input' name='form_assign_input' className={`EditItem_input ${this.state.showAssignInput ? '' : 'hidden'} `} type='text'></input>
              <label htmlFor='form_notes' className='AddListItem_label'>Notes:</label>
              <textarea id='form_notes' name='form_notes' className='AddListItem_input' type='text' placeholder=''></textarea>
              <div className='AddListItem_bottom'>
                <button  type='submit' className='AddListItem_button'>
                  <img className ='SubmitCancel_icons'src={submitIcon} alt='submit'></img>
                </button>
                <button type='button' className='AddListItem_button' onClick={() => this.props.toggleAddListItemModal()} >
                  <img className ='SubmitCancel_icons'src={cancelIcon} alt='cancel'></img>
                </button>
              </div>
            </form>
          )}
        </CasualistContext.Consumer>
      </div>
    )
  }
}


export default AddListItem;
