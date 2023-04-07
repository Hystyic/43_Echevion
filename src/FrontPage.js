import React from 'react';
import './index.css';
import myImage from './19742.jpg';
import artImage1 from './colorful-gfbfe03d3d_1920.jpg';
import artImage2 from './stones-g1f665a90f_1920.jpg';
import artImage3 from './forest-g27bb04249_1920.jpg';

function FrontPage() {
  return (
    <div className="frontpage">
      <img src={myImage} alt="My image" className="center-image" />
     
    </div>
  );
}

export default FrontPage;
