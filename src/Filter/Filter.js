import React, { Component } from 'react';
import CasualistContext from '../CasualistContext';
import './Filter.css';

class Filter extends Component {
  static contextType = CasualistContext

  handleChange = (e, filterItems, updateFilter) => {
    const filterVal = e.target.value
    updateFilter(filterVal)
    filterItems(filterVal)
  }

  render() {
    const assignVals = []
    const assignedOptions = this.context.allItems.map(item => {
      if(!assignVals.includes(item.assign) && item.assign !== '') { // removes duplicates
        assignVals.push(item.assign)
        return <option key={item.id} value={`assigned: ${item.assign}`}>{item.assign}</option> // value with additional 'assigned:' string to avoid user input confusion with set options (ie. if user acidentally assigns to 'all', 'todo', etc)
      }
      return null // to avoid compile warning
    })

    return (
      <div className='Filter'>
        <CasualistContext.Consumer>
          {({filterItems, updateFilter}) => (
            <>
            <label htmlFor='Filter_select' id='Filter_label'>Filter:</label>
            <select name='Filter_select' id='Filter_select' onChange={(e) => this.handleChange(e, filterItems, updateFilter)}>
              <option value='all'>All</option>
              <option value='todo'>Status: To Do</option>
              <option value='doing'>Status: Doing</option>
              <option value='done'>Status: Done</option>
              {assignedOptions}
            </select>
            </>
          )} 
        </CasualistContext.Consumer>
      </div>
    )
  }
}


export default Filter;
