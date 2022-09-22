import React from 'react';
import photo from '../assets/imgs/logotest.png'

export const NavBar = () => {
  return (
    <>
    <nav className="navbar nav-first navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" >
                <img src={photo} alt=""/>
            </a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link text-primary">Contacto : <span className="pl-2 text-muted">(011) 4566 7890</span></a>
                </li>                   
            </ul>
        </div>
    </nav>
    
    <nav className="nav-second navbar custom-navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container">
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto"> 
                 <li className="nav-item">
                        <a className="nav-link" href="#menu">Nuestros Platos</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#about">Acerca de Nosotros</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#footerSection">¿Donde Estamos?</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#team">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#testmonial">Testmonials</a>
                    </li> */}
                </ul> 
                <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item">
                        <a href="components.html" className="btn btn-primary btn-sm">Components</a>
                    </li> */}
                    
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
