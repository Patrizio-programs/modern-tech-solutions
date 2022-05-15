import './App.css';
import Header from './header';
import { Routes, Route } from "react-router-dom";
import Home from './home';
import Contact from './contact';
import Footer from './footer';
import Services from './services';



function App() {
  return <div>

  <Header />

  <Routes>
    <Route path="/" element ={<Home />}/>
    <Route path="/Contact" element ={<Contact />}/>
    <Route path="/Services" element ={<Services/>} />
  </Routes>

  <br/><br/>
  <Footer/>

  

  
  </div>
    
}

export default App;
