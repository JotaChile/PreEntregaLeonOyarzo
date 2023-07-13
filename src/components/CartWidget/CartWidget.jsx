import React from 'react'
import './CartWidget.css'
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const {cantidadTotal} = useContext(CarritoContext);

  return (
    <div className='icon-shop'>
      <Link to="/cart">
        <ShoppingCart />
          {
            cantidadTotal > 0 && <div className='count-cart'> {cantidadTotal} </div>
          }

      </Link>
    </div>
  )
}

export default CartWidget