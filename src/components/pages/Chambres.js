import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Footer.css';
import ReactImageGallery24 from '../ReactImageGallery24';



function Chambres() {
  return (
    <>
    
  <div><h3 className='chambres'>À bientôt !</h3>
  <br></br>
  <br></br>
  <h2 className='h11'>Nous vous attendons avec impatience dans notre hôtel rénové,
       prêt à vous offrir une hospitalité chaleureuse et un séjour mémorable.
       <br></br>À bientôt chez nous ! </h2>
       <ReactImageGallery24/>
       
    <div ><Footer /></div>
    

  </div>
  </>
  );
}

export default Chambres;
