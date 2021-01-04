import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Header.css';
import Filter from '../Filter/Filter'
import CasualistContext from '../CasualistContext';

class Header extends Component {
  static contextType = CasualistContext

  render() {

    return (
      <div className='Header'>
        <h2>
          <Link className='router_link' to='/'>
            Casualist
          </Link>
        </h2>
        <div className='Header_controls'>
            <Filter />
            <div className='Header_link'>
              <a href={`http://localhost:3000/${this.context.list.id}`}>http://localhost:3000/{this.context.list.id}</a>
              <button className='copylink'>Copy Link</button>
            </div>
        </div>
      </div>
    )
  }
}


export default Header;
