import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Pages/Home';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import FeaturesPage from './Pages/FeaturesPage';
import ServicesPage from './Pages/ServicesPage';
import EventsPage from './Pages/EventsPage';
import { useEffect, useRef } from 'react';
import ArticlesDetalis from './Pages/Article/ArticlesDetalis';

function App() {

  const scrollButtonRef = useRef('none');
  const scrollThreshold = 1000;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scrollThreshold) {
        scrollButtonRef.current.style.display = 'block';
      } else {
        scrollButtonRef.current.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, [scrollButtonRef]);

  const handleScrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/features' element={<FeaturesPage/>} />
          <Route path='/services' element={<ServicesPage/>} />
          <Route path='/events' element={<EventsPage/>} />
          <Route path='/articles-detalis/:id' element={<ArticlesDetalis/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      <button className="go-up" ref={scrollButtonRef} onClick={handleScrollToTop}>
      <i className="fa fa-angle-double-up fa-2x"></i>
    </button>
    </>
    
  );
}

export default App;
