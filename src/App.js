import './App.css';
import { About } from './components/About';
import { Header } from './components/Header';
import { MainMenu } from './components/MainMenu';
import { NavBar } from './components/NavBar';
import { GetTable } from './components/GetTable';
import { Footer } from './components/Footer';
import { navbar, navbarEng, header } from './data/data';



function App() {
  return (
    <>
      <NavBar content={navbar} contentEng={navbarEng}/>
      <Header content={header}/>
      <About/>
      <MainMenu/>
      <GetTable/>
      <Footer/>
    </>
  );
}

export default App;
