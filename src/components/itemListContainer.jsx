import React, { useEffect, useState } from 'react';
import productos from '../data/productos.json';
import categorias from '../data/categorias.json';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContenedor = () => {
    const { categoryId } = useParams();
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    let [titulo,setTitulo] = useState('Productos')

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
    };

    useEffect(() => {
        pedirProductos()
            .then((resp) => {
                if (categoryId) {
                    setTitulo(categorias.find((cat) => cat.id === categoryId).nombre);
                    setProductosFiltrados(resp.filter((prodRecibidos) => prodRecibidos.categoria.id === categoryId));
                } else {
                    setTitulo("Nuestros Productos");
                    setProductosFiltrados(resp);
                    
                }
            })
            .catch((error) => {
                alert.error("Error al obtener los productos:", error);
            });
    }, [categoryId]);

    return (
        
        <div className="item-list-contenedor">
            <h1 className='titulo'>{titulo}</h1>
            <ItemList productos={productosFiltrados} />
        </div>
    );
};







