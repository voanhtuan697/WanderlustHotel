import React from 'react';

const Explore = () => {
  const destinations = [
    {
      title: "Vinpearl Land",
      location: "Situated on Hon Tre Island, accessible by cable car or boat.",
      area: "The large complex features various zones, including a water park, amusement park, and resort facilities.",
      activities: [
        "Water Park: Offers numerous water attractions like slides, wave pools, and kids' areas.",
        "Amusement Park: Features thrilling rides and family-friendly attractions.",
        "Aquarium: Explore a variety of unique marine life.",
        "Entertainment Shows: Enjoy performances including music, dance, and circus acts.",
        "Outdoor Activities: Options for hiking, kayaking, and other sports."
      ],
    },
    {
      title: "Mini Beach",
      location: "Mini Beach is situated on Tran Phu Street, near the city center.",
      scenery: "Charming white sand beach with clear waters and beautiful surroundings.",
      activities: [
        "Swimming: Relax in the clear waters.",
        "Water Sports: Engage in activities like beach volleyball and jet skiing.",
        "Sunset Watching: An ideal spot for witnessing stunning sunsets.",
        "Culinary Experiences: Fresh seafood dishes nearby.",
        "Photography: Perfect for capturing memorable photos."
      ],
    },
    {
      title: "The Nha Trang Stone Church",
      location: "Located on Hoang Dieu Hill, about 1 km from the city center.",
      architecture: "Built in Gothic style with stone walls and a tall vaulted roof.",
      activities: [
        "Architectural Exploration: Explore unique architectural details.",
        "Photography: Ideal spot with stunning views.",
        "City Views: Enjoy panoramic views of Nha Trang.",
        "Cultural Events: Hosts religious festivals attracting tourists."
      ],
    },
    {
      title: "Monkey Island",
      location: "Located in Nha Trang Bay, about 20 km from the city.",
      scenery: "Beautiful beaches, tropical forests, and small hiking trails.",
      activities: [
        "Observe and Feed Monkeys: Watch and feed monkeys in their habitat.",
        "Swimming: Relax on clean beaches.",
        "Sports Activities: Enjoy hiking, kayaking, and snorkeling.",
        "Photography: Capture scenic views and playful monkeys.",
        "Dining: Fresh seafood and local specialties available."
      ],
    },
    {
      title: "Dam Market",
      location: "Located in Nha Trang city center, near the coastline.",
      space: "Features unique architecture with a large dome and bustling atmosphere.",
      activities: [
        "Shopping: Find fresh seafood, local specialties, and handicrafts.",
        "Culinary Experience: Sample Nha Trang's specialties at food stalls.",
        "Cultural Exploration: Learn about local customs.",
        "Photography: Capture the vibrant market atmosphere."
      ],
    },
  ];
    return (
    //     <div className="text-center p-8">
    //   <h1 className="text-4xl font-bold">Explore</h1>
    //   <p className="mt-4 text-lg">
    //     Khám phá các phòng sang trọng của chúng tôi.
    //   </p>
    // </div>
    <section className="bg-gray-100 px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">EXPLORE</h2>
      
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-800">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
          {/* Map your gallery images here */}
          <img src="image1.jpg" alt="Gallery 1" className="w-full h-full object-cover rounded-md" />
          <img src="image2.jpg" alt="Gallery 2" className="w-full h-full object-cover rounded-md" />
          <img src="image3.jpg" alt="Gallery 3" className="w-full h-full object-cover rounded-md" />
          {/* Add more images as needed */}
        </div>
      </div>

      <div className="space-y-8">
        {destinations.map((destination, index) => (
          <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} gap-6 items-center`}>
            <div className="md:w-1/2">
              <img
                src={`${destination.title.replace(/ /g, "").toLowerCase()}.jpg`}
                alt={destination.title}
                className="w-full h-64 object-cover rounded-md shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-2xl font-semibold text-gray-800 mb-3">{destination.title}</h4>
              <p className="text-gray-600"><strong>Location:</strong> {destination.location}</p>
              {destination.area && <p className="text-gray-600 mb-3"><strong>Area:</strong> {destination.area}</p>}
              {destination.scenery && <p className="text-gray-600 mb-3"><strong>Scenery:</strong> {destination.scenery}</p>}
              {destination.architecture && <p className="text-gray-600 mb-3"><strong>Architecture:</strong> {destination.architecture}</p>}
              {destination.space && <p className="text-gray-600 mb-3"><strong>Space:</strong> {destination.space}</p>}

              <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-1">
                {destination.activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default Explore;