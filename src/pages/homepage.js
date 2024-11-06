import React from "react";
import { images } from '../images/images';
const Homepage = () => {
  return (
    <div className=" bg-gray-100">
      <div className=" text-center p-8">
        <h1 className="text-4xl font-bold">Wanderlust</h1>
        <h3 className="text-2xl font-normal">Hotel</h3>
        <p className="mt-3 text-3xl">Welcome</p>
        <div className="border-b-2 mt-2 border-red-500 w-14 mx-auto"></div>
        <p className="mt-6 text-2xl font-light">Wanderlust is more than a hotel. It is a journey within a journey, where memories are created </p>
        <p className="text-2xl font-light">and never forgotten. Nestled along the golden sands of Nha Trang Beach, our hotel serves as  </p>
        <p className="text-2xl font-light">your personal sanctuary, where every room opens to breathtaking views of the East Sea. With  </p>
        <p className="text-2xl font-light">its harmonious blend of modern amenities and traditional Vietnamese hospitality, our </p>
        <p className="text-2xl font-light">establishment ensures your stay is nothing short of extraordinary</p>
        <a href="/about">About Us</a>
      </div>
      <div className="flex">
        <div className="w-2/3 p-4">
          <img src={images.xq1} alt="Wanderlust Hotel" class="w-full h-auto" />
        </div>
        <div className="w-1/3 flex flex-col">
          <div className="p-4">
            <img src={images.xq2} alt="Wanderlust Hotel" class="w-full h-auto" />
          </div>
          <div className="p-4">
            <img src={images.xq3} alt="Wanderlust Hotel" class="w-full h-auto" style={{ marginTop: '20px' }}/>
          </div>
        </div>
      </div>
      <div className="flex">
      <div className="w-1/2 p-4">
      <p class=" text-gray-600 text-center mt-20 text-2xl">
      Leads Hotel of Member Awards Winner 2023" celebrates top hotels for excellence in service and guest experience. This award highlights hotels with standout customer care and unique offerings, setting them apart in the industry.
    </p>
      </div>
      <div className="w-1/2 p-4">
        <img src={images.chungnhan} alt="Wanderlust Hotel" class="w-full h-auto" />
      </div>
      
      </div>
      
    </div>
    
  );
};

export default Homepage;
