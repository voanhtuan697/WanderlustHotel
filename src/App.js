import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Rooms from './pages/rooms';
import Restaurant from './pages/restaurant';
import Services from './pages/services';
import Conference from './pages/conference';
import Offers from './pages/offers';
import Explore from './pages/explore';
import Policies from './pages/policies';
import About from './pages/about';
import Footer from './components/footer';
import './App.css';
import SuperiorDoubleRoom from './roomList/SuperiorDoubleRoom';
import DeluxeKingDoubleRoom from './roomList/DeluxeKingDoubleRoom';
import DeluxeDoubleRoom from './roomList/DeluxeDoubleRoom';
import DeluxeTwinRoom from './roomList/DeluxeTwinRoom';
import SuiteExecutiveRoom from './roomList/SuiteExecutiveRoom';
import SuiteRoom from './roomList/SuiteRoom';
import SuperiorRoom3 from './roomList/SuperiorRoom3';
import SuperiorTwinRoom from './roomList/SuperiorTwinRoom';
import HeaderComponent from './components/HeaderComponent';

export default function App() {
  return (
    <Router>
      {/* Header */}
      <HeaderComponent />
      
      <div className="main-content-container">
        <main className="p-4">
          <Routes>
            <Route path="/WanderlustHotel" element={<Homepage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/services" element={<Services />} />
            <Route path="/conference" element={<Conference />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/about" element={<About />} />
            
            {/* Room Routes */}
            <Route path="/rooms/DeluxeDoubleRoom" element={<DeluxeDoubleRoom />} />
            <Route path="/rooms/DeluxeKingDoubleRoom" element={<DeluxeKingDoubleRoom />} />
            <Route path="/rooms/DeluxeTwinRoom" element={<DeluxeTwinRoom />} />
            <Route path="/rooms/SuiteExecutiveRoom" element={<SuiteExecutiveRoom />} />
            <Route path="/rooms/SuiteRoom" element={<SuiteRoom />} />
            <Route path="/rooms/SuperiorDoubleRoom" element={<SuperiorDoubleRoom />} />
            <Route path="/rooms/SuperiorRoom3" element={<SuperiorRoom3 />} />
            <Route path="/rooms/SuperiorTwinRoom" element={<SuperiorTwinRoom />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
