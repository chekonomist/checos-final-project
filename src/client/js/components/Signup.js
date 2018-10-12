import React, {Component} from 'react'
import { Row, Input, Button} from 'react-materialize'

class Signup extends React.Component{
  render(){
    return(
      <div>
        <Row>
          <Input placeholder="Placeholder" s={6} label="First Name" />
          <Input s={6} label="Last Name" />
          <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
          <Input type="password" label="password" s={12} />
          <Input type="email" label="Email" s={12} />
        </Row>
        <div>
          <Button waves='light' node='a' href='http://www.google.com'> Register </Button>
        </div>
      </div>
    )
  }
}

export default Signup
