import React from 'react';
const request = require('superagent')
import { Row, Button } from 'react-materialize'

class Dashboard extends React.Component {
  render(){
    return(
      <div>
        <Button floating large className='red' waves='light' icon='add' />
        <p>Add a property</p>
      </div>
    )
  }
}

export default Dashboard
