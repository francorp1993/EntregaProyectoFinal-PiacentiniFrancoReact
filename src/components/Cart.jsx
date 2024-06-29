import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);



    return (
        <div>
            {carrito.map((prod, index) => <h1 key={index}> {prod.marca} {prod.modelo}: ${prod.precio}</h1>)}
            {
                carrito.length > 0 ?
                    <>
                        <h2>Total: ${totalCarrito()}</h2>
                        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    </> :
                    <h1>El carrito está vacío</h1> 
                }
        </div>
    )
}

export default Cart
