import { createContext, useState } from "react";



export const CartContext = createContext();

export const CartProvider = ({children}) => {


    const [carrito, setCarrito] = useState([]);


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


    return(
    <CartContext.Provider value={{ carrito, cantidadCarrito, agregarAlCarrito, totalCarrito, vaciarCarrito}}>
        {children}
    </CartContext.Provider>

    )
}