import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function CustomImageGallery() {
  const images = [
    {
      original: process.env.PUBLIC_URL + '/images/bar1.jpg',
      thumbnail: process.env.PUBLIC_URL + '/images/bar1.jpg',
    },
    {
      original: process.env.PUBLIC_URL + '/images/bar6.jpg',
      thumbnail: process.env.PUBLIC_URL + '/images/bar6.jpg',
    },
    { 
      original: process.env.PUBLIC_URL + '/images/bar5.jpg',
      thumbnail: process.env.PUBLIC_URL + '/images/bar5.jpg',
    },
    {
      original: process.env.PUBLIC_URL + '/images/bar2.jpg',
      thumbnail: process.env.PUBLIC_URL + '/images/bar2.jpg',
    },
    {
      original: process.env.PUBLIC_URL + '/images/bar3.jpg',
      thumbnail: process.env.PUBLIC_URL + '/images/bar3.jpg',
    },
    {
      original: process.env.PUBLIC_URL + '/images/bar4.jpg',
      thumbnail: process.env.PUBLIC_URL + '/images/bar4.jpg',
    },
  ];

  return (
    <div>
      <ReactImageGallery items={images} />
    </div>
  );
}

export default CustomImageGallery;