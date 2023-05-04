import React from 'react'
import productContext from "../../context/Product/ProductContext"
import { useState, useContext,useEffect } from 'react'
import Tarjeta from "../../components/Tarjeta"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';

const Menu = () => {
    const {products, getProducts}=useContext(productContext);
    //se crea el newmenu que es el menu filtrado
    const [newmenu , setNewmenu] = useState(products);
    //se crea la categoria que se va a filtrar
    const [category, setCategory] = useState("All");

    //se obtienen los productos utilizando use effect y funcion getProducts asincrona
    useEffect(()=>{
        const fetchProducts=async()=>{
            await getProducts();
        }
        fetchProducts()
        
    },[])
    
    // se le da el valor inicial al newmenu esperando que products cambie y se actualice
    useEffect(() => {
      const setmenu = () => {
        setNewmenu(products);
      }
      setmenu();
    }, [products]);
  
    //se crea la lista de categorias unicas
    const categories = products.map((product) => product.cat);
    const uniqueCategories = [...new Set(categories)];


    //se crea la funcion que filtra los productos
    useEffect(() => {
      const aplicatefilter = (products,category) => {
        
        if(category==="All"){
          return products;
        }else{
          return products.filter((product)=>product.cat===category);
        }
      }
      setNewmenu(aplicatefilter(products,category));
      console.log(newmenu);
    }, [category, newmenu]);


  return (
  <>
        {/* SECCION DE ESTILOS */}
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
      
          {/* SECCION DE FILTROS */}
      <Col xs={12} sm={3} md={2}>
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
        </Row>
      </Col>

          {/* SECCION DE CARTAS */}
      <Col xs={12} sm={9} md={10}>
        <div id="contenedorcartas" className='m-2 p-2 border border-warning rounded'>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
            {newmenu.map(plato=>(
              <Tarjeta plato={plato}/>
            ))}
          </Row>
        </div>
      </Col>
      
    </Row>
  </div>
  </>
  )
}

export default Menu