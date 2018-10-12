import React, {Component} from 'react'
import request from 'superagent'
import { Row } from 'react-materialize'
import PropertyCard from './PropertyCard.js'
import FiltersSideBar from './FiltersSideBar.js'
import TopBar from './TopBar.js'
import FootBar from './FootBar.js'



//1. Load the api
class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      propertiesData : [],
    }
  }

  componentWillMount(){
    request
      .get('/api/properties')
      .then((serverRes)=>{
        // console.log("====API RESPONSE====");
        // console.log(serverRes.body);
        this.setState({
          propertiesData: serverRes.body
        })
      })
  }

  render (){
    const listingsData = this.state.propertiesData
    return  (
      <div>
          <FiltersSideBar />
          <Row>
            {listingsData.map((propertiesObj, i)=>{
              return (
                  <PropertyCard
                  {...propertiesObj}
                  key={propertiesObj.id}
                  />
                )
              })
            }
         </Row>
      </div>
    )
  }
}

export default Home
