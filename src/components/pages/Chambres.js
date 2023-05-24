import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Footer.css';
import ImageGallery3 from '../ImageGallery3';



function Chambres() {
  return (
    <>
    
  <div><h3 className='chambres'>À bientôt !</h3>
  <br></br>
  <br></br>
  <h2 className='h11'>Nous vous attendons avec impatience dans notre hôtel rénové,
       prêt à vous offrir une hospitalité chaleureuse et un séjour mémorable.
       <br></br>À bientôt chez nous ! </h2>
       <br></br>
       <ImageGallery3/>
       <br></br>
       <h3 className='h11'> 
       Détendez-vous dans le lit king-size avec des draps en coton doux et profitez de l'atmosphère apaisante. La chambre est équipée d'une télévision à écran plat, d'un minibar bien approvisionné et d'un coin salon confortable.<br></br> La salle de bains attenante est aménagée avec des articles de toilette de qualité et dispose d'une douche à effet pluie pour un rafraîchissement revitalisant.<br></br> Profitez également des services supplémentaires tels que le service en chambre 24h/24, l'accès Internet haut débit et la vue imprenable depuis votre balcon privé. Que ce soit pour un voyage d'affaires ou des vacances de luxe, 
       notre chambre 4 étoiles vous promet un séjour mémorable et relaxant.</h3>
    <br></br>
    <div ><Footer /></div>
    

  </div>
  </>
  );
}

export default Chambres;
