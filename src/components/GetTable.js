import React from 'react';
import Slide from 'react-reveal/Slide';


export const GetTable = () => {
  return (
   <section id="book-table" className="bg-white">
    <Slide bottom>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 d-none d-md-block">
                    <img src="images/contact.jpg" alt="" className="w-100 rounded shadow"/>
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control" name="phone" placeholder=""/>
                        </div>
                        <div className="form-group">
                            <input type="datetime-local" className="form-control" name=""/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" name="seats" placeholder=""/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Reservar Mesa ?</button>
                        
                    </form>
                </div>
            </div>
        </div>
        </Slide>
    </section>
  )
}
