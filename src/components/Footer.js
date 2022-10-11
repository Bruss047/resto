import React, {useContext, useEffect, useState}  from 'react';
import { lenguageContext } from './../lenguageContext';

export const Footer = ({content, contentEng}) => {

    const {leng} = useContext(lenguageContext);
    const [fields, setFields] = useState(content);  

      useEffect(() => {
     
     if(leng!=="ESP"){
            setFields(contentEng);
        }else{
            setFields(content);
        }
       
    }, [leng, contentEng, content]);

    const {title} = fields;

  return (
     <footer id="footerSection" className="border border-light border-left-0 border-right-0 border-bottom-0 p-4 bg-dark">
        <div className="container">
            <div className="row align-items-center text-center text-md-left">
                <h4 className='text-center' style={{ color: 'white' }}>{title}</h4>
                <div className="mb-4 mapouter text-center">
                    <div className="gmap_canvas">
                        <iframe title="fonda restaurante" loading="lazy" style={{ borderRadius:10, height: 203, frameborder:0, scrolling:"no", marginheight:0, marginwidth:0 }} 
                           id="gmap_canvas" src={"https://maps.google.com/maps?q=San%20Telmo%20-%20Carlos%20Calvo%20475&t=&z=15&ie=UTF8&iwloc=&output=embed"}>
                           </iframe></div>
                           <h6 className='text-center text-light'>Carlos Calvo 475 Local 34. - San Telmo</h6>
                </div>
                
                <div className="col border border-lighter border-bottom-0 border-left-0 border-right-0 text-center">
                    <p className="mb-0 small">Copyright© {new Date().getFullYear()} <a href="/#" target="_blank"> J. Bruzzese</a> </p> 
                </div>
                <div className="d-none d-md-block ">
                    {/* <h6 className="small mb-0">
                        <a href="" className="px-2"><i className="ti-facebook"></i></a>
                        <a href="" className="px-2"><i className="ti-twitter"></i></a>
                        <a href="" className="px-2"><i className="ti-instagram"></i></a>
                        <a href="" className="px-2"><i className="ti-google"></i></a>
                    </h6> */}
                </div>
            </div>
        </div>
        
    </footer>
  )
}
