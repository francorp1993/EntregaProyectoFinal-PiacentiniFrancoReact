import React from 'react'


export const Item = ({ amp }) => {

    const { agregarAlCarrito } = useContext(CartContext);

    return (
        <div className="amp">
            <img src={amp.foto1} />
            <h2>{amp.modelo}</h2>
            <p>${amp.precio}</p>
            <p>{amp.efectos}</p>
            <Link to={`/item/${amp.id}`}>Ver más</Link>
            <button onClick={() => agregarAlCarrito(amp)}>Agregar al carrito</button>
        </div>
    )
}
