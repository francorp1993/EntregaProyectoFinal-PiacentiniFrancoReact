import React, { Fragment } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';



const Cart = () => {

    const { carrito, totalCarrito, vaciarCarrito, eliminarItem } = useContext(CartContext);



    return (
        <div className='carrito-container'>
            {carrito.map((prod, index) => {
                return (
                    <Fragment key={`${prod.id}-${index}`}>
                        <h1 className='data-compra'> {prod.marca} {prod.modelo}: ${prod.precio} </h1>
                        <button className='btn-cancelar-compra' onClick={() => eliminarItem(prod)}>X</button>
                    </Fragment>
                )
            })}
            {
                carrito.length > 0 ?
                    <>
                        <h2 className='h2-total'>Total: ${totalCarrito()}</h2>
                        <button className='btn-vaciar carrito' onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <Link className='btn-compra' to="/finalizar-compra">Finalizar compra</Link>
                    </> :
                    <h1>El carrito está vacío</h1>
            }
        </div>
    )
}

export default Cart
