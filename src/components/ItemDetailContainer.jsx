import React, { useEffect, useState } from 'react';
import productos from '../data/productos.json';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);



    useEffect(() => {


        setProducto(productos.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId]);

    return (
        <div>
            {producto ? <ItemDetail producto={producto} /> : "...Cargando"}
        </div>
    );
}

export default ItemDetailContainer;
