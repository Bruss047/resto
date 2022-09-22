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
                            <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                               
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <div className="img-holder text-center">
                                            <img src="images/plato.jpg" style={{ width: 200, height: 200 }} alt=""/>
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
                                        <div className="img-holder text-center">
                                            <img src="images/plato.jpg" style={{ width: 200, height: 200 }} alt=""/>
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
                                        <div className="img-holder text-center">
                                            <img src="images/plato.jpg" style={{ width: 200, height: 200 }} alt=""/>
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
                                        <div className="img-holder text-center">
                                            <img src="images/plato.jpg" style={{ width: 200, height: 200 }} alt=""/>
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
                                        <div className="img-holder text-center">
                                            <img src="images/plato.jpg" style={{ width: 200, height: 200 }} alt=""/>
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
                                        <div className="border-radius img-holder text-center">
                                            <img src="images/plato.jpg" style={{ width: 200, height: 200 }} alt=""/>
                                        </div>
                                        <h5 className='text-center'>Plato Ejemplo</h5>
                                        <p className="text-center mt-1 mb-0">DESCRIPCIÓN: dolor dolores molestiae maiores quidem.</p>
                                    </div>
                                    
                                </div>
                            </a>
                        </div>
                    </div>
                    <a href="#book-table" className="btn btn-primary mt-4">EJEMPLO</a>
                </div>
            </div>                  
        </div>
        </Slide>
    </section>
  )
}
