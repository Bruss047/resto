import React, {useContext, useEffect, useState} from 'react';
import Zoom from 'react-reveal/Zoom';
import { lenguageContext } from './../lenguageContext';

export const Staff = ({content, contentEng}) => {

    const {leng} = useContext(lenguageContext);
    const [fields, setFields] = useState(content);  

      useEffect(() => {
     
     if(leng!=="ESP"){
            setFields(contentEng);
        }else{
            setFields(content);
        }
       
    }, [leng, contentEng, content]);

    const {title, subtitle, roles} = fields;

  return (
    <>
    <Zoom top>
        <section id="team">
        <div className="container">
            <h6 className="section-subtitle text-center">{subtitle}</h6>
            <h3 className="section-title mb-5 text-center">{title}</h3>
            <div className="row">
                {
                    roles.map((rol, index)=>(
                        <div key={index} className="col-md-4 my-3">
                            <div className="team-wrapper text-center">
                                <img src="images/cheff.jpg" className=" imgSize rounded shadow" alt=""/>
                                <h5 className="my-3">{rol.rol}</h5>
                                <p>{rol.desc}</p>
                                <h6 className="socials mt-3">
                                    <a href="/#" className="px-2"><i className="ti-facebook"></i></a>
                                    <a href="/#" className="px-2"><i className="ti-twitter"></i></a>
                                    <a href="/#" className="px-2"><i className="ti-instagram"></i></a>
                                    <a href="/#" className="px-2"><i className="ti-google"></i></a>
                                </h6>
                            </div>
                        </div>
          

                    ))
                }
                {/* <div className="col-md-4 my-3">
                    <div className="team-wrapper text-center">
                        <img src="images/cheff.jpg" className=" imgSize rounded shadow" alt=""/>
                        <h5 className="my-3">Chef 1</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio nulla reiciendis!</p>
                        <h6 className="socials mt-3">
                            <a href="/#" className="px-2"><i className="ti-facebook"></i></a>
                            <a href="/#" className="px-2"><i className="ti-twitter"></i></a>
                            <a href="/#" className="px-2"><i className="ti-instagram"></i></a>
                            <a href="/#" className="px-2"><i className="ti-google"></i></a>
                        </h6>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div className="team-wrapper text-center">
                        <img src="images/chef.jpg" className="imgSize rounded shadow" alt="otstrap 4.1.1 templates, Pigga Landing page"/>
                        <h5 className="my-3">Chef 2</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio nulla reiciendis!</p>
                        <h6 className="socials mt-3">
                            <a href="/#" className="px-2"><i className="ti-facebook"></i></a>
                            <a href="/#" className="px-2"><i className="ti-twitter"></i></a>
                            <a href="/#" className="px-2"><i className="ti-instagram"></i></a>
                            <a href="/#" className="px-2"><i className="ti-google"></i></a>
                        </h6>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div className="team-wrapper text-center">
                        <img src="images/cheff.jpg" className="imgSize rounded shadow" alt=""/>
                        <h5 className="my-3">Bartender</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio nulla reiciendis!</p>
                        <h6 className="socials mt-3">
                            <a href="/#" className="px-2"><i className="ti-facebook"></i></a>
                            <a href="/#" className="px-2"><i className="ti-twitter"></i></a>
                            <a href="/#" className="px-2"><i className="ti-instagram"></i></a>
                            <a href="/#" className="px-2"><i className="ti-google"></i></a>
                        </h6>
                    </div>
                </div>  */}
            </div>
        </div>
    </section>
    </Zoom>
    </>
  )
}
