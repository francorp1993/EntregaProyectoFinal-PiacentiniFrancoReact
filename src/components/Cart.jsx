import React, { Fragment } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';



const Cart = () => {

    const { carrito, totalCarrito, vaciarCarrito, eliminarItem } = useContext(CartContext);



    return (
        <div>
            {carrito.map((prod, index) => {
                return (
                    <Fragment key={`${prod.id}-${index}`}>
                        <h1> {prod.marca} {prod.modelo}: ${prod.precio} </h1>
                        <button onClick={() => eliminarItem(prod)}>X</button>
                    </Fragment>
                )
            })}
            {
                carrito.length > 0 ?
                    <>
                        <h2>Total: ${totalCarrito()}</h2>
                        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <Link className='btn-compra' to="/finalizar-compra">Finalizar compra</Link>
                    </> :
                    <h1>El carrito está vacío</h1>
            }
        </div>
    )
}

export default Cart
