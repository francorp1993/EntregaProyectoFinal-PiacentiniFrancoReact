import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

export const ItemListContenedor = () => {
    const { categoryId } = useParams();
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    let [titulo,setTitulo] = useState('Productos')


    useEffect(() => {

        const productosRef = collection(db, "productos");
        const categoriasRef = collection (db, "categorias");

        const q = categoryId ? query(productosRef, where("categoria.id", "==", categoryId)) : productosRef;
        const categoriasQ = categoryId && query(categoriasRef,  where ("id", "==", categoryId));

        getDocs(q)
            .then ((res) => {
                setProductosFiltrados (
                    res.docs.map((doc)=>{
                    return ({...doc.data(), id: doc.id});
                })
                )
                })

                if (categoriasQ){
                getDocs(categoriasQ)
                    .then ((res)=>{
                        setTitulo(res.docs[0].data().nombre);
                    })
                    }else{
                        setTitulo("Nuestros Productos");
                    }
    }, [categoryId]);

    return (
        
        <div className="item-list-contenedor">
            <h1 className='titulo'>{titulo}</h1>
            <ItemList productos={productosFiltrados} />
        </div>
    );
};







