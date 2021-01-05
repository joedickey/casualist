import React, { Component } from 'react';
import './StatusBar.css';

class StatusBar extends Component {

  render() {
    return (
      <div className='StatusBar'>
        <span className={`StatusBar_tog ${this.props.status === 'todo' ? 'Item_todo' : ''}`}>To Do</span>
        <span className={`StatusBar_tog ${this.props.status === 'doing' ? 'Item_doing' : ''}`}>Doing</span>
        <span className={`StatusBar_tog ${this.props.status === 'done' ? 'Item_done' : ''}`}>Done</span>
      </div>
    )
  }
}


export default StatusBar;
