import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';

const Checkout = () => {

    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);
    const {register, handleSubmit} = useForm();

    const comprar =(data)=>{
        console.log (data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(comprar)}>
                <input type="text"  placeholder='Ingrese su nombre'{...register("")}/>
                <input type="email" placeholder='Ingrese su e-mail'{...register("email")}/>
                <button type='submit'>Comprar</button>
            </form>

        </div>
    )
}

export default Checkout
