import React, {useContext, useEffect, useState} from 'react';

//import photo1 from '../assets/imgs/section.jpg';
import { lenguageContext } from './../lenguageContext';
//const checkMark = require('../assets/imgs/logotest.png')

export const Header = ({content ,contentEng}) => {

  const {leng} = useContext(lenguageContext);
  const [fields, setFields] = useState(content);
  
  const {logo, subtitle, title} = fields;


  useEffect(() => {
     
     if(leng!=="ESP"){
            setFields(contentEng);
        }else{
            setFields(content);
        }
       
  }, [leng, contentEng, content]);
  

  return (
     <header className="header">
        <div className="overlay">
            <img src="images/logoFonda.png" className="logo" alt="Fonda resto san telmo"/>
            <h1 className="subtitle">{subtitle}</h1>
            <h1 className="title">{title}</h1> 
            {/* <a className="btn btn-primary mt-3" href="/#">EJEMPLO</a>  */}
        </div>      
    </header>
  )
}
