import React from 'react'
import { Item } from './Item'

export const ItemList = ({ amplificadores }) => {

    return (
        <div className="items-grilla">
            {
                amplificadores.length > 0 ?
                amplificadores.map(amp => {
                        return <Item key={amp.id} amp={amp} />
                    })
                    : <p>Cargando productos...</p>
            }
        </div>
    )
}

export default ItemList

