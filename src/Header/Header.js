import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Filter from '../Filter/Filter';
import headerLogo from '../assets/header_logo.svg';
import { default as linkIcon } from '../assets/link_icon.svg';
import CasualistContext from '../CasualistContext';


class Header extends Component {
  static contextType = CasualistContext

  constructor(props) {
      super(props);

      this.linkRef = React.createRef();
  }

  copyLink = (e) => {
      this.linkRef.current.type = 'text';
      this.linkRef.current.focus();
      this.linkRef.current.select();
      document.execCommand('copy');
      this.linkRef.current.type = 'hidden';
  }

  render() {

      return (
          <div className='Header'>
              <Link className='router_link' to='/'>
                  <img className='Header_logo' src={headerLogo} alt='header_logo' />
              </Link>   
              <div className='Header_controls'>
                  <Filter />
                  <div className='Header_link'>
                      <a href={`https://casualist.vercel.app/${this.context.list.url_path}`}>casualist.vercel.app/{this.context.list.url_path}</a>
                      <button onClick={() => this.copyLink()}>
                          <img id='link_icon' className ='Item_icons'src={linkIcon} alt='copy_link'></img>
                      </button>
                      <input ref={this.linkRef} type='hidden' value={`https://casualist.vercel.app/${this.context.list.url_path}`}></input>
                  </div>
              </div>
          </div>
      );
  }   
}


export default Header;
