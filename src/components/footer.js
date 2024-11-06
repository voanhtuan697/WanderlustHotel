import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest,}
from "react-icons/fa";
import { images } from '../images/images';
const footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm uppercase tracking-wider font-semibold">
            No Drone Zone
          </p>
          <p className="text-sm italic">
            <a href="#iso" className="hover:underline">
              ISO 14001
            </a>{" "}
            |{" "}
            <a href="#heart-hotel" className="hover:underline">
              Heart Hotel
            </a>{" "}
            |
            <a href="#safety" className="hover:underline">
              Safety
            </a>{" "}
            |{" "}
            <a href="#environment" className="hover:underline">
              Environment
            </a>{" "}
            |
            <a href="#whistleblowing" className="hover:underline">
              Whistleblowing
            </a>{" "}
            |
            <a href="#cds" className="hover:underline">
              CDS "IAMALFICOAST"
            </a>
          </p>
          <p className="text-sm">
            99/8B Tran Phu, Loc Tho Ward, Nha Trang Province, Vietnam
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:+02587765912"
              className="text-blue-600 hover:underline"
            >
              0258.7765.912
            </a>
          </p>
          <p className="text-sm">
            Administration:{" "}
            <a
              href="mailto:info@example.com"
              className="text-blue-600 hover:underline"
            >
              info@wanderlusthotel.com
            </a>{" "}
            |
            <a
              href="mailto:reservations@example.com"
              className="text-blue-600 hover:underline"
            >
              reservations@wanderlusthotel.com
            </a>
          </p>
          <a
            href="https://example-review-website.com" // Thay đổi URL đến trang review của khách sạn
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            Reviews
          </a>
          <p className="text-xs text-gray-500 mt-4">
            <a href="/privacy-policy" className="hover:underline">
              privacy policy
            </a>{" "}
            -
            <a href="/cookie-policy" className="hover:underline">
              cookie policy
            </a>
          </p>
        </div>

        <div className="flex ">
        {/* vao day */}
          <img src={images.logo_big} alt="San Pietro" className="w-44 h-auto" />
          <img src={images.chungnhan1} alt="San Pietro" className="w-28 h-auto" />

        </div>
        

        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaPinterest size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
