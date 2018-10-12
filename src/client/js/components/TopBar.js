import React, {Component} from 'react'
import { Navbar, NavItem, SideNav, SideNavItem, Input} from 'react-materialize'
import PropertyCard from './Home.js'


class TopBar extends React.Component{
  render(){
    return (
      <Navbar className="#0097a7 cyan darken-2" brand='logo' right>
        <NavItem>Find a place for your business today!</NavItem>
        <NavItem href='components.html'>My Account</NavItem>
      </Navbar>
    )
  }
}

export default TopBar
