import React, {useContext, useEffect, useState} from 'react';
import { lenguageContext } from './../lenguageContext';

//const checkMark = require('../assets/imgs/logotest.png')

export const Header = ({content ,contentEng}) => {

  const {leng} = useContext(lenguageContext);
  const [fields, setFields] = useState(content);
  console.log("HEader renderizado")
  useEffect(() => {
     
     if(leng!=="ESP"){
            setFields(contentEng);
            
        }else{
            setFields(content);
        }
       
  }, [leng, contentEng, content]);

    const {logo, subtitle, title} = fields;
  

  return (
    <>

     <header className="headerSection">

        <div className="overlay">
            <img src={"images/logoFondawebp.webp"} className="logo" alt="Fonda restaurante san telmo"/>
            <h1 className="subtitle">{subtitle}</h1>
            <h1 className="title">{title}</h1> 
            {/* <a className="btn btn-primary mt-3" href="/#">EJEMPLO</a>  */}
        </div>   
     
    </header>
    </>
  )
}
