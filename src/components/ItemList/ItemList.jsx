import React from 'react'
import './ItemList.css'
import Item from '../Item/Item';


const ItemList = ({ productos }) => {


  console.log( "productos qui", productos)
  return (
    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
       
      <div className='row'>
        {productos.map(prod => <Item key={prod.id} {...prod} />)}
      </div>
  
    </div>
  )
}

export default ItemList