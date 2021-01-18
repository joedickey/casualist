import React, { Component } from 'react';
import './LandingPage.css';
import CasualistContext from '../CasualistContext';
import config from '../config';
import {nanoid} from 'nanoid';
import {ReactComponent as CasualistLogo} from '../assets/logo.svg';
import { default as submitIcon } from '../assets/submit_icon.svg';

class LandingPage extends Component {
  static contextType = CasualistContext

  constructor(props) {
      super(props);

      this.linkRef = React.createRef();
  }

  state = {
      linkHidden: true,
      activeLink: ''
  }

  handleSubmit = (e) => {
      e.preventDefault();
      const newListName = e.target.listname.value;
      const newListUrl = nanoid(6);

      const newListData = {
          'url_path': newListUrl,
          'name': newListName,
          'item_order': []
      };
      const requestOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${config.API_KEY}`
          },
          body: JSON.stringify(newListData)
      };
    
      fetch(`${config.API_ENDPOINT}/lists`, requestOptions)
          .then(res => {
              if(!res.ok) {
                  throw new Error('Could not create list');
              }
              return res.json();
          })
          .catch(err => err.message);

      this.setState({
          linkHidden: false,
          activeLink: newListUrl
      });
    
      setTimeout(() => { // push to list once created.
          this.props.history.push(`/${this.state.activeLink}`);
      }, 300);

  }


  render() {
      return (
          <div className='LandingPage view_container'>
              <CasualistLogo className='LandingPage_logo'/>
              <div className='LandingPage_text'>
                  <h2>The fast-casual checklist maker.</h2>
                  <p id='intro'>Casualist helps you easily and quickly create a dynamic and collaborative checklist.  Simply submit a title below then allow others to view, edit, and contribute by sharing your unique list URL. No sign-up or login needed. No wasted time.</p>
              </div>
              <div className='LandingPage_create'>
                  <form className='LandingPage_form' onSubmit={(e) => this.handleSubmit(e)}>
                      <label htmlFor='listname' className='LandingPage_label'>CREATE LIST</label>
                      <input type='text' name='listname' id='listname' className='LandingPage_listname' placeholder='Enter new list title.' required/>
                      <button type='submit' id='listname_submit'>
                          <img className ='SubmitCancel_icons'src={submitIcon} alt='submit'></img>
                      </button>
                  </form>
              </div>
          </div>
      );
  }
}


export default LandingPage;
