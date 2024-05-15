import React from 'react'
import {Carrito} from './Carrito'


export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="/src/img/logo.png" alt="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nosotros</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul class="dropdown-menu">
                                <li><a className='nav-item' href="#">Audio y Sonido</a></li>
                                <li><a className='nav-item' href="#">Amplificadores</a></li>
                                <li><a className='nav-item' href="#">Instrumentos</a></li>
                                <li><a className='nav-item' href="#">Producción</a></li>
                                <li><a className='nav-item' href="#">Grabación</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button class="btn btn-outline-secondary" type="submit"><img src="/src/img/lupa.png" alt="" className='lupa'/>
                            </button>
                    </form>
                </div>
                <Carrito className = "carrito-img"/>
            </div>
        </nav>

    )
}

