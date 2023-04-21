import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../../context/User/UserContext';
import Button from 'react-bootstrap/Button';

const Register= () => {

    const {registerUser} = useContext(UserContext);

     const initialValues = {
        firstname: '',
        lastname: '',
        birthday: '',
        email: '',
        password: ''
    }

    const [user, setUser] = useState(initialValues);

    const handleChange = (e) => {
        setUser((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    // console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(user);
        
        setUser(initialValues);   
    }

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Registro</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Crea una cuenta nueva</h5>

                <MDBInput wrapperClass='mb-4' name="firstname" value={user.firstname} onChange={handleChange} label='Nombre' id='formControlLg' type='name' size="lg"/>
                <MDBInput wrapperClass='mb-4' name="lastname" value={user.lastname} onChange={handleChange} label='Apellido' id='formControlLg' type='name' size="lg"/>
                <MDBInput wrapperClass='mb-4' name="birthday" value={user.birthday} onChange={handleChange} label='Fecha de nacimiento' id='formControlLg' type='date' size="lg"/>
                <MDBInput wrapperClass='mb-4' name="email" value={user.email} onChange={handleChange} label='Email' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' name="password" value={user.passwordF} onChange={handleChange} label='Contraseña' id='formControlLg' type='password' size="lg"/>

              <Button variant="warning" className="mb-4 px-5" type="submit" onClick={handleSubmit} color='dark' size='lg'>Registrate</Button>
              {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Ya tienes una cuenta? <a href="/login" style={{color: '#393f81'}}>Ingresa Aqui</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register