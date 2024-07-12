import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';


const ItemDetail = ({ producto }) => {

console.log (producto.descripción);

    const { agregarAlCarrito, carrito, setCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    const handleSumar = () => {
        cantidad < producto.stock && setCantidad(cantidad + 1);
    };

    // const hanldeAgregar = ()=>{
    //     const itemAgregado = {...producto, cantidad};

    //     const nuevoCarrito = [...carrito];
    //     const estaEnCarrito = nuevoCarrito.find((item) => item.id === itemAgregado.id); 

    //     if (estaEnCarrito){
    //         estaEnCarrito.cantidad = estaEnCarrito.cantidad + cantidad;
    //         setCarrito(nuevoCarrito);
    //     }else{
    //         setCarrito([...carrito, itemAgregado]);
    //     }
    // }

    


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
                <h2 className='h2vm-precio'>$ {producto ? producto.precio : "cargando.."}</h2>
                <p className='descripcion'>{producto ? producto.descripción : "cargando"}</p>
                <p className='efectos'>Efectos: {producto ? producto.efectos : "cargando.."}</p>
                <p className='entradas'>Entradas: {producto ? producto.entradas : "cargando.."}</p>
                <button onClick={ ()=> agregarAlCarrito (producto) } className="boton-agregar" >Agregar al carrito</button>
                <ItemCount cantidad = {cantidad} handleSumar ={handleSumar} handleRestar ={handleRestar}/>
            </div>
        </div>
    )
}

export default ItemDetail
