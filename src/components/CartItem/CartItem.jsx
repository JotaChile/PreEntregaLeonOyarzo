import React from 'react';
import "./CartItem.css"
import { useContext } from "react";
import { CarritoContext } from '../../context/CarritoContext';
import Card from 'react-bootstrap/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

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

  return (
      <div className='col-lg-2 col-md-2 col-sm-2 col-xs-12 col-top'>
          <Card className="card-item">
            <DeleteIcon data-tooltip-id="delete-tool" data-tooltip-content="Eliminar producto" onClick={() => eliminarProducto(item.id)} className='delete-icon'></DeleteIcon>
            <Tooltip id="delete-tool" />
            <Card.Img variant="top" className='card-img-individual' src={item.img} />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${formatMoney(item.precio)}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Cantidad: {cantidad}</Card.Subtitle>
            </Card.Body>
          </Card>
      </div>
  )
}

export default CartItem