import React, { useEffect, useState } from 'react';
import productos from '../data/productos.json';
import categorias from '../data/categorias.json';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContenedor = () => {
    const { categoryId } = useParams();
    const [productosFiltrados, setProductosFiltrados] = useState([]);

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
                    setProductosFiltrados(resp.filter((prodRecibidos) => prodRecibidos.categoria.id === categoryId));
                } else {
                    setProductosFiltrados(resp);
                }
            })
            .catch((error) => {
                alert.error("Error al obtener los productos:", error);
            });
    }, [categoryId]);

    return (
        <div className="item-list-contenedor">
            <ItemList productos={productosFiltrados} />
        </div>
    );
};


    // useEffect(() => {

    //     pedirProductos()
    //         .then((res) =>{
    //             setProductos(res);
    //             console.log(Productos);
    //         } )
    //             if (!categoriaId) {
    //                 setTitulo("Nuestros Productos");
    //                 setProductos(res);
    //             } else {
    //                 setTitulo(categorias.find((cat) => cat.id === categoriaId).nombre);
    //                 setProductos(res.filter((productos) => productos.categoria.id === categoriaId));
    //             }
    //         },[categoriaId]); 






