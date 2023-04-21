import ProductContext from "./ProductContext"
import { useReducer } from "react"
import productReducer from "./ProductReducer"
import axiosClient from "../../config/axiosClient"

const ProductProvider=({children})=>{

    const initialState={
        products:[],
        product:[{
            id:"",
            name:"",
            SKU:"",
            description:"",
            price:"",
            stock:"",
            detail:"",
            cat:"",
        }]
    }

    const [productState, dispatch]=useReducer(productReducer,initialState)

    const getProducts=async()=>{
        try{
            const products=await axiosClient.get("/products")
            dispatch(
                {
                    type:"GET_PRODUCTS",
                    payload: products.data.info
                })
        }catch(error){
            console.log(error)
        }
    }
    
    const getProduct = async(id)=>{
        try{
            const product = await axiosClient(`/products/${id}`)
            const productInfo=product.data.info;
            dispatch({
                type:"GET_PRODUCT",
                payload:productInfo
            })
        }catch(error){
            console.log(error)
        }
    }

    return (
        <ProductContext.Provider value={{getProducts, products:productState.products, getProduct, product:productState.product}}>{children}</ProductContext.Provider>
    )
}
export default ProductProvider;