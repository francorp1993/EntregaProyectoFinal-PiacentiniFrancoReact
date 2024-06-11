import React from 'react'
import { Item } from './Item'

export const ItemList = ({ productos }) => {

    return (
        <div className="items-grilla">
            {
                productos.length > 0 ?
                productos.map(productos => {
                        return <Item key={productos.id} productos={productos} />
                    })
                    : <p>Cargando productos...</p>
            }
        </div>
    )
}

export default ItemList

