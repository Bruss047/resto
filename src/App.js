import './App.css';
import { About } from './components/About';
import { Header } from './components/Header';
import { MainMenu } from './components/MainMenu';
import { NavBar } from './components/NavBar';
import { GetTable } from './components/GetTable';
import { Footer } from './components/Footer';



function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <About/>
      <MainMenu/>
      <GetTable/>
      <Footer/>
    </>
  );
}

export default App;
