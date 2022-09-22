import React from 'react';
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';

export const About = () => {
  return (
    <section id="about">
        <Slide left>
        <div className="container">
            <div className="row align-items-center">                
                <div className="col-md-6">
                    <h6 className="section-subtitle">Opening Times</h6>
                    
                    <h3 className="section-title">Horarios de Atención</h3>
                    <p className="mb-1 font-weight-bold">Monday - Thursday : <span className="font-weight-normal pl-2 text-muted">7:00 am - 12:00 pm</span></p>
                    <p className="mb-1 font-weight-bold">Friday - Saturday : <span className="font-weight-normal pl-2 text-muted">7:00 am - Midnight</span></p>
                    <p className="mb-1 font-weight-bold">Saturday - Sunday : <span className="font-weight-normal pl-2 text-muted">9:00 am - 12:00 pm</span></p>

                    <a href="#book-table" className="btn btn-primary btn-sm w-md mt-4">EJEMPLO</a>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col">
                            <img alt="" src="images/about-1.jpg" className="w-100 rounded shadow"/>
                        </div>
                        <div className="col">
                            <img alt="" src="images/about-2.jpg" className="w-100 rounded shadow"/>
                        </div>
                    </div>                  
                </div>
            </div>
            <div className="section-devider my-6 transparent"></div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h6 className="section-subtitle">Origen</h6>
                    <h3 className="section-title">Ejemplo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic illo a, aut, eum nesciunt obcaecati deserunt ipsam nostrum voluptate recusandae?</p>
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
        </div>
       </Slide>
    </section>
  )
}
