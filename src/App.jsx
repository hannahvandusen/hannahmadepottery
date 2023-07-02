import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { FaArrowCircleUp } from 'react-icons/fa';
import React, {useState, useEffect} from 'react'

function App() {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
    }, []);

    const goTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };    

  return (
    <div className="App" >
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route path='/portfolio' element={<Portfolio/>} /> 
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact />} /> 
          </Routes>
        </BrowserRouter>
        <button className="btn-scrollTop" style={{display: isVisible ? 'block':'none'}} onClick={goTop}>
	        <FaArrowCircleUp/>
        </button>
        <Footer />
    </div>
  );
}

export default App;
