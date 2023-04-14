import React from 'react'
import productContext from "../../context/Product/ProductContext"
import { useContext,useEffect } from 'react'
import Tarjeta from "../../components/Tarjeta"
const Menu = () => {
    const {products, getProducts}=useContext(productContext);

    useEffect(()=>{
        const fetchProducts=async()=>{
            await getProducts();
        }
        fetchProducts()
    },[])
    console.log(products)
  return (
    <Tarjeta menu={products}/>
  )
}

export default Menu