
import { useState } from 'react'
import { About } from './components/About';
import { Header } from './components/Header';
import { MainMenu } from './components/MainMenu';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { navbar, navbarEng, header, headerEng, about, aboutEng, menu, menuEng, staff, staffEng,footer, footerEng } from './data/data';
import { lenguageContext } from './lenguageContext';
import { Staff } from './components/Staff';
import { Helmet } from 'react-helmet';


function App() {

  const [leng, setLeng] = useState("ESP");

  return (
    <>
    <lenguageContext.Provider value={{ 
              leng,
              setLeng
          }}>
      <Helmet>
        <title>Fonda Resto</title>
        <meta 
          name="description"
          content="Restorán / Resto en San Telmo Capital Federal con cortes de carne Argentina y cocteles / tragos exclusivos."/>
          <meta 
          name="keywords"
          content="Restorán, resto, restaurant, local de comidas, san telmo, capital federal, mercado san telmo, caba, comidas argentinas, pernil de ternera, carnes"/>
      </Helmet>
        <NavBar content={navbar} contentEng={navbarEng}/>
        <Header content={header} contentEng={headerEng}/>
        <About content={about} contentEng={aboutEng}/>
        <MainMenu content={menu} contentEng={menuEng}/>
        <Staff content={staff} contentEng={staffEng}/>
        {/* <GetTable/> */}
        <Footer content={footer} contentEng={footerEng}/>
        </lenguageContext.Provider>
    </>
  );
}

export default App;
