import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock';
import { getPromociones } from '../../asyncmock';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greetings}) => {

  const [showDiv, setShowDiv] = useState(false);
  const { id } = useParams();
  const categoryId = parseInt(id);


  const [products, setProducts] = useState([]);

  useEffect(()=>{

    setShowDiv(false)

    if (categoryId == 1) {

      setTimeout(() => {
        setShowDiv(true);
      },2000)

      getPromociones()
      .then(res => setProducts(res))

    } else{

      setTimeout(() => {
        setShowDiv(true);
      },2000)

      getProducts()
      .then(res => setProducts(res))
    }

  }, [categoryId])

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


      {!showDiv && (
        <div className='center-div'>
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {showDiv && (

          <div className='row'>
            <div className='col-lg-9 col-md-9 col-sm-9 col-xs-9' style={divStyle}>
                <ItemList products={products}/>
            </div>
          </div>

      )}



    </div>
  )
}

export default ItemListContainer