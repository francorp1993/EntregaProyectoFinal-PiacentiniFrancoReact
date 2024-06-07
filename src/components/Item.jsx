import React from 'react';

export const Item = ({ amp }) => {
    return (
        <div className="item">
            <div id={`carousel-${amp.id}`} className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target={`#carousel-${amp.id}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target={`#carousel-${amp.id}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={amp.foto} className="d-block w-100" alt={amp.modelo}/>
                    </div>
                    <div className="carousel-item">
                        <img src={amp.foto2} className="d-block w-100" alt={amp.modelo}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${amp.id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${amp.id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="info-amp">
                <h2>{amp.modelo}</h2>
                <p className='precio'>${amp.precio}</p>
                <p className="data">{amp.efectos}</p>
            </div>
        </div>
    );
};
