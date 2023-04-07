import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './NavBar';
import FrontPage from './FrontPage';
import Discover from './discover';
import Profile from './profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/FrontPage" element={<FrontPage />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
