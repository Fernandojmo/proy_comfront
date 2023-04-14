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
import { navigate, useNavigate } from 'react-router-dom';

const Login= () => {

    const {loginUser, authStatus} = useContext(UserContext);
    const navigate = useNavigate();
     const initialValues = {
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
    console.log(user);

    const handleSubmit = (e) => {
      e.preventDefault();
      loginUser(user);
      
      setUser(initialValues);
      const validatelogin=async()=>{
        try{
          await loginUser(user);
         
          console.log(user)
          const tokenexist= localStorage.getItem("token")
          console.log(tokenexist)
        if(tokenexist){
          navigate("/")
        }
        }catch(error){
          console.log(error)
        }
      }
      validatelogin();
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
                <span className="h1 fw-bold mb-0">Login</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Ingresa a tu cuenta</h5>

                <MDBInput wrapperClass='mb-4' name="email" value={user.email} onChange={handleChange} label='Email' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' name="password" value={user.password} onChange={handleChange} label='Contraseña' id='formControlLg' type='password' size="lg"/>

              <MDBBtn className="mb-4 px-5" type="submit"  onClick={handleSubmit} color='dark' size='lg'>Login</MDBBtn>
              {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>No tienes una cuenta? <a href="/register" style={{color: '#393f81'}}>Registrate Aqui</a></p>

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

export default Login