import React from 'react';
import OfferCard from '../components/OfferCard';

const Offers = () => {
    return (
      <div className='bg-gray-100 p-8'>
      <h1 className="text-4xl font-bold text-center mb-10">Exclusive Offers</h1>
        <section className="container mx-auto my-16 px-4">
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Indulge in the essence of luxury with our exclusive offers designed to enhance your Nha Trang experience. Book now and let every moment become a cherished memory.
      </p>
  
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <OfferCard
          title="Whispers of Romance Getaway"
          shortDescription="Sweep your partner off their feet with a beachside candlelit dinner, soothing couples' spa, and champagne."
          description="This package includes a luxurious 3-night stay in an Ocean View Suite, a romantic private dinner by the beach, a couples' spa session, and more."
          perks={[
            'Ocean View Suite - 3 nights',
            'Complimentary champagne',
            'Private beach dinner',
            'Couples’ spa session',
          ]}
          cta="DETAIL – BOOK NOW"
        />
        
        <OfferCard
          title="Fun for All, All for Fun"
          shortDescription="Free meals for kids, a family cooking class, and a memorable island adventure await you!"
          description="Our family package includes a 15% discount on stays of 5 nights or more, free meals for children, daily activities, and an island tour."
          perks={[
            '15% discount on 5+ nights',
            'Kids stay and eat free',
            'Supervised activities',
            'Island hopping tour',
          ]}
          cta="DETAIL – BOOK NOW"
        />
  
        <OfferCard
          title="Early Bird Special"
          shortDescription="Book early, save more! Enjoy discounts and complimentary upgrades."
          description="Book your stay at least 60 days in advance and get a 15% discount along with a free room upgrade. Flexible cancellation is included."
          perks={[
            '15% discount',
            'Free room upgrade',
            'Flexible cancellation',
            'Book 60+ days in advance',
          ]}
          cta="DETAIL – BOOK NOW"
        />
  
        <OfferCard
          title="Direct Booking Perks"
          shortDescription="Unlock VIP treatment with exclusive benefits for direct bookings."
          description="Experience early check-in, late check-out, and discounts on dining and spa services by booking directly through our website."
          perks={[
            'Early check-in, late check-out',
            'Dining discounts',
            'Spa service discounts',
            'Exclusive perks for direct booking',
          ]}
          cta="BOOK NOW"
        />
  
        <OfferCard
          title="Work & Relax"
          shortDescription="Blend productivity with paradise! Includes Wi-Fi, lounge access, and a sunset cocktail session."
          description="Our Work & Relax package is ideal for those looking to balance business with leisure, featuring inspiring views, work-friendly amenities, and more."
          perks={[
            'High-speed Wi-Fi',
            'Executive lounge access',
            'Sunset cocktail session',
            'Flexible work and relax space',
          ]}
          cta="DETAIL – BOOK NOW"
        />
      </div>
    </section>
      </div>
      
    );
};

export default Offers;