import React from 'react'
import './CartWidget.css'
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div className='icon-shop'>
      <ShoppingCart />
      <div className='count-cart'>3</div>
    </div>
  )
}

export default CartWidget