import {useReducer} from 'react';
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';
import axiosClient from '../../config/axiosClient';

const ProductProvider = ({children}) => {

    const initialState = {
        products:[],
        product:{
            id:"",
            name:"",
            SKU:"",
            description:"",
            price:"",
            image:"",
            stock:""

        },
    }
    
    const [productState, dispatch] = useReducer(ProductReducer,{initialState})
    
    const getProducts = async()=>{
        try {
            const products = await axiosClient.get("/products");
            dispatch({
                type: "GET_PRODUCTS",
                payload: products.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getProduct = async(id)=>{
        try {
            const product = await axiosClient.get(`/products/${id}`);
            dispatch({
                type: "GET_PRODUCT",
                payload: product.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    const addProduct = async(product)=>{
        try {
            const newProduct = await axiosClient.post("/products",product);
            dispatch({
                type: "ADD_PRODUCT",
                payload: newProduct.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    const updateProduct = async(product)=>{
        try {
            const updatedProduct = await axiosClient.put(`/admin/products/${product._id}`,product);
            dispatch({
                type: "UPDATE_PRODUCT",
                payload: updatedProduct.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    const deleteProduct = async(id)=>{
        try {
            const deletedProduct = await axiosClient.delete(`/admin/product/${id}`);
            dispatch({
                type: "DELETE_PRODUCT",
                payload: deletedProduct.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <ProductContext.Provider value={{
            products: productState.products,
            product: productState.product,
            loading: productState.loading,
            getProducts,
            getProduct,
            addProduct,
            updateProduct,
            deleteProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}