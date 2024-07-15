import React, { Fragment, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { carrito, totalCarrito, vaciarCarrito, eliminarItem, productosEnCarrito } = useContext(CartContext);

    const productosCarrito = productosEnCarrito(carrito);

    return (
        <div className='carrito-container'>
            {productosCarrito.map((item, index) => (
                <Fragment key={`${item.producto.id}-${index}`}>
                    <h1 className='data-compra'> 
                        {item.producto.marca} {item.producto.modelo}: ${item.producto.precio} x{item.cantidad} 
                    </h1>
                    <button className='btn-cancelar-compra' onClick={() => eliminarItem(item.producto)}>X</button>
                </Fragment>
            ))}
            {carrito.length > 0 ? (
                <>
                    <h2 className='h2-total'>Total: ${totalCarrito()}</h2>
                    <button className='btn-vaciar carrito' onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <Link className='btn-compra' to="/finalizar-compra">Finalizar compra</Link>
                </>
            ) : (
                <h1 className='carrito-default'>El carrito está vacío</h1>
            )}
        </div>
    );
};

export default Cart;
