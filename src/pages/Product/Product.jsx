
import ProductContext from "../../context/Product/ProductContext";
import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import CartContext from "../../context/cart/CartContext";
import Productpage from "../../components/Productpage";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
const Product = () => {
  const { id } = useParams();

  const { getProduct, product } = useContext(ProductContext);
//   const { addItemToCart, cartCount } = useContext(CartContext)

//   const handleAdd = () => { if(cartCount < stock) addItemToCart(product[0])}

  const { name, stock, price, image, SKU, description } = product[0];

  useEffect(() => {
    const fetchProduct = async () => {
      await getProduct(id);
    };
    fetchProduct();
  }, []);

   console.log(name)
    return (
      <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="10">
          <MDBCard className="text-black">
            
            <MDBIcon fabicon="apple" size="lg" className="px-3 pt-3 pb-2" />
            <MDBRow className="justify-content-center">
              <MDBCol md="6">
                <MDBCardImage
                  src={image}
                  position="top"
                  alt={image}
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody>
                  <div className="text-center">
                    <MDBCardTitle>{name}</MDBCardTitle>
                    <p className="text-muted mb-4">{description}</p>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Precio:</span>
                    <span>$ {price} CLP</span>
                  </div>
                  <div>
                    <div className="d-flex justify-content-end mt-2">
                      <span>Stock: </span>
                      <span>{stock} Un</span>
                    </div>
                    <div className="d-flex justify-content-end mt-2">
                      <span>SKU:</span>
                      <span>{SKU}</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    
                    

                    <MDBBtn className="mb-4 px-5" type="submit"  onClick="{handleSubmit}" color='dark' size='lg'>Agregar al carrito</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
    }
    export default Product;