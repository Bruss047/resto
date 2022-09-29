import React from 'react';
import Zoom from 'react-reveal/Zoom';

export const Staff = () => {
  return (
    <>
    <Zoom top>
        <section id="team">
        <div className="container">
            <h6 className="section-subtitle text-center">Nuestro Staff</h6>
            <h3 className="section-title mb-5 text-center">Nuestro Talento</h3>
            <div className="row">
                <div className="col-md-4 my-3">
                    <div className="team-wrapper text-center">
                        <img src="images/chef.jpg" className=" imgSize rounded shadow" alt=""/>
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
                        <img src="images/chef.jpg" className="imgSize rounded shadow" alt=""/>
                        <h5 className="my-3">Chef 3</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio nulla reiciendis!</p>
                        <h6 className="socials mt-3">
                            <a href="/#" className="px-2"><i className="ti-facebook"></i></a>
                            <a href="/#" className="px-2"><i className="ti-twitter"></i></a>
                            <a href="/#" className="px-2"><i className="ti-instagram"></i></a>
                            <a href="/#" className="px-2"><i className="ti-google"></i></a>
                        </h6>
                    </div>
                </div> 
            </div>
        </div>
    </section>
    </Zoom>
    </>
  )
}
