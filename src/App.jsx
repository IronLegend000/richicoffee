import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import  Navbar  from './components/Navbar';
import  Hero  from './components/Hero';
import  Product  from './components/Product';
import Banner from './components/Banner.jsx'; 
import Testimonial from './components/testimonials';
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    }); 
  });

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Product/>
      <Banner/>
      <Contact/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default App;
