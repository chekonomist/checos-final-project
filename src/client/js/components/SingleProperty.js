import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize'
import request from 'superagent';

class SingleProperty extends Component{
  constructor(){
    super();
    this.state = {
      data : {
        brokers: {}
      }
    }
  }

componentWillMount(){
  const propertyId = this.props.match.params.propertyId
  request
    .get(`/api/properties/${propertyId}?related_query=brokers`)
    .then((serverRes)=>{
      // console.log(serverRes.body);
      this.setState({
        data : serverRes.body
      })
    })
}

  render(){
    const propertyData = this.state.data
    console.log(propertyData.brokers);
    return (
      <div>
          <div className="container">
            <Card header={<CardTitle reveal image={`http://www.flathash.com/${propertyData.id}`} waves='light'/>}
              title={`${propertyData.property_title}`}
              reveal={
                <div>
                  <h2>{`${propertyData.brokers.company_name}`}</h2>
                  <p>{`${propertyData.brokers.company_description}`}</p>
                  <p>{`${propertyData.brokers.contact_name} ${propertyData.brokers.contact_last_name}`}</p>
                  <p>{`${propertyData.brokers.mobile_number}`}</p>
                  <p>{`${propertyData.brokers.office_number}`}</p>
                  <p>{`${propertyData.brokers.web_page}`}</p>
                </div>
              }>
              <p>{`${propertyData.property_description}`}</p>
            </Card>
          </div>
      </div>
    )
  }
}

export default SingleProperty
