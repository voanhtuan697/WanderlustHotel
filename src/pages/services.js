import React from "react";
import ImageCard from "../components/ImageCard";
import { images } from "../images/images";

const services = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Services & Amenities</h1>
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Spa Services</h2>
        <h3 className="text-xl font-semibold text-gray-700">Ultimate Relaxation at Serenity Spa</h3>
        <p className="text-gray-600 mt-2">
          At Wanderlust Spa, we invite you to indulge in a flawless relaxation experience with our premier health and beauty treatments. Our dedicated and professional staff is ready to cater to your needs with our standout offerings:
        </p>
        <ul className="text-gray-600 mt-4 space-y-2">
          <li>• <span className="font-semibold">Operating Hours:</span> 11:00 AM - 6:00 PM daily.</li>
          <li>• <span className="font-semibold">Relaxation Massage:</span> A 60-minute session designed to alleviate stress and relax your muscles, priced at only 800,000 VND.</li>
          <li>• <span className="font-semibold">Aromatherapy Treatment:</span> Utilizing natural essential oils, this 90-minute treatment enhances mood and promotes well-being, available for just 1,200,000 VND.</li>
          <li>• <span className="font-semibold">Facial Care:</span> An intensive skincare program with organic products, providing a radiant complexion, priced at only 700,000 VND for 60 minutes.</li>
        </ul>
        <p className="text-gray-600 mt-4">
          The spa's luxurious ambiance, accompanied by soothing music and natural fragrances, will ensure the utmost tranquility for you. Additionally, we offer supplementary services such as nail care and hair treatments.
        </p>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-4">
              <ImageCard image={images.spa3}/>
              <ImageCard image={images.spa4}/>
              <ImageCard image={images.spa5}/>
              <ImageCard image={images.spa6}/>
            </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Pool</h2>
        <h3 className="text-xl font-semibold text-gray-700">Infinity Pool at Sky Pool</h3>
        <p className="text-gray-600 mt-2">
          Our infinity pool, located on the hotel’s rooftop, provides stunning views of the sea and cityscape, making it the perfect oasis for relaxation after a day of exploration.
        </p>
        <ul className="text-gray-600 mt-4 space-y-2">
          <li>• <span className="font-semibold">Operating Hours:</span> 7:00 AM - 9:00 PM daily.</li>
          <li>• <span className="font-semibold">Amenities:</span> Sun loungers, a bar area serving refreshing beverages, and complimentary towels. We also host poolside parties and special events regularly.</li>
        </ul>
        <div className="max-w-4xl overflow-hidden rounded-lg shadow-lg m-auto">
          <img src={images.pool2} alt="123" className="w-full h-auto object-cover" />
        </div>
      </section>
    </div>
    
  );
};

export default services;
