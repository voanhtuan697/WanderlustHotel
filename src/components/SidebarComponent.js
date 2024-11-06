import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem, ProSidebarProvider } from "react-pro-sidebar";
import { images } from '../images/images';
import {
  FaHome,
  FaHotel,
  FaUtensils,
  FaConciergeBell,
  FaGifts,
  FaMapMarkedAlt,
  FaFileAlt,
  FaInfoCircle,
  FaBars,
} from "react-icons/fa";
import "./Sidebar.css"; // Nhập file CSS tùy chỉnh

const SidebarComponent = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true); // Đặt giá trị khởi tạo là false
  const navigate = useNavigate();
  

  const handleMenuItemClick = (path) => {
    navigate(path);
    setCollapsed(true);
  };
  return (
    <ProSidebarProvider>
      <Sidebar collapsed={collapsed} onMouseEnter={() => setCollapsed(false)} // Mở rộng sidebar khi hover vào Menu
          onMouseLeave={() => setCollapsed(true)}
         style={{ 
        position: "fixed", // Giữ cho thanh sidebar dính 
        top: 0, // Đặt ở trên cùng 
        left: 0, // Đặt ở bên trái 
        
        height: "100%", // Chiều cao của sidebar chiếm toàn bộ chiều cao màn hình 
        // backgroundColor: "#333", // Màu nền của sidebar 
        // transition: "width 0.3s ease", // Hiệu ứng chuyển tiếp cho chiều rộng 
        zIndex: 1000, // Đảm bảo rằng sidebar nằm trên các thành phần khác
    }}
      >
        <div className="flex items-center justify-between p-4" >
          <img src={images.logo_mini} alt=""  className={` text-lg pt-2 ${
              collapsed ? "block" : "hidden" 
            }`}/>
          <h2
            className={`text-black text-lg pt-2 font-bold ${
              collapsed ? "hidden" : "block"
            }`}
            
          >
            Wanderlust
          </h2>
        </div>

        <Menu iconShape="circle" >
          <MenuItem
            icon={<FaHome />}
            onClick={() => handleMenuItemClick("/")}
            className={location.pathname === "/" ? "active" : ""}
          >
            Trang Chủ
          </MenuItem>
          <MenuItem
            icon={<FaHotel />}
            onClick={() => handleMenuItemClick("/rooms")}
            className={location.pathname === "/rooms" ? "active" : ""}
          >
            Phòng & Suite
          </MenuItem>
          <MenuItem
            icon={<FaUtensils />}
            onClick={() => handleMenuItemClick("/restaurant")}
            className={location.pathname === "/restaurant" ? "active" : ""}
          >
            Nhà Hàng & Bar
          </MenuItem>
          <MenuItem
            icon={<FaConciergeBell />}
            onClick={() => handleMenuItemClick("/services")}
            className={location.pathname === "/services" ? "active" : ""}
          >
            Dịch Vụ & Tiện Nghi
          </MenuItem>
          <MenuItem
            icon={<FaConciergeBell />}
            onClick={() => handleMenuItemClick("/conference")}
            className={location.pathname === "/conference" ? "active" : ""}
          >
            Hội Nghị & Sự Kiện
          </MenuItem>
          <MenuItem
            icon={<FaGifts />}
            onClick={() => handleMenuItemClick("/offers")}
            className={location.pathname === "/offers" ? "active" : ""}
          >
            Ưu Đãi
          </MenuItem>
          <MenuItem
            icon={<FaMapMarkedAlt />}
            onClick={() => handleMenuItemClick("/explore")}
            className={location.pathname === "/explore" ? "active" : ""}
          >
            Khám Phá
          </MenuItem>
          <MenuItem
            icon={<FaFileAlt />}
            onClick={() => handleMenuItemClick("/policies")}
            className={location.pathname === "/policies" ? "active" : ""}
          >
            Chính Sách
          </MenuItem>
          <MenuItem
            icon={<FaInfoCircle />}
            onClick={() => handleMenuItemClick("/about")}
            className={location.pathname === "/about" ? "active" : ""}
          >
            Về Chúng Tôi
          </MenuItem>
        </Menu>

        <div className="text-center p-4 text-black" >
          © 2024 Wanderlust Hotel
        </div>
      </Sidebar>
    </ProSidebarProvider>
  );
};

export default SidebarComponent;
