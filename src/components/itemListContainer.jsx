import React, { useEffect, useState } from 'react';
import amps from "../data/amps.json";
// import categorias from "../data/categorias.json"
import ItemList from './ItemList';

// let categoriaId

export const ItemListContenedor = () => {


    // let { categoriaId } = useParams();
    let [amplificadores, setAmplificadores] = useState([]);


    // let [titulo, setTitulo] = useState("Nuestros Amplificadores");


    const pedirAmps = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(amps);
            }, 1000);
        })
    }


    useEffect (() => {
        pedirAmps()
            .then ((resp) =>{
                setAmplificadores(resp);
                console.log (amplificadores);
        })
    },[]);


    // useEffect(() => {

    //     pedirAmps()
    //         .then((res) =>{
    //             setAmplificadores(res);
    //             console.log(amplificadores);
    //         } )
    //             if (!categoriaId) {
    //                 setTitulo("Nuestros Amplificadores");
    //                 setAmplificadores(res);
    //             } else {
    //                 setTitulo(categorias.find((cat) => cat.id === categoriaId).nombre);
    //                 setAmplificadores(res.filter((amp) => amp.categoria.id === categoriaId));
    //             }
    //         },[categoriaId]); 



    return (
        <div className="item-list-contenedor">
            {
            // <h1>{titulo}</h1>
            <ItemList amplificadores={amplificadores} />
            }

        </div>
    )
}


