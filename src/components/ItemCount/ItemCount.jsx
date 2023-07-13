import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className='container-contador'>
                  <RemoveIcon onClick={decrementar} className='icon-remove'/>
                  <span className='span-cantidad'>{contador}</span>
                  <AddIcon onClick={incrementar} disabled={contador === stock} className='icon-add'/>
            </div>

            <div className="container-btn">
                    <Button onClick={() => funcionAgregar(contador)} className="card-btn-individual" variant="secondary">Agregar al carrito</Button>
            </div>
        </>
    )
}



export default ItemCount