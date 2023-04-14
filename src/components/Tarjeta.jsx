import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Cartadisp from '../pages/Menu/Cartadisp'
import { Link } from 'react-router-dom';

const Tarjeta = ({menu}) => {
    // const info = Cartadisp();
    console.log(menu);
  return (
    <div>
        <style type="text/css">
        {`
          // #contenedorcartas{
          //   display: flex;
          //   flex-direction: row;
          //   flex-wrap: wrap;
          //   padding: 0.5rem;
          //   justify-content: center;
          //   background-color: blue;
          //   max-width:95%;
          // }
          // #menu-display{
          //   display: flex;
          //   flex-direction: row;
          //   background-color: red;
          // }
          // #filtros{
          //   padding: 0.5rem;
          //   min-width: 20%; 
          //   background-color: yellow;
          //   min-width: 8rem;
          // }
          // #filtros>ul{
          //   list-style-type: none;
          //   margin: 0;
          //   padding: 0;
            
          // }
          // #filtros>ul>li>p{
          //   font-size:1rem;
          //   padding-left:1rem;
          // }            
          // }
        `}
        </style>

        <div id="menu-display">
          <Row>
            <Col xs={12} sm={3} md={2}>
              <div id="filtros" className='m-2 bg-light border border-warning rounded p-3'>
                <h4>Filtra Aqui:</h4>
                <ul>
                {
                  menu.map(plato=>(
                    <li key={plato._id}>
                      <p>{plato.categoria}</p>
                    </li>
                  ))
                
                }
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={9} md={10}>
              <div id="contenedorcartas" className='m-2 p-2 border border-warning rounded'>
                
                <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
                  {menu.map(plato=> (
                    <Col key={plato._id}>
                      <Card className="text-center" style={{ height: '33rem',width: '11rem', margin:'auto', text:'center'}}>
                      <Link to={`/product/${plato._id}`}>
                        <Card.Img variant="top" width='250rem' src={plato.image} />
                      </Link>
                      <Card.Body>
                          <Card.Title>{plato.name}</Card.Title>
                          <Card.Text>${plato.price}</Card.Text>
                         <Card.Text>{plato.description}</Card.Text>
                        <Button variant="primary">Agregar al carrito</Button>
                      </Card.Body>
                      </Card>
                    </Col>
                    ))}
                </Row>
                
              </div>
            </Col>
          </Row>
        </div>

        
      </div>
  )
}

export default Tarjeta




