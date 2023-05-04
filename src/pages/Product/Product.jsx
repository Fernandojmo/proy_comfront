
import ProductContext from "../../context/Product/ProductContext";
import { Fragment, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CartContext from "../../context/Cart/CartContext";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import Button from 'react-bootstrap/Button';


const Product = () => {
  const { id } = useParams();

  const { getProduct, product } = useContext(ProductContext);
  const { addItemToCart, cartCount } = useContext(CartContext)

 

  const handleAdd = () => { 
    if(cartCount <= stock){
      console.log(cartCount)
      console.log(product[0])
      addItemToCart(product[0])
    }else{
      console.log("error al agregar producto, stock insuficiente")
    }
  }

  const { name, stock, price, image, SKU, description,detail ,cat } = product[0];

  useEffect(() => {
    const fetchProduct = async () => {
      await getProduct(id);
    };
    fetchProduct();
  }, []);

   console.log(product[0])
    return (
      <>
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
                    <p className="text-muted mb-4">{detail}</p>
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
                  <Link to={`/menu`}><Button className="mb-4 px-5 m-2 p-2" type="button"  variant="warning">Atras</Button></Link>
                    <Button className="mb-4 px-5 m-2 p-2" type="button"  onClick={handleAdd} variant="warning">Comprar</Button>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer></>
    )
    }
    export default Product;