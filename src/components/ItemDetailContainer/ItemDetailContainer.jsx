import React from 'react'
import "./ItemDetailContainer.css"
import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {

  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDiv(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const { id } = useParams();
  const itemId = parseInt(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {

    getProduct(itemId)
      .then(res => setProduct(res))

  })

  const divStyle = {
    margin: '0 auto'
  };

  return (
    <div>



            {!showDiv && (
              <div className='center-div'>
                <Spinner animation="border" variant="primary" />
              </div>
            )}

            {showDiv && (

                <div className='row'>
                  <div className='col-lg-9 col-md-9 col-sm-9 col-xs-9' style={divStyle}>
                    <ItemDetail {...product}/>
                  </div>
                </div>

            )}




    </div>
  )
}

export default ItemDetailContainer