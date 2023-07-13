import React from 'react'
import "./ItemDetail.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'

const ItemDetail = ({id, nombre, precio, desc, img, stock}) => {

  const navigate = useNavigate();

  const formatMoney = (amount, decimalCount = 2, decimal = ',', thousands = '.') => {
    try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? '-' : '';
    const i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    const j = i.length > 3 ? i.length % 3 : 0;
    return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands)
    );
    } catch (e) {}
  }


  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio, img};
    agregarProducto(item, cantidad);
  }



  const navigateTohome = () => {
    navigate(-1, { replace: true });
  }

  return (
    <div className='col-lg-6 col-md-6 col-sm-8 col-xs-12 col-top'>
        <Card className="card-box-individual">
            <Card.Img variant="top" className='card-img-individual' src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${formatMoney(precio)}</Card.Subtitle>
                <Card.Text>
                  {desc}
                </Card.Text>

                
                <div className="container-btn">
                  {
                    agregarCantidad > 0 ? (
                    <Link to="/cart">
                      <Button style={{ marginTop: '10px' }} className="card-btn-individual" variant="primary">Comprar ahora</Button>
                    </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
                  }

                    <Button style={{ marginTop: '20px' }} onClick={() => navigateTohome()} className="regresar-btn" variant="primary">Regresar</Button>
                </div>

            </Card.Body>
        </Card>
    </div>
  )
}

export default ItemDetail