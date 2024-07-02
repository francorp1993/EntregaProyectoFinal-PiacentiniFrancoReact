import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {

    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);
    const {register, handleSubmit} = useForm();
    let [docId, setDocId] = useState("");

    const comprar =(data)=>{
        const pedido ={
            cliente: data,
            productos: carrito,
            total: totalCarrito(),
            fecha: Timestamp.now()
        }
        const pedidosRef = collection(db, "pedidos")

        addDoc(pedidosRef, pedido)
            .then ((doc)=>setDocId(doc.id))
            vaciarCarrito();
    }

    if (docId){
        return (
            <>
                <h1>¡Pedido confirmado! Gracias por confiar en Nombre.</h1>
                <p>Para hacer el seguimiento de tu pedidd el identificador es el siguiente: {docId}</p>
            </>

        )
    }



    return (
        <div>
            <form onSubmit={handleSubmit(comprar)}>
                <input type="text"  placeholder='Ingrese su nombre'{...register("nombre")}/>
                <input type="text"  placeholder='Ingrese su apellido'{...register("apellido")}/>
                <input type="email" placeholder='Ingrese su e-mail'{...register("email")}/>
                <input type="tel" placeholder='Ingrese su teléfono'{...register("teléfono")}/>
                <button type='submit'>Comprar</button>
            </form>

        </div>
    )
}

export default Checkout
