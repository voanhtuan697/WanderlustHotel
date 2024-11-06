import React from 'react';

const ConfCard = ({ image, title, description, reverse = false }) => {
    return (
        <div className={`mt-16 flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center mb-8`}>
            <img src={image} alt={title} className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow-lg" />
            <div className="p-6 md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default ConfCard;