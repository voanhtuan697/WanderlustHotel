import React from 'react';
import { images } from '../images/images';
import FoodCard from '../components/FoodCard';
import ImageCard from '../components/ImageCard';
const restaurant = () => {
    return (
      <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">La Lana Restaurant & Sky Bar</h1>

      {/* Restaurant Introduction */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Restaurant Introduction</h2>
        <p>
              La Lana Restaurant is a secluded gem located just 100 meters from the Wanderlust Hotel, 
              offering a luxurious ambiance with breathtaking panoramic views of the sea.
              Specializing in Mediterranean cuisine harmonized with Vietnamese flavors, La Lana provides 
              a modern architectural style and a warm atmosphere, making it perfect for family gatherings, 
              business meetings, or romantic evenings.
            </p>
            
            {/* <div className="flex gap-4">
              <img src={images.res4} alt="La Lana Restaurant" className="w-1/3 h-48 object-cover" />
              <img src={images.res5} alt="La Lana Ambiance" className="w-1/3 h-48 object-cover" />
              <img src={images.res6} alt="La Lana Interior" className="w-1/3 h-48 object-cover" />
            </div> */}
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
              <ImageCard image={images.res4}/>
              <ImageCard image={images.res5}/>
              <ImageCard image={images.res6}/>
            </div>
      </section>

      {/* Signature Menu */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Signature Menu</h2>
        <div className="space-y-4 mb-4">
            <h3 className="text-xl font-semibold">Appetizers</h3>
            <div className='flex space-x-4'>
              <FoodCard  image={images.salad} name="La Lana Seafood Salad" description="A delightful blend of fresh shrimp, squid, and salmon, 
              with organic greens from local farms."/>
            </div>
            
          </div>
          <div className="space-y-4 mb-4">
            <h3 className="text-xl font-semibold">Main Courses</h3>
            <div className='flex space-x-4'>
              <FoodCard  image={images.beef} name="Grilled Wagyu Beef" description="Premium Australian Wagyu, expertly grilled and served with 
              a green pepper sauce."/>
              <FoodCard  image={images.salmon} name="Pan-Seared Salmon" description="Norwegian salmon drizzled with 
              passion fruit butter sauce and creamy mashed potatoes."/>
            </div>
          </div>
          <div className="space-y-4 mb-4">
            <h3 className="text-xl font-semibold">Dessert</h3>
            <div className='flex space-x-4'>
              <FoodCard  image={images.cake} name="Chocolate Mousse Cake" description="A velvety chocolate mousse topped with Belgian dark 
              chocolate, with vanilla cream."/>
            </div>
          </div>
          <div className="space-y-4 mb-4">
          <h3 className="text-xl font-semibold">Seafood Buffet</h3>
            <p>
              Enjoy a seafood buffet featuring the freshest catches, including lobster, crab, and squid.
            </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ImageCard image={images.food1}/>
            <ImageCard image={images.food2}/>
            <ImageCard image={images.food3}/>
          </div>
          </div>
          
      </section>

      {/* Menu Pricing */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Menu Pricing</h2>
        <ul className="space-y-2">
          <li>• <strong>Fresh Seafood:</strong> 200,000 - 500,000 VND per dish</li>
          <li>• <strong>Grilled Wagyu Beef:</strong> 250,000 - 350,000 VND per portion</li>
          <li>• <strong>Seafood Buffet:</strong> 600,000 - 1,000,000 VND per guest</li>
        </ul>
      </section>

      {/* Sky Bar Introduction */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sky Bar</h2>
        <div className="flex flex-col">
          <div className="space-y-4">
            <p>
              Sky Bar, nestled beside the rooftop pool of our hotel, offers the perfect setting to savor 
              exquisite cocktails against the backdrop of breathtaking sunsets.
            </p>
            <h3 className="text-xl font-semibold">Signature Cocktail</h3>
            <p>
              <strong>"Sunset Breeze"</strong> - A vibrant cocktail with rum, fresh orange juice, and a hint 
              of crushed strawberries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ImageCard image={images.bar1}/>
              <ImageCard image={images.bar2}/>
              <ImageCard image={images.bar3}/>
            </div>
          </div>

        </div>
      </section>

      {/* Operating Hours */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Operating Hours</h2>
        <ul className="space-y-2">
          <li><strong>La Lana Restaurant:</strong></li>
          <li>• Breakfast: 6:30 AM - 10:00 AM</li>
          <li>• Lunch: 12:00 PM - 2:00 PM</li>
          <li>• Dinner: 6:00 PM - 10:00 PM</li>
          <li className="mt-4"><strong>Sky Bar:</strong> Open daily from 5:00 PM - 11:00 PM</li>
        </ul>
      </section>
    </div>
    );
};

export default restaurant;