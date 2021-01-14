import React, { Component } from 'react';
import './LandingPage.css';
import CasualistContext from '../CasualistContext'
import config from '../config'
import {nanoid} from 'nanoid'

class LandingPage extends Component {
  static contextType = CasualistContext

  constructor(props) {
    super(props)

    this.linkRef = React.createRef()
  }

  state = {
    linkHidden: true,
    activeLink: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newListName = e.target.listname.value
    const newListUrl = nanoid(6)

    const newListData = {
      'url_path': newListUrl,
      'name': newListName,
      'item_order': []
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(newListData)
    }
    
    fetch(`${config.API_ENDPOINT}/lists`, requestOptions)
      .then(res => {
        if(!res.ok) {
          throw new Error('Could not create list')
        }
        return res.json()
      })
      .catch(err => err.message)

    this.setState({
      linkHidden: false,
      activeLink: newListUrl
    })
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
      <div className='LandingPage view_container'>
          <div className='LandingPage_text'>
            <h1>Casualist</h1>
            <h2>The fast-casual checklist maker.</h2>
            <p>This app is designed to help a user easily and quickly create a dynamic and collaborative checklist.  Simply enter the title of the new list below and hit 'Create List'. Once the list is created just share the provided link with any collaborators. No sign-up or login needed, no wasted time.</p>
          </div>
          <div className='LandingPage_create'>
              <form className='LandingPage_form' onSubmit={(e) => this.handleSubmit(e)}>
                  <label htmlFor='listname' className='LandingPage_label'>Start a New List</label>
                  <input type='text' name='listname' id='listname' className='LandingPage_listname' placeholder='Enter new list title.'/>
                  <button type='submit' id='listname_submit'>Create List</button>
              </form>
              <div className={`LandingPage_link ${this.state.linkHidden ? 'hidden' : ''}`}> 
                <a ref={this.linkRef} href={`https://casualist.vercel.app/${this.state.activeLink}`}>https://casualist.vercel.app/{this.state.activeLink}</a>
                <button className='copylink' onClick={() => this.copyLink()}>Copy Link</button>
                <input ref={this.linkRef} type='hidden' value={`https://casualist.vercel.app/${this.state.activeLink}`} readOnly></input>
              </div>
          </div>
      </div>
    )
  }
}


export default LandingPage;
