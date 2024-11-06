import React from 'react';
import { images } from '../images/images';

const DeluxeTwinRoom = () => {
    return (
      <section className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      {/* Tiêu đề */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Deluxe Twin Room</h2>
      <img src={images.RoomDeluxTwin} alt="Wanderlust Hotel" class="w-full h-auto" />
        <div className='flex mt-9'>
        <div className="mb-8 w-1/2">
          <h3 className="text-xl font-semibold text-gray-700">Room Features</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>2 single beds</li>
            <li>36m² room</li>
            <li>Sea view</li>
            <li>City view</li>
            <li>Balcony</li>
            <li>Air conditioning</li>
            <li>Private bathroom</li>
            <li>Flat-screen TV</li>
            <li>Soundproofing</li>
            <li>Minibar</li>
            <li>Free wifi</li>
          </ul>
        </div>

        {/* Tùy chọn giá */}
        <div className='w-1/2'>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Pricing Options</h3>

          {/* Giá 1 */}
          <div className="border rounded-lg p-4 mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Option 1: ( 2 people )</h4>
            <p className="text-gray-600">Tax and fees are included</p>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>✓ Free parking</li>
              <li>✓ High-speed internet</li>
            </ul>
            <p className="text-blue-600 font-bold mt-4">Price: 1.980.000 VND / night</p>
          </div>

          {/* Giá 2 */}
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-semibold text-gray-800">Option 2: ( 2 people )</h4>
            <p className="text-gray-600">Tax and fees are included</p>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>✓ Continental breakfast</li>
              <li>✓ Free parking</li>
              <li>✓ High-speed internet</li>
            </ul>
            <p className="text-blue-600 font-bold mt-4">Price: 2.400.000 VND / night</p>
          </div>
        </div>
        </div>
        
      </div>
    </section>
    );
};

export default DeluxeTwinRoom;