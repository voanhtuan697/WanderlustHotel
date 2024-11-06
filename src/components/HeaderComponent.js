import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaHotel,
  FaUtensils,
  FaConciergeBell,
  FaGifts,
  FaMapMarkedAlt,
  FaFileAlt,
  FaInfoCircle,
} from "react-icons/fa";
import "./Header.css"; // File CSS tùy chỉnh

const HeaderComponent = () => {
    const location = useLocation();
  const navigate = useNavigate();

  const handleMenuItemClick = (path) => {
    navigate(path);
  };
    return (
        <header className="header-container">
      <div className="header-content">
        <h2 className="header-logo">Wanderlust Hotel</h2>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className={`nav-item ${location.pathname === "/WanderlustHotel" ? "active" : ""}`}>
              <button onClick={() => handleMenuItemClick("/WanderlustHotel")}>
                <FaHome /> Trang Chủ
              </button>
            </li>
            <li className={`nav-item ${location.pathname === "/rooms" ? "active" : ""}`}>
              <button onClick={() => handleMenuItemClick("/rooms")}>
                <FaHotel /> Phòng & Suite
              </button>
            </li>
            <li className={`nav-item ${location.pathname === "/restaurant" ? "active" : ""}`}>
              <button onClick={() => handleMenuItemClick("/restaurant")}>
                <FaUtensils /> Nhà Hàng & Bar
              </button>
            </li>
            <li className={`nav-item ${location.pathname === "/services" ? "active" : ""}`}>
              <button onClick={() => handleMenuItemClick("/services")}>
                <FaConciergeBell /> Dịch Vụ & Tiện Nghi
              </button>
            </li>
            <li className={`nav-item ${location.pathname === "/conference" ? "active" : ""}`}>
              <button onClick={() => handleMenuItemClick("/conference")}>
                <FaConciergeBell /> Hội Nghị & Sự Kiện
              </button>
            </li>
            <li className={`nav-item ${location.pathname === "/offers" ? "active" : ""}`}>
              <button onClick={() => handleMenuItemClick("/offers")}>
                <FaGifts /> Ưu Đãi
              </button>
            </li>
            <li className={`nav-item ${location.pathname === "/explore" ? "active" : ""}`}>
              <button onClick={() => handleMenuItemClick("/explore")}>
                <FaMapMarkedAlt /> Khám Phá
              </button>
            </li>
            <li className={`nav-item ${location.pathname === "/policies" ? "active" : ""}`}>
              <button onClick={() => handleMenuItemClick("/policies")}>
                <FaFileAlt /> Chính Sách
              </button>
            </li>
            <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
              <button onClick={() => handleMenuItemClick("/about")}>
                <FaInfoCircle /> Về Chúng Tôi
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    );
};

export default HeaderComponent;