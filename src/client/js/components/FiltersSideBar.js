import React, {Component} from 'react'
import request from 'superagent'
import { Button, Row, SideNav, SideNavItem, Input} from 'react-materialize'
import PropertyCard from './Home.js'


class FiltersSideBar extends React.Component {
  constructor(){
    super();
    this.state = {
      thirdLinkOn : false
    }
  }

  render(){
    return (
      <div>
        <SideNav
          trigger={<Button>SIDE NAV DEMO</Button>}
          options={{ closeOnClick: true }}
          >
          <SideNavItem userView
            user={{
              background: `http://www.flathash.com/checo`,
              image: `http://www.flathash.com/pancho`,
              name: 'John Doe',
              email: 'jdandturk@gmail.com'
            }}
          />
          <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
          <SideNavItem href='#!second'>Second Link</SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Subheader</SideNavItem>
          <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
          <Input name='off' type='switch' value='22' checked={this.state.thirdLinkOn} onChange = { () => {
            // console.log(this.state);
            this.setState({thirdLinkOn : !this.state.thirdLinkOn}) }  } />
          <Button className='filter-options-button' waves='light'>Office</Button>
        </SideNav>
      </div>
    )
  }
}

export default FiltersSideBar
