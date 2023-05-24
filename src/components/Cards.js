import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
     
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/chambre1.jpg'
              text="Plongez dans le luxe et le confort de notre chambre de l'hôtel .
               Cette chambre spacieuse et élégamment décorée est conçue pour offrir une expérience de séjour exceptionnelle"
              label='Chambre'
              path='/chambres'
              
            />
            
            <CardItem
              src='images/restau1.jpg'
              text=" Notre restaurant combine une cuisine exquise,
               un service attentif et une atmosphère élégante pour offrir à nos convives une expérience gastronomique inoubliable."
              label='Restaurant'
              path='/hotel'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bar1.jpg'
              text="Détendez-vous et savourez des moments de convivialité dans notre bar exclusif, 
              situé au cœur de notre hôtel. Notre bar élégant offre une atmosphère chaleureuse et sophistiquée, idéale pour se retrouver entre amis, collègues ou en couple. Que vous souhaitiez déguster des cocktails artisanaux, 
              des vins raffinés ou des boissons rafraîchissantes, notre bar propose une sélection exquise pour satisfaire tous les palais."
              label='bar'
              path='/hotel'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
