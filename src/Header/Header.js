import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Header.css';
import Filter from '../Filter/Filter'

class Header extends Component {

  render() {
    return (
      <div className='Header'>
          <h2>
            <Link className='router_link' to='/'>Casualist</Link>
          </h2>
          <div className='Header_controls'>
              <Filter view={this.props.view} />
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
