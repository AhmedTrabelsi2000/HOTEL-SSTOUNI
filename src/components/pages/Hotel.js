import React, { useRef, useEffect, useState } from 'react';
import '../../App.css';
import Footer from '../Footer'
import '../Footer.css';
import ReactImageGallery from '../ReactImageGallery';
import ReactImageGallery25 from '../ReactImageGallery25';
import ImageGallery from '../ImageGallery';
import ImageGallery2 from '../ImageGallery2';


export default function Chambres() {
  const chambresRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide((currentSlide + 1) % images.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const images = [
    'images/bar3.jpg',
    'images/restau2.jpg',
    'images/bar2.jpg',
    'images/bar1.jpg',
    
    
  ];
   
  return (
    <div> <h1 ref={chambresRef} className='hotel '>
      <div className='slide active' style={{ backgroundImage: `url(${images[currentSlide]})` }}></div>
      <div className='slide ' style={{ backgroundImage: `url(${images[(currentSlide + 1) % images.length]})` }}></div>
      <div className='slide' style={{ backgroundImage: `url(${images[(currentSlide + 2) % images.length]})` }}></div>
    </h1>
      
      
      <div >
        <br></br>
        <br></br>
        <br></br>
        <h1 className='h11'>Découvrez la transformation du bar de notre hôtel.
        <br></br>
        Mélange subtil d'élégance moderne et d'authenticité raffinée .
        <br></br> 
        Rejoignez nous pour célébrer cette rénovation exceptionnelle </h1>
        <br></br>
        <br></br>
          
      </div>
      <ImageGallery/>
      <br></br>
      <h2 className='h11'>Laissez-vous séduire par notre restaurant où les saveurs se marient harmonieusement, 
que ce soit dans nos plats gastronomiques,
 nos créations uniques ou notre atmosphère accueillante
        </h2>
         <br></br>
         <ImageGallery2/>
         
      <Footer/>
    </div>

  );
}