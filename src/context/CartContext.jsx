import { set } from "firebase/database";
import { createContext, useState, useEffect } from "react";


const carritoInicial = JSON.parse(localStorage.getItem('carrito')) || [];


export const CartContext = createContext();

export const CartProvider = ({ children }) => {


    const [carrito, setCarrito] = useState(carritoInicial);



    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    }

    const cantidadCarrito = () => {
        return carrito.length
    }

    const totalCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const eliminarItem = (producto) => {

        const itemEncontrado = carrito.find(prod => prod.id === producto.id);
        const indice = carrito.indexOf(itemEncontrado)

        const nuevoCarrito = [...carrito];
        nuevoCarrito.splice(indice, 1);
        setCarrito(nuevoCarrito);
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);



    return (
        <CartContext.Provider value={{ carrito, setCarrito, cantidadCarrito, agregarAlCarrito, totalCarrito, vaciarCarrito, eliminarItem }}>
            {children}
        </CartContext.Provider>

    )
}