import React, {useContext, useEffect, useState} from 'react';
import Slide from 'react-reveal/Slide';
import { lenguageContext } from './../lenguageContext';

export const MainMenu = ({content, contentEng}) => {

     const {leng} = useContext(lenguageContext);
     const [fields, setFields] = useState(content);  

      useEffect(() => {
     
     if(leng!=="ESP"){
            setFields(contentEng);
        }else{
            setFields(content);
        }
       
    }, [leng, contentEng, content]);

    const {titleMenu, subtitleMenu, titleDrinks, subtitleDrinks, platos, tragos} = fields;

  return (
    <section id="menu" className="has-img-bg">
        <Slide right>
        <div className="container">
            <h6 className="section-subtitle text-center">{titleMenu}</h6>
            <h3 className="section-title mb-6 text-center">{subtitleMenu}</h3>


            <div className="card bg-light">
                <div className="card-body px-4 pb-4 text-center"> 
                <div className="row text-left">
                  {
                        platos.map((menu, index) => (
                            <div key={index} className="col-md-6 my-4">
                                    <div className="d-flex">
                                        <div className="flex-grow-1 pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                            <div className="img-holder text-center mb-3">
                                                <img src={menu.imagen} className='imgSize ' alt=""/>
                                            </div>
                                            <h5 className='text-center'>{menu.nombre}</h5>
                                            <p className="text-center mt-1 mb-0">{menu.desc}</p>
                                        </div>
                                    </div>
                            </div>
                        
                        ))
                    } 
                    </div>                 
            </div> 
            </div>                 
        </div>
         </Slide>
        
       {/* BEBIDAS */}
       <Slide left>
          <div className="container">
            <h6 className="section-subtitle mt-5 text-center">{titleDrinks}</h6>
            <h3 className="section-title text-center">{subtitleDrinks}</h3>
            <div className="card bg-dark">
                <div className="card-body px-4 pb-4 text-center">                   
                    <div className="row text-left">

                        {
                        tragos.map((trago, index) => (
                            trago.id%2!==0 ? <div key={index} className="col-md-12 my-4 ">
                                    <div className="flex-grow-1 row text-dark">
                                        <div className="img-holder-coctail text-center col-md-6 ">
                                            <img src={trago.imagen} className="mb-3 rounded-circle img-shadow imgSize" alt=""/>
                                        </div>
                                        <div  className='col-md-6 my-4 border border-left-0 border-top-0 border-right-0'>
                                          <h5 className='text-center text-light'>{trago.nombre}</h5>
                                          <p className="text-center mt-1 mb-2">{trago.desc}</p>
                                        </div>
                                </div>
                      
                        </div> :
                        <div key={index} className="col-md-12 my-4 ">
                                    <div className="flex-grow-1 row">
                                        <div  className=' col-md-6 my-4 order-sm-first order-last border border-left-0 border-top-0 border-right-0'>
                                          <h5 className='text-center text-light '>{trago.nombre}</h5>
                                          <p className="text-center mt-1 mb-2">{trago.desc}</p>
                                        </div>
                                        <div className="img-holder-coctail text-center col-md-6 ">
                                            <img src={trago.imagen} className="mb-3 rounded-circle img-shadow imgSize" alt=""/>
                                        </div>
                                        
                                </div>
                      
                        </div>
                             
                        ))
                    } 

{/* 
                        <div  className="col-md-12 my-4 ">
                                    <div className="flex-grow-1 row text-dark">
                                        <div className="img-holder-coctail text-center col-md-6 ">
                                            <img src="images/trago1.jpg"  className="mb-3 rounded-circle img-shadow imgSize" alt=""/>
                                        </div>
                                        <div  className='col-md-6 my-4 border border-left-0 border-top-0 border-right-0'>
                                          <h5 className='text-center text-light'>Coco Argentino</h5>
                                          <p className="text-center mt-1 mb-2">DESCRIPCIÓN: dolor dolores molestiae maiores quidem.dolor dolores molestiae maiores quidem.
                                          dolor dolores molestiae maiores quidem.</p>
                                        </div>
                                </div>
                      
                        </div>
                        <div className="col-md-12 my-4 ">
                                    <div className="flex-grow-1 row">
                                        <div  className=' col-md-6 my-4 order-sm-first order-last border border-left-0 border-top-0 border-right-0'>
                                          <h5 className='text-center text-light '>Fonda Hot</h5>
                                          <p className="text-center mt-1 mb-2">DESCRIPCIÓN: dolor dolores molestiae maiores quidem.dolor dolores molestiae maiores quidem.
                                          dolor dolores molestiae maiores quidem.</p>
                                        </div>
                                        <div className="img-holder-coctail text-center col-md-6 ">
                                            <img src="images/trago2.jpg" className="mb-3 rounded-circle img-shadow imgSize" alt=""/>
                                        </div>
                                        
                                </div>
                      
                        </div>
                        <div className="col-md-12 my-4 ">
                                    <div className="flex-grow-1 row text-dark">
                                        <div  className="img-holder-coctail text-center col-md-6">
                                            <img src="images/trago3.jpg"  className="mb-3 rounded-circle img-shadow imgSize" alt=""/>
                                        </div>
                                        <div className='col-md-6 my-4 border border-left-0 border-top-0 border-right-0'>
                                          <h5 className='text-center text-light'>Maki Pink</h5>
                                          <p className="text-center mt-1 mb-2">DESCRIPCIÓN: dolor dolores molestiae maiores quidem.dolor dolores molestiae maiores quidem.
                                          dolor dolores molestiae maiores quidem.</p>
                                        </div>
                                </div>
                      
                        </div> */}
             
                    </div>
                    {/* <a href="#book-table" className="btn btn-primary mt-4">EJEMPLO</a> */}
                </div>
            </div>                  
        </div>
        </Slide>
       
    </section>
  )
}
