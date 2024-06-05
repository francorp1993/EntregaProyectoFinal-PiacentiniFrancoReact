import React from 'react'

export const ItemListContainer = (props) => {

const { saludo } = props;

    return (
        <h1 className='greeting'>{saludo}</h1>
    )
}


