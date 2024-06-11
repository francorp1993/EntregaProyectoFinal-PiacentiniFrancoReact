import React from 'react';

export const Item = ({ productos }) => {
    return (
        <div className="item">
            <div id={`carousel-${productos.id}`} className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target={`#carousel-${productos.id}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target={`#carousel-${productos.id}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={productos.foto} className="d-block w-100 img" alt={productos.modelo}/>
                    </div>
                    <div className="carousel-item">
                        <img src={productos.foto2} className="d-block w-100 img" alt={productos.modelo}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${productos.id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${productos.id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="info-productos">
                <h2>{productos.modelo}</h2>
                <p className='precio'>${productos.precio}</p>
                <p className="data">{productos.efectos}</p>
            </div>
        </div>
    );
};
