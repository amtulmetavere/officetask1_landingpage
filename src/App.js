
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Slidercomp from './components/slidercomp.jsx';
import Stats from './components/Stats.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Why from './components/Why.jsx';
import Testimonial from './components/Testimonial.jsx';
import Contact from './components/Contact.jsx';
import Blog from './components/Blog.jsx';
import ScrollToTop from "./components/ScrollToTop"; // Import the component

import "bootstrap/dist/css/bootstrap.min.css";







function App() {
    
  return (
    <div className="App">
      <Header/> 
      <Slidercomp/>
      <Stats/>
      <About/>
      <Services/>

      <section className='cta'>
        <div className='ctaelem'>
            <p>Forge ahead in the legal landscape with our pioneering support services  </p>
           <a href="#">Get Started</a>
        </div>
      </section>
      <Why/>
      <Testimonial/>
      <Contact/>
      <Blog/>

   
      
  
    
      <ScrollToTop /> 
      <Footer/>
    </div>
  );
}

export default App;
