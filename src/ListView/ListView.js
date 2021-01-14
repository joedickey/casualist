import React, { Component } from 'react';
import './ListView.css';
import Header from '../Header/Header'
import List from '../List/List'
import config from '../config'
import CasualistContext from '../CasualistContext';

class ListView extends Component {
  static contextType = CasualistContext

  componentDidMount() {
    const listUrl = this.props.location !== undefined ? this.props.location.pathname.substring(1) : '12345' // used to pass test
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
    }
    
    fetch(`${config.API_ENDPOINT}/lists/${listUrl}`, requestOptions) // GET List
      .then(res => {
        if(!res.ok) {
          throw new Error('Could not retrieve list')
        }
        return res.json()
      })
      .then(resJson => {
        this.context.loadList(resJson) // set List for App

        fetch(`${config.API_ENDPOINT}/lists/listitems/${resJson.id}`, requestOptions) // GET List Items
          .then(res => {
              if(!res.ok) {
                throw new Error('Could not retrieve list')
              }
              return res.json()
          })
          .then(resJson => this.context.loadListItems(resJson)) // set List Items for App
          .catch(err => err.message)
      })
      .catch(err => err.message)
    
  }

  render() {
    return (
      <>
      <Header />
      <div className='ListView'>
          <div className='view_container'>
            <List />
          </div>
      </div>
      </>
    )
  }
}


export default ListView;
