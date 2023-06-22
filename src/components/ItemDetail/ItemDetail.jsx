import React from 'react'
import "./ItemDetail.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({id, name, price, desc, img, pack}) => {

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

  const stock = 10; //Hardcodeado por ahora

  const [cantidad, setCantidad] = useState(1);


  const addCantidad = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };
  
  const removeCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };


  const navigateTohome = () => {
    navigate(-1, { replace: true });
  }

  return (
    <div className='col-lg-6 col-md-6 col-sm-8 col-xs-12 col-top'>
        <Card className="card-box-individual">
            <Card.Img variant="top" className='card-img-individual' src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${formatMoney(price)}</Card.Subtitle>
                <Card.Text>
                  {desc}
                </Card.Text>

                
                <div className='container-contador'>
                  <RemoveIcon onClick={removeCantidad} className='icon-remove'/>
                  <span className='span-cantidad'>{cantidad}</span>
                  <AddIcon onClick={addCantidad} disabled={cantidad === stock} className='icon-add'/>
                </div>

                <div className="container-btn">
                    <Button onClick={() => navigateToItemDetail(id)} className="card-btn-individual" variant="secondary">Agregar al carrito</Button>
                    <Button style={{ marginTop: '10px' }} className="card-btn-individual" variant="primary">Comprar ahora</Button>

                    <Button style={{ marginTop: '20px' }} onClick={() => navigateTohome()} className="regresar" variant="primary">Regresar</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ItemDetail