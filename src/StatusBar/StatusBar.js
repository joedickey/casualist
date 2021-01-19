import React, { Component } from 'react';
import CasualistContext from '../CasualistContext';
import './StatusBar.css';

class StatusBar extends Component {
  static contextType = CasualistContext

  handleClick = (e, callback) => {
      const id = this.props.item_id;
      const data = {'status': e.target.title};

      callback(id, data);
  }
  
  render() {
      return (
          <CasualistContext.Consumer>
              {({patchItem}) => (
                  <div className='StatusBar'>
                      <span className={`StatusBar_tog ${this.props.status === 'todo' ? 'Item_todo' : ''}`} title='todo' onClick={(e) => this.handleClick(e, patchItem)}>To Do</span>
                      <span className={`StatusBar_tog ${this.props.status === 'doing' ? 'Item_doing' : ''}`} title='doing' onClick={(e) => this.handleClick(e, patchItem)}>Doing</span>
                      <span className={`StatusBar_tog ${this.props.status === 'done' ? 'Item_done' : ''}`} title='done' onClick={(e) => this.handleClick(e, patchItem)}>Done</span>
                  </div>
              )}
          </CasualistContext.Consumer>
      );
  }
}


export default StatusBar;
