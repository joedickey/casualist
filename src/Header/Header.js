import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Header.css';
import Filter from '../Filter/Filter'
import CasualistContext from '../CasualistContext';

class Header extends Component {
  static contextType = CasualistContext

  constructor(props) {
    super(props)

    this.linkRef = React.createRef()
  }

  copyLink = (e) => {
    this.linkRef.current.type = 'text'
    this.linkRef.current.focus()
    this.linkRef.current.select()
    document.execCommand('copy')
    this.linkRef.current.type = 'hidden'
  }

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
              <a href={`http://localhost:3000/${this.context.list.url_path}`}>http://localhost:3000/{this.context.list.url_path}</a>
              <button className='copylink' onClick={() => this.copyLink()}>Copy Link</button>
              <input ref={this.linkRef} type='hidden' value={`http://localhost:3000/${this.context.list.url_path}`} readOnly></input>
            </div>
        </div>
      </div>
    )
  }
}


export default Header;
