
import { useState } from 'react'
import { About } from './components/About';
import { Header } from './components/Header';
import { MainMenu } from './components/MainMenu';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { navbar, navbarEng, header, headerEng, about, aboutEng } from './data/data';
import { lenguageContext } from './lenguageContext';
import { Staff } from './components/Staff';


function App() {

  const [leng, setLeng] = useState("ESP");

  return (
    <>
    <lenguageContext.Provider value={{ 
              leng,
              setLeng
          }}>
      <NavBar content={navbar} contentEng={navbarEng}/>
      <Header content={header} contentEng={headerEng}/>
      <About content={about} contentEng={aboutEng}/>
      <MainMenu content={about} contentEng={aboutEng}/>
      <Staff content={about} contentEng={aboutEng}/>
      {/* <GetTable/> */}
      <Footer/>
      </lenguageContext.Provider>
    </>
  );
}

export default App;
