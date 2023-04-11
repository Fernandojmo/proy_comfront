import ProductContext from "../../context/Product/ProductContext";
import { useContext, useEffect } from "react";

const Products = () => {
    const productContext = useContext(ProductContext);
    const { products, getProducts } = productContext;
    
    // useEffect(() => {
    //     const getProducts = async () => {
    //         const products = await axiosClient.get("/products");
            
    //         getProducts();
    // }, []);
    
    return (
        <div>
        <h1>Products</h1>
        <ul>
            {products.map((product) => (
            <li key={product._id}>{product.name}</li>
            ))}
        </ul>
        </div>
    );
    };
    export default Products;