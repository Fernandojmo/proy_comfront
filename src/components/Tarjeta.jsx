import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom';

const Tarjeta = ({plato}) => {
  
  return (
    <div>
      <Col key={plato._id}>
        <Card className="text-center" style={{ height: '33rem',width: '11rem', margin:'auto', text:'center'}}>
          <Card.Img variant="top" width='250rem' src={plato.image} />
          <Card.Body>
            <Card.Title>{plato.name}</Card.Title>
            <Card.Text>${plato.price}</Card.Text>
            <Card.Text>{plato.description}</Card.Text>
            <Link to={`/product/${plato._id}`}><Button variant="warning">Ver producto</Button></Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  )
}

export default Tarjeta




