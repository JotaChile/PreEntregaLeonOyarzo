import React, { useState } from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../../src/assets/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate, Outlet  } from 'react-router-dom';

const NavBar = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };


  const navigateToPromociones = () => {
    navigate(`/category/${1}`);
  };

  const navigateToBL = () => {
    navigate(`/bases-legales/`);
  };



  return (
    <header className="headerClass">

      <Row>
        <Col className="primera-columna">
            <nav className='navClass'>


                  <NavDropdown className='menu-icon' id="nav-dropdown-dark-example" title="Menu" menuVariant="light">
                    
                                <NavDropdown.Item onClick={navigateToHome}>Inicio</NavDropdown.Item>
                                <NavDropdown.Item onClick={navigateToPromociones}>Promociones</NavDropdown.Item>

      

                                <NavDropdown.Divider />

                                <NavDropdown.Item onClick={navigateToBL}>
                                  Bases Legales
                                </NavDropdown.Item>
                  </NavDropdown>


            </nav>
        </Col>

        <Col className="segunda-columna">
            <img  onClick={navigateToHome} className='logo' src={logo} alt="logo aguasjc" />
        </Col>

        <Col className="tercera-columna">
            <CartWidget/>
        </Col>

      </Row>
    

    </header>
  )
}

export default NavBar