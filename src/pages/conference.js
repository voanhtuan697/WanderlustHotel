import React from 'react';
import { images } from '../images/images';
import ConfCard from '../components/ConfCard';

const conference = () => {
    return (
      <div className='bg-gray-100 p-8'>
      <h1 className="text-4xl font-bold text-center mb-10">Conference & Event Services</h1>
        <div className="container mx-auto my-10 px-4">
        <div className="text-center mb-8">
      <p className="text-lg text-gray-700">
        When searching for an exquisite venue for your next gathering or business meeting, Wanderlust Hotel should be your premier choice. With a capacity of up to 160 guests, our meeting rooms on the third floor provide modern amenities and a 4-star service standard, catering to all your banquet, conference, and seminar needs. Equipped with the latest technology, high-speed internet, and a state-of-the-art audio-visual system, we guarantee an unforgettable experience for your event.
      </p>
    </div>
    <ConfCard
      image={images.food1}
      title="Grand Ballroom"
      description="The Grand Ballroom, with a generous area of 160 square meters, is perfectly suited for various events, conferences, and banquets. Featuring large windows with breathtaking city views of Nha Trang, our modern sound and lighting systems, paired with expertly crafted cuisine, will elevate your event."
      reverse={false}
    />
    <ConfCard
      image={images.bar3}
      title="Ballroom"
      description="The Ballroom, measuring 80 square meters, is designed for intimate conferences and gatherings. It features modern amenities and abundant natural light, providing essential tools such as screens and whiteboards to ensure a seamless event."
      reverse={true}
    />
    <ConfCard
      image={images.res3}
      title="Weddings"
      description="Your wedding will become a masterpiece at Wanderlust Hotel, with stunning floral decorations, radiant lighting, and exquisite cuisine, creating a perfect beginning for your journey together."
      reverse={false}
    />
  </div>
      </div>
    
    );
};

export default conference;