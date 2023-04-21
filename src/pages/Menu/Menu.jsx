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

    const categories = products.map((product) => product.cat);
    const uniqueCategories = [...new Set(categories)];
    console.log(uniqueCategories);

  return (
    <><Tarjeta menu={products} uniqueCategories={uniqueCategories}/></>
  )
}

export default Menu