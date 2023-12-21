import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <>
      <div>

        <Navbar expand="lg" className="fixed-top" style={{ height: '95px', backgroundColor: 'white' }}>
          <Container fluid>
            <Navbar.Brand>
              <img className='ms-5' height='250px' width='140px' src="https://assets.ajio.com/static/img/Ajio-Logo.svg" alt="no image" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="w-100 justify-content-center mt-5 mx-auto ms-5" style={{ maxHeight: '100px' }}>
                <Nav.Link className="nav-link ms-2">MEN</Nav.Link>
                <Nav.Link className="nav-link ms-2">WOMEN</Nav.Link>
                <Nav.Link className="nav-link ms-2">KIDS</Nav.Link>
                <Nav.Link className="nav-link ms-2">HOME AND KITCHEN</Nav.Link>
              </Nav>
              <Form className="d-flex ms-auto w-50 me-5 search  mt-5">
                <Form.Control style={{ borderRadius: '20px', backgroundColor: '#fffded' }}
                  type="search"
                  placeholder="Search AJIO"
                  className="me-2 border border-dark"
                  aria-label="Search" />
                <i className="fas fa-search text-dark"></i>
              </Form>
              <div className='mt-5 me-3 rounded-circle bg-light '>
                <img src="https://assets.ajio.com/static/img/wishlistIcon.svg" alt="" />
              </div>
              <div className='mt-5 me-5 rounded-circle  p-3 d-flex justify-content-center align-items-center' style={{ borderRadius: "200%", height: '30px', width: '30px', backgroundColor: "#2c4152" }}>
                <i class="fa-solid fa-bag-shopping" style={{ color: '#ffffff' }}></i>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
