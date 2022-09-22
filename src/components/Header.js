import React from 'react';
import photo from '../assets/imgs/logotest.png';
import photo1 from '../assets/imgs/section.jpg';
//const checkMark = require('../assets/imgs/logotest.png')

export const Header = () => {
  
  return (
     <header className="header">
        <div className="overlay">
            <img src={photo} alt="" className="logo"/>
            <h1 className="subtitle">Bienvenido a Nuestro Resto</h1>
            <h1 className="title">Template de Prueba</h1> 
            <a className="btn btn-primary mt-3" href="">EJEMPLO</a> 
        </div>      
    </header>
  )
}
