import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import {collection, query, getDocs, where} from 'firebase/firestore'
import { db } from '../../services/config'

const ItemListContainer = ({greetings}) => {


  const { idCategoria } = useParams();
  const [productos, setProductos] = useState([])

  if(idCategoria == "2"){
    greetings = "Pack y promociones"
  }

  if(idCategoria == "3"){
    greetings = "Envases y recargas"
  }


  useEffect( () => {
    const misProductos = idCategoria ? query(collection(db, "inventario"),where("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(misProductos)
        .then( res => {
            const nuevosProductos = res.docs.map( doc => {
                const data = doc.data();
                return {id: doc.id, ...data}
            })
            setProductos(nuevosProductos);
        })
        .catch(error => console.log("error", error))
}, [idCategoria])


  const divStyle = {
    margin: '0 auto'
  };
    
  return (
    <div>

      <div className='greetinsClass'>

        <Alert variant="success">
          <Alert.Heading>{greetings}</Alert.Heading>
        </Alert>

      </div>




      <div className='row'>
        <div className='col-lg-9 col-md-9 col-sm-9 col-xs-9' style={divStyle}>
            <ItemList productos={productos}/>
        </div>
      </div>




    </div>
  )
}

export default ItemListContainer