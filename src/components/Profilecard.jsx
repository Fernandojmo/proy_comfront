import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

const Profilecard = (userProfile) => {
  return (<section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol lg="6" className="mb-4 mb-lg-0">
        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
          <MDBRow className="g-0">
            <MDBCol md="4" className="gradient-custom text-center text-white"
              style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
              <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
              <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
              <MDBCardText>Web Designer</MDBCardText>
              <MDBIcon far icon="edit mb-5" />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody className="p-4">
                <MDBTypography tag="h6">Information</MDBTypography>
                <hr className="mt-0 mb-4" />
                <MDBRow className="pt-1">
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Nombre</MDBTypography>
                    <MDBCardText className="text-muted">{userProfile.userProfile.firstname}</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Apellido</MDBTypography>
                    <MDBCardText className="text-muted">{userProfile.userProfile.lastname}</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Email</MDBTypography>
                    <MDBCardText className="text-muted">{userProfile.userProfile.email}</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Phone</MDBTypography>
                    <MDBCardText className="text-muted">+56958744512</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <MDBTypography tag="h6">Dirección de envío</MDBTypography>
                <hr className="mt-0 mb-4" />
                <MDBRow className="pt-1">
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Dirección</MDBTypography>
                    <MDBCardText className="text-muted">av. colon 123</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Comuna</MDBTypography>
                    <MDBCardText className="text-muted">Las Condes</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Ciudad</MDBTypography>
                    <MDBCardText className="text-muted">Santiago</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Región</MDBTypography>
                    <MDBCardText className="text-muted">Metropolitana</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <MDBBtn className="mb-4 px-5" type="submit" color='dark' size='lg'>Editar</MDBBtn>

                <div className="d-flex justify-content-start">
                  <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                  <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                  <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
  )
}

export default Profilecard