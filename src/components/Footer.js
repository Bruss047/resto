import React from 'react';

export const Footer = () => {
  return (
     <footer id="footerSection" className="border border-dark border-left-0 border-right-0 border-bottom-0 p-4 bg-dark">
        <div className="container">
            <div className="row align-items-center text-center text-md-left">
                <h4 className='text-center' style={{ color: 'white' }}>¿Donde Estamos?</h4>
                <div className="  mapouter text-center"><div className="gmap_canvas"><iframe style={{ borderRadius:10, height: 203, frameborder:0, scrolling:"no", marginheight:0, marginwidth:0 }} 
                id="gmap_canvas" src={"https://maps.google.com/maps?q=bolivar%20970%20san%20telmo&t=&z=15&ie=UTF8&iwloc=&output=embed"}></iframe><a href="https://123movies-a.com">
                    </a></div>
                    </div>
                <div className="col">
                    <p className="mb-0 small"> <script>document.write(new Date().getFullYear())</script> <a href="" target="_blank">J. Bruzzese</a> </p> 
                </div>
                <div className="d-none d-md-block">
                    <h6 className="small mb-0">
                        <a href="" className="px-2"><i className="ti-facebook"></i></a>
                        <a href="" className="px-2"><i className="ti-twitter"></i></a>
                        <a href="" className="px-2"><i className="ti-instagram"></i></a>
                        <a href="" className="px-2"><i className="ti-google"></i></a>
                    </h6>
                </div>
            </div>
        </div>
        
    </footer>
  )
}
