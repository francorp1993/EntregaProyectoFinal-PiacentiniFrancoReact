import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {

    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: totalCarrito(),
            fecha: Timestamp.now()
        }
        const pedidosRef = collection(db, "pedidos")

        addDoc(pedidosRef, pedido)
            .then((doc) => setDocId(doc.id))
        vaciarCarrito();
    }

    if (docId) {
        return (
            <>
                <h1 className='pedido'>¡Pedido confirmado! Gracias por confiar en Nombre.</h1>
                <div className='msj-pedido'>
                    <p className='msj-id'>Para hacer el seguimiento de tu pedido el identificador es el siguiente: </p>
                    <p className='id-pedido'>{docId}</p>
                </div>
            </>

        )
    }



    return (
        <div>
            <form className='form-compra' onSubmit={handleSubmit(comprar)}>
                <input className='form-input' type="text" placeholder='Ingrese su nombre'{...register("nombre")} />
                <input className='form-input' type="text" placeholder='Ingrese su apellido'{...register("apellido")} />
                <input className='form-input' type="email" placeholder='Ingrese su e-mail'{...register("email")} />
                <input className='form-input' type="tel" placeholder='Ingrese su teléfono'{...register("teléfono")} />
                <button className='form-btn' type='submit'>Comprar</button>
            </form>

        </div>
    )
}

export default Checkout
