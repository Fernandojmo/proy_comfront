// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import UserContext from '../../context/User/UserContext';
import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  // const name = "Login"
  const {verifyToken, infoUser, authStatus, logOut} = useContext(UserContext);
  
  useEffect(() => {
    verifyToken();
    
  }, [])
  // console.log(infoUser)
 const name = infoUser.email;


  return (
    <div>
        {/* <NavLink to='/inicio'>Inicio</NavLink>
        <NavLink to='/menu'>Menu</NavLink>
        <NavLink to='/reservas'>Reservas</NavLink>
        <NavLink to='/nosotros'>Nosotros</NavLink>
        <NavLink to='/contactanos'>Contactanos</NavLink> */}

              <>
                {/* {['sm'].map((expand) => ( */}
                  <Navbar key='sm' bg="warning" expand='sm'>
                    <Container fluid>
                      <Navbar.Brand as={NavLink} to="/" className='h1'>La bodega cervecera</Navbar.Brand>
                      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                      <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                      >
                        <Offcanvas.Header className='bg-warning h1' closeButton>
                          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                            La bodega cervecera
                          </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          <Nav className="justify-content-start flex-grow-1 pe-3">
                            <Nav.Link as={NavLink} to='/' className='text-white bg-dark border-dark rounded m-1 p-2'>Inicio</Nav.Link>
                            {/* <Nav.Link href='/cartadisp' className='text-white bg-dark border-dark rounded m-1 p-2'>cartadisp</Nav.Link> */}
                            

                            {/* <Nav.Link href='/reservas'>Reservas</Nav.Link>
                            <Nav.Link href='/nosotros'>Nosotros</Nav.Link>
                            <Nav.Link href='/contactanos'>Contactanos</Nav.Link> */}
                            <Nav.Link as={NavLink} to='/reservas' className='text-white bg-dark border-dark rounded m-1 p-2'>Reservas</Nav.Link>
                            {/* <Nav.Link href='/product' className='text-white bg-dark border-dark rounded m-1 p-2'>Product</Nav.Link> */}
                            <Nav.Link as={NavLink} to='/menu' className='text-white bg-dark border-dark rounded m-1 p-2'>menu</Nav.Link>
                            <Nav.Link as={NavLink} to='/checkout' className='text-white bg-dark border-dark rounded m-1 p-2'>Check Out</Nav.Link>
                            {!authStatus && <Nav.Link as={NavLink} to='/login' className='text-white bg-dark border-dark rounded m-1 p-2'>Login</Nav.Link>}
                           
                           {authStatus &&
                            <NavDropdown
                              title={name}
                              id={`offcanvasNavbarDropdown-expand-sm`}
                            >
                              <NavDropdown.Item as={NavLink} to="/profile">Perfil</NavDropdown.Item>
                              <NavDropdown.Item onClick={logOut}>Log out</NavDropdown.Item>
                            </NavDropdown>}
                          </Nav>
                          {/* <Form className="d-flex">
                            <Form.Control
                              type="search"
                              placeholder="Search"
                              className="me-2"
                              aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                          </Form> */}
                        </Offcanvas.Body>
                      </Navbar.Offcanvas>
                    </Container>
                  </Navbar>
                {/* ))} */}
              </>
    </div>
  )
}

export default Navigation