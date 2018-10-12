import React from 'react';
import { Link } from 'react-router-dom'

import {Card, Col, CardTitle, Row} from 'react-materialize'

class PropertyCard extends React.Component {

    render(){
      return (
          <Col l={3} m={4} s={12}>
            <Card horizontal header={<CardTitle image={`http://www.flathash.com/${this.props.id}.png`}>
            </CardTitle>} actions={[<Link to={`/property/${this.props.id}`}>{this.props.property_description}</Link>]}>
              <p>{this.props.property_title}</p>
            </Card>
          </Col>
      )
    }
}

export default PropertyCard
