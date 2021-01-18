import React, { Component } from 'react';
import CasualistContext from '../CasualistContext';
import './StatusBar.css';

class StatusBar extends Component {
  static contextType = CasualistContext

  handleClick = (e, callback) => {
      const id = this.props.item_id;
      const data = {'status': e.target.id};

      callback(id, data);
  }
  
  render() {
      return (
          <CasualistContext.Consumer>
              {({patchItem}) => (
                  <div className='StatusBar'>
                      <button className={`StatusBar_tog ${this.props.status === 'todo' ? 'Item_todo' : ''}`} id='todo' onClick={(e) => this.handleClick(e, patchItem)}>To Do</button>
                      <button className={`StatusBar_tog ${this.props.status === 'doing' ? 'Item_doing' : ''}`} id='doing' onClick={(e) => this.handleClick(e, patchItem)}>Doing</button>
                      <button className={`StatusBar_tog ${this.props.status === 'done' ? 'Item_done' : ''}`} id='done' onClick={(e) => this.handleClick(e, patchItem)}>Done</button>
                  </div>
              )}
          </CasualistContext.Consumer>
      );
  }
}


export default StatusBar;
