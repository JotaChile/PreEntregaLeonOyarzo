import React from 'react'
import "./ItemDetailContainer.css"
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {getDoc, doc} from "firebase/firestore";
import { db } from '../../services/config';

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect( ()=> {
    const nuevoDoc = doc(db, "inventario", idItem);

    getDoc(nuevoDoc)
        .then(res => {
            const data = res.data();
            const nuevoProducto = {id:res.id, ...data};
            setProducto(nuevoProducto);
        })
        .catch(error => console.log(error))
  }, [idItem])

  const divStyle = {
    margin: '0 auto'
  };

  return (
    <div>


        <div className='row'>
          <div className='col-lg-9 col-md-9 col-sm-9 col-xs-9' style={divStyle}>
            <ItemDetail {...producto}/>
          </div>
        </div>


    </div>
  )
}

export default ItemDetailContainer