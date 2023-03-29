import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Chambres, restau, bar, rooftop</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/chambre.jpg'
              text='Description des chambres'
              label='Chambre'
              path='/services'
            />
            <CardItem
              src='images/restau.jpg'
              text='Description des restaurants'
              label='Restaurant'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bar.jpg'
              text='description bar'
              label='bar'
              path='/services'
            />
            <CardItem
              src='images/rooftop.jpg'
              text='description du rooftop'
              label='Rooftop'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
