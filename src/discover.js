import React, { useState } from 'react';

function Discover() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <div
          key={index}
          className="image-container"
           onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={src} alt="" />
          {hoveredIndex === index && (
            <div className="overlay-buttons">
              <button className="overlay-button like">Like</button>
              <button className="overlay-button comment">Comment</button>
              <button className="overlay-button share">Share</button>
              <button className="overlay-button save">Save</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default Discover;
