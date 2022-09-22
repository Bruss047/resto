//import './App.css';
import { useState } from 'react'
import { About } from './components/About';
import { Header } from './components/Header';
import { MainMenu } from './components/MainMenu';
import { NavBar } from './components/NavBar';
import { GetTable } from './components/GetTable';
import { Footer } from './components/Footer';
import { navbar, navbarEng, header, headerEng } from './data/data';
import { lenguageContext } from './lenguageContext';


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
      <About/>
      <MainMenu/>
      <GetTable/>
      <Footer/>
      </lenguageContext.Provider>
    </>
  );
}

export default App;
