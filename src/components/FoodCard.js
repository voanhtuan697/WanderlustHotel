import React from 'react';

const FoodCard = ({ image, name, description }) => {
    return (
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
    );
};

export default FoodCard;