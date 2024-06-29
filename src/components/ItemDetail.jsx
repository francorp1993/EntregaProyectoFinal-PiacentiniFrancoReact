import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';


const ItemDetail = ({ producto }) => {


    const { agregarAlCarrito } = useContext(CartContext);



    // const handleAgregar = () => {
    //     agregarAlCarrito (producto);
    // }  O pongo esto sin parametros o creo una funcion para poder pasar parametros en un evento.

    return (
        <div className='item-detail-container'>
            <div className='item-ver-mas'>
                <h1 className='h1vm'> {producto ? producto.marca : "cargando.."}</h1>
                <h2 className='h2vm'>{producto ? producto.modelo : "cargando.."}</h2>
                <div className='item-vm'>
                    {producto ? (
                        <div id={`carousel-${producto.id}`} className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target={`#carousel-${producto.id}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target={`#carousel-${producto.id}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={producto.foto} className="d-block w-100 img-vm" alt={producto.modelo} /> 
                                </div>
                                <div className="carousel-item">
                                    <img src={producto.foto2} className="d-block w-100 img-vm" alt={producto.modelo} /> 
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${producto.id}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${producto.id}`} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    ) : (
                        <p>Cargando...</p>
                    )}
                </div>
                <h2 className='h2vm'>{producto ? producto.precio : "cargando.."}</h2>
                <h2 className='h2vm'>{producto ? producto.efecto : "cargando.."}</h2>
                <button onClick={ ()=> agregarAlCarrito (producto) } className="boton-agregar" >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail
