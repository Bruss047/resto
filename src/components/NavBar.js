import React, {useState, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons';

import { lenguageContext } from './../lenguageContext';


export const NavBar = ({content, contentEng}) => {

    const {leng,setLeng} = useContext(lenguageContext);
    const [fields, setFields] = useState(content);
    const [button, setButton] = useState("ENG");

    const toggleLenguage =()=>{
        
        if(button!=="ESP"){
            setLeng("ENG")
            setFields(contentEng);
            setButton("ESP");
        }else{
            setLeng("ESP")
            setFields(content);
            setButton("ENG");
        }
        
    }
   
    const {phone, menuOptions} = fields;
    
    return (
        <>
        <nav id="home" className="navbar nav-first navbar-dark bg-dark">
            <div className="container">
                {/* <a className="navbar-brand" >
                    <img src={photo} alt=""/>
                </a> */}
                
                <a
                    className="btn text-warning"
                    href="https://www.instagram.com/fonda.comidasargentinas/"
                    role="button"
                    data-mdb-ripple-color="white"
                    >
                <FontAwesomeIcon icon={faInstagram} className='brandHover blue' size="2x"></FontAwesomeIcon>
                </a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href='/#' className="nav-link text-primary"><FontAwesomeIcon icon={faPhoneSquareAlt}></FontAwesomeIcon> <span className="pl-2 text-muted">{phone}</span></a>
                    </li>                   
                </ul>
                <button className="btn text-warning" style={{marginLeft:10}} onClick={()=>toggleLenguage()}> {button} </button>
            </div>
        </nav>

        
        <nav className="nav-second navbar custom-navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div className="container">
           

                 <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">


                    <ul className="navbar-nav mr-auto"> 
                    {
                        menuOptions.map((option, index) =>(
                            <li key={index} className="nav-item">
                              <a className="nav-link" href={option.href}>{option.section}</a>
                            </li>
                        ))
                    }
                  
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
