import React, { Component } from 'react';
import './LandingPage.css';
import CasualistContext from '../CasualistContext'

class LandingPage extends Component {
  static contextType = CasualistContext

  constructor(props) {
    super(props)

    this.linkRef = React.createRef()
  }

  state = {
    linkHidden: true
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      linkHidden: false
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
                <a ref={this.linkRef} href={`http://localhost:3000/${this.context.list.id}`}>http://localhost:3000/{this.context.list.id}</a>
                <button className='copylink' onClick={() => this.copyLink()}>Copy Link</button>
                <input ref={this.linkRef} type='hidden' value={`http://localhost:3000/${this.context.list.id}`} readOnly></input>
              </div>
          </div>
      </div>
    )
  }
}


export default LandingPage;
