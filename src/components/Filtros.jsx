// import React from 'react'
// import Row from 'react-bootstrap/esm/Row'
// import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button';
// import { useState, useContext,useEffect } from 'react'

// const Filtros = ({uniqueCategories}) => {
//     const [category, setCategory] = useState("All");
//     console.log(category);
//   return (
    
//     <>
//     <style type="text/css">
//         {`
//           #filtros{
//             padding: 0.5rem;
//             min-width: 20%; 
//             background-color: yellow;
//             min-width: 8rem;
//           }
//           #filtros>ul{
//             list-style-type: none;
//             margin: 0;
//             padding: 0;
            
//           }
//           #filtros>ul>li{
//             font-size:1rem;
//             padding:0.25rem;
//           }
//           #filtros>ul>li>Button{
//             font-size:1rem;
//             padding:0.25rem;
//           }              
//         `}
//         </style>
//     <Row>
//         <Col xs={12} sm={3} md={2}>
//               <div id="filtros" fluid="xs" className='m-2 bg-light border border-warning rounded p-3'>
//                 <h5 className=''>Filtra Aqui:</h5>
//                 <ul>
//                 {
//                   uniqueCategories.map(mapcategory=>(
//                     <li key={mapcategory} className='d-grid gap-2'>
//                       <Button variant="outline-warning" type="button" size="lg" onClick={()=>setCategory(mapcategory)}>{mapcategory}</Button>
//                     </li>
//                   ))
                
//                 }
//                 <li className='d-grid gap-2'>
//                   <Button variant="warning" size="lg" onClick={()=>setCategory("All")}>Quitar</Button>
//                 </li>
//                 </ul>
//               </div>
//         </Col>
//     </Row>


//     </>



//   )
// }

// export default Filtros