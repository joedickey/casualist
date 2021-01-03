import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {

  render() {
    return (
      <div className='LandingPage view_container'>
          <div className='LandingPage_text'>
            <h1>Casualist</h1>
            <h2>The fast-casual checklist maker.</h2>
            <p>This app is designed to help a user easily and quickly create a dynamic and collaborative checklist.  Simply enter the title of the new list below and hit 'Create List'. Once the list is created just share the provided link with any collaborators. No sign-up or login needed, no wasted time.</p>
          </div>
          <div className='LandingPage_create'>
              <form className='LandingPage_form'>
                  <label for='listname' className='LandingPage_label'>Start a New List</label>
                  <input type='text' name='listname' id='listname' className='LandingPage_listname' placeholder='Enter new list title.'/>
                  <button type='submit' id='listname_submit'>Create List</button>
              </form>
              <div className='LandingPage_link'> {/* add conditional 'hidden' class */}
                <a href='https://casualist.vercel.app/fgxbEp'>https://casualist.vercel.app/fgxbEp</a>
                <button className='copylink'>Copy Link</button>
              </div>
          </div>
      </div>
    )
  }
}


export default LandingPage;
