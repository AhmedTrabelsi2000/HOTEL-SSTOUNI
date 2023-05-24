import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function CustomImageGallery() {
  const images = [
    {
      original: process.env.PUBLIC_URL + 'images/restau1.jpg',
      thumbnail: process.env.PUBLIC_URL + 'images/restau1.jpg',
    },
    {
      original: process.env.PUBLIC_URL + 'images/restau3.jpg',
      thumbnail: process.env.PUBLIC_URL + 'images/restau3.jpg',
    },
    {
      original: process.env.PUBLIC_URL + 'images/restau2.jpg',
      thumbnail: process.env.PUBLIC_URL + 'images/restau2.jpg',
    },
  ];

  return (
    <div>
      <ReactImageGallery items={images} />
    </div>
  );
}

export default CustomImageGallery;