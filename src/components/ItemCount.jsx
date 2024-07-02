import React, { useState } from 'react';

const ItemCount = ({ cantidad, handleRestar, handleSumar }) => {


    return (
        <div className='item-count'>
            {/* <button className='btn-item-count' onClick={handleRestar}> - </button>
            <p className='num-item-count'>{cantidad}</p>
            <button className='btn-item-count' onClick={handleSumar}> + </button> */}
                {/* <button onClick={hanldeAgregar} className="boton-agregar" >Agregar al carrito</button> */}

        </div>
    );
};

export default ItemCount;

