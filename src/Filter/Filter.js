import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './Filter.css';

class Filter extends Component {

  render() {
    const assignedOptions = <option value='Me'>Me</option> // write generative function
    return (
      <div className={`Filter ${this.props.view === 'list' ? '' : 'Filter_empty'}`}> {/* move view props to state */}
          <label for='Filter_select' id='Filter_label'>Filter:</label>
          <select name='Filter_select' id='Filter_select' disabled={this.props.view === 'list' ? false : true }>
            <option value='all'>All</option>
            <option value='todo'>Status: To Do</option>
            <option value='doing'>Status: Doing</option>
            <option value='done'>Status: Done</option>
            {assignedOptions}
          </select>
      </div>
    )
  }
}


export default Filter;
