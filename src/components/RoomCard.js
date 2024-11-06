import React from 'react';
import { useNavigate } from 'react-router-dom';


const RoomCard = ({ image, title, description, url}) => {
    const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(url);
  };
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Hình ảnh */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Nội dung */}
      <div className="p-5">
        {/* Tiêu đề */}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

        {/* Mô tả ngắn */}
        <p className="text-gray-600 mt-2">
          {description}
        </p>

        {/* Nút Xem Thêm */}
        <button
          onClick={handleViewMore}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
