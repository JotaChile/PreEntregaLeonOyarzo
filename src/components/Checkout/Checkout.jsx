import { useState, useContext } from "react";
import {CarritoContext} from '../../context/CarritoContext';
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css"

const Checkout = () => {
    const {carrito, vaciarCarrito, cantidadTotal} = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrdenId] = useState("");

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


    const manejadorFormulario = (e) => {
        e.preventDefault();

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map( producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: cantidadTotal,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        };

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, intentelo más tarde");
            })
    }

  return (
    <div className="row">

        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 centerdiv'>

            {
                orderId && (
                    <strong>¡Gracias por tu compra! <br></br><br></br>Tu número de orden es {orderId} </strong>
                )
            }
            
        </div>

        {
            !orderId && (

                <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12'>

                    <div className="checkout">
        
                        {carrito.map(producto => (
                                    <div>
                                        <div>
                                            {producto.item.nombre} <span className="cantidadspan">Cantidad: {producto.cantidad}</span>
                                        </div>
                                        <div>Precio ${formatMoney(producto.item.precio)} </div>
                                        <hr />
                                    </div>
                                ))
                        }
        
        
                    </div>
        
                </div>
        
            )
        }

{
            !orderId && (

                <div className='col-lg-9 col-md-9 col-sm-9 col-xs-12'>
        
                    <div className="container">
        
                            <h2>Finaliza tu compra, deja tus datos</h2>
        
                            <form onSubmit={manejadorFormulario}>
        
                                    <div>
                                        <label htmlFor="nombre"> Nombre </label>
                                        <input type="text" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                                    </div>
        
                                    <div>
                                        <label htmlFor=""> Apellido </label>
                                        <input type="text" id="apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
                                    </div>
        
                                    <div>
                                        <label htmlFor=""> Telefono </label>
                                        <input type="text" id="telefono" value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
                                    </div>
        
                                    <div>
                                        <label htmlFor=""> Email </label>
                                        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                    </div>
        
                                    <div>
                                        <label htmlFor=""> Email Confirmación </label>
                                        <input type="email" id="confirmacionEmail" value={emailConfirmacion} onChange={(e)=>setEmailConfirmacion(e.target.value)} />
                                    </div>
        
                                    {
                                        error && <p style={{color:"red"}}> {error} </p>
                                    }
        
                                    <button type="submit"> Finalizar Compra </button>
                            </form>
        
                    </div>
        
                </div>

            )
        }






    </div>
  )
}

export default Checkout