import React, { useState, useEffect } from 'react';
import GetInTouchForm from './components/GetInTouchForm';
import './CSS/GetInTouchForm.css';

const images = [
  'https://images.pexels.com/photos/6474500/pexels-photo-6474500.jpeg',
  'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3862385/pexels-photo-3862385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg',
];

const GetInTouchMain = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="contactPage">
      <div
        className="leftSide"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: 'background-image 1s ease-in-out',
        }}
      ></div>
      <div className="contactForm">
        <GetInTouchForm />
      </div>
    </div>
  );
};

export default GetInTouchMain;
