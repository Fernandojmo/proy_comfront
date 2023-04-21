import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Cartadisp from '../pages/Menu/Cartadisp'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Tarjeta = ({menu,uniqueCategories}) => {
  
  const [newmenu , setNewmenu] = useState(menu);
  const [category,setCategory] = useState("All");
  



  useEffect(() => {
    const aplicatefilter = (menu,category) => {
      
      if(category==="All"){
        return menu;
      }else{
        return menu.filter((product)=>product.cat==category);
      }
    }
    setNewmenu(aplicatefilter(menu,category));
    console.log(newmenu);
  }, [category, newmenu]);


    // const aplicatefilter = (menu,category) => {
      
    //   if(category==="All"){
    //     return menu;
    //   }else{
    //     return menu.filter((product)=>product.cat==category);
    //   }
    // }

  return (
    <div>
        <style type="text/css">
        {`
          #filtros{
            padding: 0.5rem;
            min-width: 20%; 
            background-color: yellow;
            min-width: 8rem;
          }
          #filtros>ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
            
          }
          #filtros>ul>li{
            font-size:1rem;
            padding:0.25rem;
          }
          #filtros>ul>li>Button{
            font-size:1rem;
            padding:0.25rem;
          }              
        `}
        </style>

        <div id="menu-display">
          <Row>
            <Col xs={12} sm={3} md={2}>
              <div id="filtros" fluid="xs" className='m-2 bg-light border border-warning rounded p-3'>
                <h5 className=''>Filtra Aqui:</h5>
                <ul>
                {
                  uniqueCategories.map(mapcategory=>(
                    <li key={mapcategory} className='d-grid gap-2'>
                      <Button variant="outline-warning" type="button" size="lg" onClick={()=>setCategory(mapcategory)}>{mapcategory}</Button>
                    </li>
                  ))
                
                }
                <li className='d-grid gap-2'>
                  <Button variant="warning" size="lg" onClick={()=>setCategory("All")}>Quitar</Button>
                </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={9} md={10}>
              <div id="contenedorcartas" className='m-2 p-2 border border-warning rounded'>
                
                <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
                  {newmenu.map(plato=> (
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




