import React from "react";
import RoomCard from "../components/RoomCard";
import { images } from '../images/images';

const rooms = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Our Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <RoomCard 
          image={images.RoomSuperDouble}
          title="Superior Double Room"
          url="/rooms/SuperiorDoubleRoom"
        />
        <RoomCard 
          image={images.RoomSuperTubl}
          title="Superior Twin Room"
          url="/rooms/SuperiorTwinRoom"
        />
        <RoomCard 
          image={images.DoubleDeluxeRoom}
          title="Deluxe Double Room"
          url="/rooms/DeluxeDoubleRoom"
        />
        <RoomCard 
          image={images.RoomDeluxTwin}
          title="Deluxe Twin Room"
          url="/rooms/DeluxeTwinRoom"
        />
        <RoomCard 
          image={images.RoomDeluxeKingdouble}
          title="Deluxe King Double room "
          url="/rooms/DeluxeKingDoubleRoom "
        />
        <RoomCard 
          image={images.RoomExecutiveSuite}
          title="Suite Executive Room"
          url="/rooms/SuiteExecutiveRoom"
          description="The highlights of this double room include a pool with a view and a hot tub."
        />
        <RoomCard 
          image={images.RoomSuite}
          title="Suite Room"
          url="/rooms/SuiteRoom"
        />
        <RoomCard 
          image={images.superior3people}
          title="Superior Room for 3 people Room"
          url="/rooms/SuperiorRoom3"
        />
      </div>
    </div>
  );
};

export default rooms;
