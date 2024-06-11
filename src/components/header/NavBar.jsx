import React from 'react';
import { Carrito } from './Carrito';
import { NavLink } from 'react-router-dom';
import categorias from '../../data/categorias.json';

export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="/src/img/logo (1).png" alt="Logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link pag-activa" : "nav-link"
                                }
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                to="/todos"
                                className={({ isActive }) =>
                                    isActive ? "nav-link dropdown-toggle pag-activa" : "nav-link dropdown-toggle"
                                }
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Productos
                            </NavLink>
                            <ul className="dropdown-menu">
                                {
                                categorias.map((categoria)=>{
                                    return(
                                        <li key={categoria.id}>
                                        <NavLink to={`category/${categoria.id}`} className={({ isActive }) => isActive ? "nav-opcion pag-activa" : "nav-opcion"}>
                                        {categoria.nombre}
                                        </NavLink>
                                        </li>
                                    )
                                })
                                }
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-secondary" type="submit">
                            <img src="/src/img/lupa-blanca.png" alt="Buscar" className="lupa" />
                        </button>
                    </form>
                </div>
                <Carrito />
            </div>
        </nav>
    );
};
