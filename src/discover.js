
import React, { useState } from 'react';
import './discover.css';

function Discover() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const images = [
    "https://cdn.dribbble.com/userupload/6053392/file/original-90dc8e683c85166808a2e69509d4ccb2.png?compress=1&resize=300x300",
    "https://cdn.dribbble.com/userupload/6054317/file/original-0d22343f00cf68f12af1c6d34e598ede.png?compress=1&resize=300x300",
    "https://cdn.dribbble.com/userupload/16548105/file/original-58728e90304f694ed89e5de7d2798c7b.png?resize=1905x1429",
    "https://picsum.photos/id/239/650/650",
    "https://picsum.photos/id/240/650/650",
    "https://picsum.photos/id/241/650/650",
    "https://picsum.photos/id/242/650/650",
    "https://picsum.photos/id/243/650/650",
    "https://picsum.photos/id/244/650/650",
    "https://cdn.dribbble.com/userupload/16449396/file/original-9e4d180aa8d5a1eab8ccbcfe334e1abf.png?resize=1905x1429",
    "https://cdn.dribbble.com/userupload/5451680/file/original-68fe9720efaa5823427dcc639badc345.png?compress=1&resize=300x300",
    "https://picsum.photos/id/247/650/650",
    "https://picsum.photos/id/248/650/650",
    "https://picsum.photos/id/249/650/650",
    "https://picsum.photos/id/250/650/650",
    "https://picsum.photos/id/251/650/650",
    "https://picsum.photos/id/252/650/650",
    "https://picsum.photos/id/253/650/650",
    "https://picsum.photos/id/254/650/650",
    "https://picsum.photos/id/255/650/650",
    "https://picsum.photos/id/256/650/650",
    "https://picsum.photos/id/257/650/650",
    "https://picsum.photos/id/258/650/650",
    "https://picsum.photos/id/259/650/650"
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
