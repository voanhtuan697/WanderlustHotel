import React from 'react';

const ImageCard = ({ image, altText }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={altText} className="w-full h-56 object-cover" />
    </div>
  );
};

export default ImageCard;
