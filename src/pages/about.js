import React from 'react';
import { images } from '../images/images';
const about = () => {
    return (
      <section className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Tiêu đề */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          About Wanderlust Nha Trang Hotel
        </h2>

        {/* Bố trí ảnh và văn bản */}
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          {/* Hình ảnh chính */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={images.sanhchinh}
              alt="Wanderlust Nha Trang Hotel"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Văn bản giới thiệu */}
          <div className="w-full md:w-1/2 text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong>Wanderlust Nha Trang Hotel</strong> is proudly located in a prime location on the shore of Tran Phu beach, known for its stunning natural beauty and fine white sand. Established in 2004, by Vietnamese businessmen, the hotel quickly became a symbol of luxury and hospitality in the coastal city.
            </p>
            <p>
              From the early days, Wanderlust has focused on building a delicate resort space, harmoniously combining modern architecture and natural beauty. In 2010, with a comprehensive upgrade investment, Wanderlust launched luxuriously designed new rooms, along with modern facilities such as swimming pools, meeting rooms, spas, and restaurants serving local and international cuisine.
            </p>
          </div>
        </div>

        {/* Gallery Hình ảnh bổ sung */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Hình ảnh 1 */}
          <div className="w-full">
            <img
              src={images.pool}
              alt="Luxury Pool"
              className="rounded-lg shadow-md w-full h-auto"
            />
            <p className="text-center mt-2 text-gray-600">Luxurious Pool Area</p>
          </div>

          {/* Hình ảnh 2 */}
          <div className="w-full">
            <img
              src={images.res3}
              alt="Gourmet Restaurant"
              className="rounded-lg shadow-md w-full h-auto"
            />
            <p className="text-center mt-2 text-gray-600">Gourmet Restaurant</p>
          </div>

          {/* Hình ảnh 3 */}
          <div className="w-full">
            <img
              src={images.spa1}
              alt="Relaxing Spa"
              className="rounded-lg shadow-md w-full"
              style={{
                height: "248px",
              }}
            />
            <p className="text-center mt-2 text-gray-600">Relaxing Spa Experience</p>
          </div>
        </div>

        {/* Nội dung bổ sung */}
        <div className="mt-10 space-y-4 text-gray-700">
          <p>
            Hotels are not just resorts; they play an important role in Nha Trang tourism development. Every year, Wanderlust attracts millions of domestic and foreign tourists, creates hundreds of jobs for locals, and positively contributes to the regional economy. The hotel regularly organizes cultural events and environmental protection activities to raise community awareness and preserve Nha Trang's natural beauty.
          </p>
          <p>
            Our mission is to bring unforgettable resort experiences and connect visitors with the beauty and culture of Nha Trang. We are committed to continuously improving our services to ensure customer satisfaction and encourage return visits.
          </p>
          <p>
            At Wanderlust, every visitor is greeted with dedication and professionalism. Our well-trained, passionate staff are true brand ambassadors, ready to meet all the needs of our guests. We are proud to offer memorable experiences, from sunrise by the sea to romantic evenings under shimmering lights.
          </p>
          <p>
            Looking to the future, Wanderlust Nha Trang Hotel is constantly innovating and developing, aiming to become the top destination for those who seek peace and luxury in the heart of this beautiful coastal city.
          </p>
        </div>
      </div>
    </section>
    );
};

export default about;