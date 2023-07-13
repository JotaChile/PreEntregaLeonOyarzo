import React from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

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


  if (cantidadTotal === 0) {
    return (
        <>
            <div className='greetinsClass'>

              <Alert variant="warning">
                <Alert.Heading>No hay productos en el carrito</Alert.Heading>
              </Alert>

              <Link to="/"> Ver Productos </Link>

            </div>
        </>
    )
  }

  return (

    
    <div className='margin-div'>

      <div className='row'>
        {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
      </div>


      <br></br>

      <h3>Total: $ {formatMoney(total)} </h3>
      <h3> Cantidad Total : {cantidadTotal}  </h3>

      <div className='firstdiv'>
        <button className='btn-end' onClick={() => vaciarCarrito()} > Vaciar Carrito </button>
      </div>

      <div>
        <button className='div-vaciar'>
            <Link className='linklabel' to="/checkout"> Finalizar Compra </Link>
        </button>
      </div>
    </div>
  )
}

export default Cart