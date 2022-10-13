import React, {useContext, useState, useEffect} from 'react';
import Slide from 'react-reveal/Slide';
import { lenguageContext } from './../lenguageContext';

export const About = ({content ,contentEng}) => {

     const {leng} = useContext(lenguageContext);
     const [fields, setFields] = useState(content);
  

    useEffect(() => {
        
        if(leng!=="ESP"){
                setFields(contentEng);
            }else{
                setFields(content);
            }
        
        }, [leng, contentEng, content]);

    const {epigraph, title, name, days, aboutUs, aboutUsContent} = fields;

  return (
    <section id="about">
        <Slide left>
        <div className="container">
            
            {/* <div className="section-devider my-6 transparent"></div> */}
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h6 className="section-subtitle">{name}</h6>
                    <h3 className="section-title">{aboutUs}</h3>
                    <p>{aboutUsContent}</p>
                </div>
                <div className="col-md-6 order-1 order-sm-first">
                    <div className="row">
                        <div className="col">
                            <img src="images/about-3.jpg" alt="" className="w-100 rounded shadow"/>
                        </div>
                        <div className="col">
                            <img src="images/about-4.jpg" alt="" className="w-100 rounded shadow"/>
                        </div>
                    </div>                  
                </div>
            </div>
            <div className="section-devider my-6 transparent"></div>
            <div className="row align-items-center">                
                <div className="col-md-6">
                    <h6 className="section-subtitle">{epigraph}</h6>
                    
                    <h3 className="section-title">{title}</h3>
                    {
                        days.map((days, index)=>(
                           <p key={index} className="mb-1 font-weight-bold">{days.dias} : <span className="font-weight-normal pl-2 ">{days.horarios} </span></p>     
                        ))
                    }
             </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col">
                            <img alt="" src="images/about-1webp.webp" loading='lazy' className="w-100 rounded shadow"/>
                        </div>
                        <div className="col">
                            <img alt="" src="images/about-2w.webp" loading='lazy' className="w-100 rounded shadow"/>
                        </div>
                    </div>                  
                </div>
            </div>

        </div>
       </Slide>
    </section>
  )
}
