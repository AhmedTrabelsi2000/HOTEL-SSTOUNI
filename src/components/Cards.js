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
              text='Description des chambres'
              label='Chambre'
              path='/chambres'
              
            />
            
            <CardItem
              src='images/restau1.jpg'
              text='Description des restaurants'
              label='Restaurant'
              path='/hotel'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bar1.jpg'
              text='description bar'
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
