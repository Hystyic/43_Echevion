import React from 'react';
import SearchBar from './SearchBar';
import catto from './cattt.png';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={catto} alt="Catto" />
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Following</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
        <SearchBar />
      </div>
    </nav>
  );
}

export default NavBar;
