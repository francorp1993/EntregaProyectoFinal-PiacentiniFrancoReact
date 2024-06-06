import React from 'react'


export const Item = ({ amp }) => {

    // const { agregarAlCarrito } = useContext(CartContext);

    return (
        <div className="item">
            <img className='img' src={amp.foto} alt={amp.modelo} />
            <div className="info-amp">
                <h2>{amp.modelo}</h2>
                <p className='precio'>${amp.precio}</p>
                <p className="data">{amp.efectos}</p>
            </div>

            {/* <Link to={`/item/${amp.id}`}>Ver más</Link> */}
            {/* <button onClick={() => agregarAlCarrito(amp)}>Agregar al carrito</button> */}
        </div>

    )
}
