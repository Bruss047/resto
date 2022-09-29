import React from 'react';
import Slide from 'react-reveal/Slide';

export const MainMenu = () => {
  return (
    <section id="menu" className="has-img-bg">
        <Slide right>
        <div className="container">
            <h6 className="section-subtitle text-center">Buena Comida</h6>
            <h3 className="section-title mb-6 text-center">Menú Principal / Mejores Platos</h3>
            <div className="card bg-light">
                <div className="card-body px-4 pb-4 text-center">                   
                    <div className="row text-left">
                        <div className="col-md-6 my-4">
                            <a href="/#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                               
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <div className="img-holder text-center mb-3">
                                            <img src="images/comida1.jpg" className='imgSize ' alt=""/>
                                        </div>
                                        <h5 className='text-center'>Plato Ejemplo</h5>
                                        <p className="text-center mt-1 mb-0">DESCRIPCIÓN: dolor dolores molestiae maiores quidem.</p>
                                    </div>
                                    
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 my-4">
                            <a href="/#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <div className="img-holder text-center mb-3">
                                            <img src="images/comida1.jpg" className='imgSize ' alt=""/>
                                        </div>
                                        <h5 className='text-center'>Plato Ejemplo</h5>
                                        <p className="text-center mt-1 mb-0">DESCRIPCIÓN: dolor dolores molestiae maiores quidem.</p>
                                    </div>
                                    
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 my-4">
                            <a href="/#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <div className="img-holder text-center mb-3">
                                            <img src="images/comida3.jpg" className='imgSize ' alt=""/>
                                        </div>
                                        <h5 className='text-center'>Plato Ejemplo</h5>
                                        <p className="text-center mt-1 mb-0">DESCRIPCIÓN: dolor dolores molestiae maiores quidem.</p>
                                    </div>
                                    
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 my-4">
                            <a href="/#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                <div className="d-flex">
                                   <div className="flex-grow-1">
                                        <div className="img-holder text-center mb-3">
                                            <img src="images/comida1.jpg" className='imgSize ' alt=""/>
                                        </div>
                                        <h5 className='text-center'>Plato Ejemplo</h5>
                                        <p className="text-center mt-1 mb-0">DESCRIPCIÓN: dolor dolores molestiae maiores quidem.</p>
                                    </div>
                                   
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 my-4">
                            <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                <div className="d-flex">
                                   <div className="flex-grow-1">
                                        <div className="img-holder text-center mb-3">
                                            <img src="images/comida1.jpg" className='imgSize ' alt=""/>
                                        </div>
                                        <h5 className='text-center'>Plato Ejemplo</h5>
                                        <p className="text-center mt-1 mb-0">DESCRIPCIÓN: dolor dolores molestiae maiores quidem.</p>
                                    </div>
                                    
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 my-4">
                            <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <div className="border-radius img-holder text-center mb-3">
                                            <img src="images/plato.jpg" className='imgSize ' alt=""/>
                                        </div>
                                        <h5 className='text-center'>Plato Ejemplo</h5>
                                        <p className="text-center mt-1 mb-0">DESCRIPCIÓN: dolor dolores molestiae maiores quidem.</p>
                                    </div>
                                    
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* <a href="#book-table" className="btn btn-primary mt-4">EJEMPLO</a> */}
                </div>
            </div>                  
        </div>
         </Slide>
        
       {/* BEBIDAS */}
       <Slide left>
          <div className="container">
            <h6 className="section-subtitle mt-5 text-center">De Autor</h6>
            <h3 className="section-title text-center">COCTELES</h3>
            <div className="card bg-dark">
                <div className="card-body px-4 pb-4 text-center">                   
                    <div className="row text-left">
                        <div  className="col-md-12 my-4 ">
                                    <div className="flex-grow-1 row text-dark">
                                        <div className="img-holder-coctail text-center col-md-6 ">
                                            <img src="images/trago1.jpg"  className="mb-3 rounded-circle img-shadow imgSize" alt=""/>
                                        </div>
                                        <div  className='col-md-6 my-4'>
                                          <h5 className='text-center text-light'>Coco Argentino</h5>
                                          <p className="text-center mt-1 mb-0">DESCRIPCIÓN: dolor dolores molestiae maiores quidem.dolor dolores molestiae maiores quidem.
                                          dolor dolores molestiae maiores quidem.</p>
                                        </div>
                                </div>
                      
                        </div>
                        <div className="col-md-12 my-4 ">
                                    <div className="flex-grow-1 row">
                                        <div  className=' col-md-6 my-4 order-sm-first order-last text-dark border border-left-0 border-top-0 border-right-0'>
                                          <h5 className='text-center text-light'>Fonda Hot</h5>
                                          <p className="text-center mt-1 mb-0">DESCRIPCIÓN: dolor dolores molestiae maiores quidem.dolor dolores molestiae maiores quidem.
                                          dolor dolores molestiae maiores quidem.</p>
                                        </div>
                                        <div className="img-holder-coctail text-center col-md-6  ">
                                            <img src="images/trago2.jpg" className="mb-3 rounded-circle img-shadow imgSize" alt=""/>
                                        </div>
                                        
                                </div>
                      
                        </div>
                        <div className="col-md-12 my-4 ">
                                    <div className="flex-grow-1 row text-dark">
                                        <div  className="img-holder-coctail text-center col-md-6">
                                            <img src="images/trago3.jpg"  className="mb-3 rounded-circle img-shadow imgSize" alt=""/>
                                        </div>
                                        <div className='col-md-6 my-4 '>
                                          <h5 className='text-center text-light'>Maki Pink</h5>
                                          <p className="text-center mt-1 mb-0">DESCRIPCIÓN: dolor dolores molestiae maiores quidem.dolor dolores molestiae maiores quidem.
                                          dolor dolores molestiae maiores quidem.</p>
                                        </div>
                                </div>
                      
                        </div>
             
                    </div>
                    {/* <a href="#book-table" className="btn btn-primary mt-4">EJEMPLO</a> */}
                </div>
            </div>                  
        </div>
        </Slide>
       
    </section>
  )
}
