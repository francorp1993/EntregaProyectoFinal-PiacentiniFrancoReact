import { createContext, useState, useEffect } from "react";

const carritoInicial = JSON.parse(localStorage.getItem('carrito')) || [];

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => [...prevCarrito, producto]);
    };

    const cantidadCarrito = () => {
        return carrito.length;
    };

    const totalCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio, 0).toFixed(2);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const eliminarItem = (producto) => {
        setCarrito((prevCarrito) => {
            const index = prevCarrito.findIndex((item) => item.id === producto.id);
            if (index !== -1) {
                const newCarrito = [...prevCarrito];
                newCarrito.splice(index, 1);
                return newCarrito;
            }
            return prevCarrito;
        });
    };

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, productosEnCarrito, cantidadCarrito, totalCarrito, vaciarCarrito, eliminarItem }}>
            {children}
        </CartContext.Provider>
    );
};

const productosEnCarrito = (carrito) => {
    return carrito.reduce((acc, producto) => {
        const found = acc.find(item => item.producto.id === producto.id);
        if (found) {
            found.cantidad += 1;
        } else {
            acc.push({ producto, cantidad: 1 });
        }
        return acc;
    }, []);
};
