import React, { useState } from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../../src/assets/logo.png';
import MenuLogo from "@mui/icons-material/Menu";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NavBar = () => {

  const [isListVisible, setIsListVisible] = useState(false);

  const capturarClick = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <header className="headerClass">

      <Row>
        <Col className="primera-columna">
            <nav className='navClass'>

                    <MenuLogo className='menuIcon' onClick={capturarClick}/>


                    {isListVisible && (
                      <ul className='ulclass animate__animated animate__fadeIn'>
                        <li onClick={capturarClick}>Pack inicial</li>
                        <li onClick={capturarClick}>Recargas</li>
                        <li onClick={capturarClick}>Botellones</li>
                      </ul>
                    )}


            </nav>
        </Col>

        <Col className="segunda-columna">
            <img className='logo' src={logo} alt="logo aguasjc" />
        </Col>

        <Col className="tercera-columna">
            <CartWidget/>
        </Col>

      </Row>
    

    </header>
  )
}

export default NavBar