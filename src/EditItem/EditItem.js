import React, { Component } from 'react';
import CasualistContext from '../CasualistContext';
import './EditItem.css';

class EditItem extends Component {
  static contextType = CasualistContext
  
  state = {
    showAssignInput: false
  }

  checkInitialAssign = (currentItem) => { 
    if(currentItem.assign === '') {
      this.setState({
        showAssignInput: true
      })
    }
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
    const id = this.context.currentItem[0].id
    const newName = e.target.form_name.value
    const newAssign = this.state.showAssignInput ? e.target.form_assign_input.value : e.target.form_assign.value
    const newNotes = e.target.form_notes.value

    const patchData = {
      'name': newName,
      'assign': newAssign,
      'notes': newNotes
    }

    callback(id, patchData)

    this.props.toggleEditItemModal()
  }

  componentDidMount() {
    const currentItem = this.context.currentItem[0] 
    this.checkInitialAssign(currentItem) // if currentItem on load has no assign value it changes state to render conditional Assign input.
  }

  render() {
    const currentItem = this.context.currentItem[0]
    const assignVals = []
    const assignedOptions = this.context.allItems.map(item => {
      if(!assignVals.includes(item.assign) && item.assign !== '') { // removes duplicates
        assignVals.push(item.assign)
        return <option key={item.id} value={item.assign}>{item.assign}</option> // value with additional 'assigned:' string to avoid user input confusion with set options (ie. if user acidentally assigns to 'all', 'todo', etc)
      }
      return null // to avoid compile warning
    })

    return (
      <div className='EditItem'>
        <CasualistContext.Consumer>
          {({patchItem}) => (
            <form className='EditItem_form' onSubmit={(e) => this.handleSubmit(e, patchItem)}>
              <label htmlFor='form_name' className='EditItem_label'>Name:</label>
              <input id='form_name' name='form_name' className='EditItem_input' type='text' defaultValue={currentItem.name}></input>
              <label htmlFor='form_assign' className='EditItem_label'>Assigned To:</label>
              <select name='form_assign' id='form_assign' defaultValue={currentItem.assign !== '' ? currentItem.assign : 'new' } onChange={(e) => this.handleSelect(e)}>
                {assignedOptions}
                <option value='new'>+ Add New</option>
              </select>
              <input id='form_assign_input' name='form_assign_input' className={`EditItem_input ${this.state.showAssignInput ? '' : 'hidden'} `} type='text'></input>
              <label htmlFor='form_notes' className='EditItem_label'>Notes:</label>
              <textarea id='form_notes' name='form_notes' className='EditItem_input' type='text' defaultValue={currentItem.notes}></textarea>
              <div className='EditItem_bottom'>
                <button  type='submit' className='EditItem_button'>
                  Submit
                </button>
                <button type='button' className='EditItem_button' onClick={() => this.props.toggleEditItemModal()}>
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


export default EditItem;
