// 

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from './NavBar';
import FrontPage from './FrontPage';
import Discover from './discover';
import Profile from './profile';
import Hiring from './Hiring';
import JobList from './joblist';


function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/joblist" element={<JobList />} />
        </Routes>
    </div>
  );
}


export default App;
