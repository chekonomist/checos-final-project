import React, {Component} from 'react'
import { Row, Input, Button} from 'react-materialize'

class Login extends React.Component{
  render(){
    return(
      <div>
        <Row>
          <Input type="password" label="password" s={12} />
          <Input type="email" label="Email" s={12} />
        </Row>
        <div>
          <Button waves='light' node='a' href='http://www.google.com'> Not registered? Sign Up Here </Button>
        </div>
      </div>
    )
  }
}

export default Login
