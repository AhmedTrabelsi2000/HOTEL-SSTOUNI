import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function CustomImageGallery() {
  const images = [
    {
      original: process.env.PUBLIC_URL + 'images/chambre5.jpg',
      thumbnail: process.env.PUBLIC_URL + 'images/chambre5.jpg',
    },
    {
      original: process.env.PUBLIC_URL + 'images/chambre2.jpg',
      thumbnail: process.env.PUBLIC_URL + 'images/chambre2.jpg',
    },
    {
      original: process.env.PUBLIC_URL + 'images/chambre3.jpg',
      thumbnail: process.env.PUBLIC_URL + 'images/chambre3.jpg',
    },
    {
      original: process.env.PUBLIC_URL + 'images/chambre4.jpg',
      thumbnail: process.env.PUBLIC_URL + 'images/chambre4.jpg',
    },
    {
      original: process.env.PUBLIC_URL + 'images/chambre1.jpg',
      thumbnail: process.env.PUBLIC_URL + 'images/chambre1.jpg',
    },
    {
      original: process.env.PUBLIC_URL + 'images/chambre6.jpg',
      thumbnail: process.env.PUBLIC_URL + 'images/chambre6.jpg',
    },
  ];

  return (
    <div>
      <ReactImageGallery items={images} />
    </div>
  );
}

export default CustomImageGallery;