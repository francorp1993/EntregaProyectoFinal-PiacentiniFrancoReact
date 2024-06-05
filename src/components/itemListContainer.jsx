import React, { useEffect } from 'react';
import amps from "../data/amps.json";
import categorias from "../data/categorias.json"




export const ItemListContainer = () => {

    let { categoriaId } = useParams();
    let [amplificadores, setAmplificadores] = useState([]);

    let [titulo, setTitulo] = useState("Nuestros Amplificadores");

    const pedirAmps = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(amps);
            }, 1000);
        })
    }


    useEffect(() => {

        pedirAmps()
            .then((res) => {
                if (!categoriaId) {
                    setTitulo("Nuestros Amplificadores");
                    setAmplificadores(res);
                } else {
                    setTitulo(categorias.find((cat) => cat.id === categoriaId).nombre);
                    setAmplificadores(res.filter((amp) => amp.categoria.id === categoriaId));
                }
            })

    }, [categoriaId]);



    return (
        <div className="item-list-container">
            <h1>{titulo}</h1>
            <ItemList amplificadores={amplificadores} />
        </div>
    )
}


