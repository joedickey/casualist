import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './Header.css';
import Filter from '../Filter/Filter'

class Header extends Component {

  render() {
    return (
      <div className='Header'>
          <h2>Casualist</h2>
          <div className='Header_controls'>
              <Filter />
              <div className='Header_link'>
                <a href='http://localhost:3000/fgxbEp'>http://localhost:3000/fgxbEp</a>
                <button className='copylink'>Copy Link</button>
              </div>
          </div>
      </div>
    )
  }
}


export default Header;
