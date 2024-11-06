import React from 'react';

const OfferCard = ({ title, shortDescription, description, perks, cta }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 h-auto transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{shortDescription}</p>
      
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{description}</h4>
      
      <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
        {perks.map((perk, index) => (
          <li key={index}>{perk}</li>
        ))}
      </ul>

      <div className="flex justify-end">
        <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg transition duration-300 hover:bg-blue-700">
          {cta}
        </button>
      </div>
    </div>
    );
};

export default OfferCard;