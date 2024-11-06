import React from 'react';

const Policies = () => {
    return (
      <section className="bg-gray-100 px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">POLICIES</h2>

      <div className="space-y-8">
        {/* Booking Rules */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Booking Rules</h3>
          <p className="text-gray-600 mt-4">
            Room rates are calculated in Vietnamese Dong (VND) and include current service and tax fees, with breakfast provided for the standard number of guests in each room.
          </p>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>
              Payments are accepted in VND or foreign currency at the hotel’s official exchange rate at the time of payment. Payment methods include cash, credit cards, or bank transfers.
            </li>
            <li>
              Bookings are confirmed only upon receiving written confirmation from the hotel. Checking room status by phone is not considered a booking agreement.
            </li>
            <li>
              Special room requirements, such as bed type or non-smoking, may be requested but depend on room availability and are confirmed with the booking.
            </li>
            <li>
              Additional expenses, including laundry, minibar, and phone use, must be paid by the guest at check-out.
            </li>
            <li>
              For group reservations of 10+ rooms, contact the Business Department at <a href="mailto:sales@sennahue.com" className="text-blue-500">sales@sennahue.com</a> or <a href="mailto:sales1@sennahue.com" className="text-blue-500">sales1@sennahue.com</a>.
            </li>
          </ul>
        </div>

        {/* Check-in & Check-out Rules */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Check-in & Check-out Rules</h3>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>
              Check-in time is from 14:00. Early check-in may be available for an additional fee.
            </li>
            <li>
              Check-out time is 12:00. A half-day room rate applies for check-outs after 12:00, and a full day rate applies for check-outs after 18:00.
            </li>
          </ul>
        </div>

        {/* Children and Extra Beds */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Regulations on Children and Extra Beds</h3>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>One child under 12 may share a bed with parents free of charge.</li>
            <li>Children under 5 years are free, sharing bed with parents.</li>
            <li>Children aged 5–11 require a surcharge of 175,000 VND/day, sharing a bed with parents.</li>
            <li>Children 12 and older are considered adults and require an extra bed at 800,000 VND/night. Maximum one extra bed per room.</li>
          </ul>
        </div>

        {/* Cancellation Rules */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Cancellation Rules</h3>
          <p className="text-gray-600 mt-4 font-semibold">For standard price reservations:</p>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>Cancellation 14 days before check-in: No charge.</li>
            <li>Cancellation 7–14 days before check-in: 50% of total booking fee.</li>
            <li>Cancellation within 7 days of check-in: 100% of total booking fee.</li>
          </ul>
          <p className="text-gray-600 mt-4 font-semibold">For promotional price bookings:</p>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>No cancellations accepted after booking confirmation.</li>
            <li>No-shows incur full payment of the total booking fee.</li>
          </ul>
        </div>

        {/* Deposit Regulations */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Deposit Regulations</h3>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>
              All reservations require a payment card guarantee at booking.
            </li>
            <li>
              Standard rate bookings require full payment 14 days before check-in.
            </li>
            <li>
              Promotional rate bookings require full payment upon booking confirmation.
            </li>
          </ul>
        </div>

        {/* Force Majeure */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Force Majeure</h3>
          <p className="text-gray-600 mt-4">
            In cases of unforeseen events beyond the hotel’s control, such as natural disasters or emergencies, the hotel is not liable for any loss, damage, or costs incurred.
          </p>
        </div>

        {/* Pet Policy */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Pets</h3>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>Only dogs and cats are allowed, with a maximum of two pets per room.</li>
            <li>All pets must have current vaccinations, especially anti-rabies.</li>
            <li>Pets must be leashed and accompanied by their owners in public areas.</li>
          </ul>
        </div>

        {/* Reviews */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Reviews</h3>
          <p className="text-gray-600 mt-4">
            <a href="https://external-review-link.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View reviews of our hotel here
            </a>
          </p>
        </div>
      </div>
    </section>
    );
};

export default Policies;