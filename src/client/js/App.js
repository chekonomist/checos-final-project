import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//import components
import Home from './components/Home.js'
import SingleProperty from './components/SingleProperty.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Dashboard from './components/Dashboard.js'
import TopBar from './components/TopBar.js'
import FootBar from './components/FootBar.js'

class App extends React.Component {
  render (){
    return (
    <div>
      <TopBar />
      <Switch>
        <Route exact path='/property/:propertyId' component={SingleProperty}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/' component={Home}/>
      </Switch>
      <FootBar />
    </div>
    )
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
