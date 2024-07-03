import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import cartImage from '/public/img/cart_106649.png';

const CartWidget = ({}) => {

    const { cantidadCarrito } = useContext(CartContext);

    return (
        <Link className='carrito' to = "/cart">
            <div className='carrito-div'>
                <img src={cartImage} alt="imagen de carrito" className='carrito-img' />{cantidadCarrito()}
            </div>
        </Link>

    )
}

export default CartWidget
