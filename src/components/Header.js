import React from 'react';
import photo from '../assets/imgs/logotest.png';
import photo1 from '../assets/imgs/section.jpg';
//const checkMark = require('../assets/imgs/logotest.png')

export const Header = ({content}) => {
  
  return (
     <header className="header">
        <div className="overlay">
            <img src={photo} alt="" className="logo"/>
            <h1 className="subtitle">{content.subtitle}</h1>
            <h1 className="title">{content.title}</h1> 
            <a className="btn btn-primary mt-3" href="">EJEMPLO</a> 
        </div>      
    </header>
  )
}
