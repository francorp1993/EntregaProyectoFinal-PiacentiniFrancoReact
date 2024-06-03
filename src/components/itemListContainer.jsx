import React from 'react'

export const ItemListContainer = () => {

    function Saludo ({greeting}) {
        return <>
                    <h1 className='greeting'> {greeting}</h1>
            </>;
    }

    return (
        <Saludo greeting = "Productos"/>
    )
}


