import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css';

export default function AboutUsMain() {
  const aboutUsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.01}
    );

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }

    return () => {
      if (aboutUsRef.current) {
        observer.unobserve(aboutUsRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div
        className={`aboutUs ${isVisible ? 'animate' : ''}`}
        ref={aboutUsRef}
      >
        <div className="leftside">
          <span className={`AboutUs ${isVisible ? 'slideFromDown' : ''}`}>
            ABOUT US
          </span>
          <span className={isVisible ? 'slideFromDown' : ''}>
            Transforming spaces creating memories
          </span>
          <p className={isVisible ? 'slideFromDown' : ''}>
            ElMech India Engineers, founded by Mr. Anil K. Shakya with over 12
            years of experience, specializes in Electrical, Firefighting, and
            Building Services. The company has successfully executed more than
            50 projects across various sectors, including IT buildings, hotels,
            hospitals, and infrastructure for both private and government
            clients. With a commitment to delivering quality from
            conceptualization to completion, ElMech India Engineers ensures
            international standards and customer satisfaction on every project.
          </p>
        </div>
        <div className="rightSide">
          <img
            className={isVisible ? 'slideFromDown' : ''}
            src="https://themedox.com/demo/steelcity/assets/img/banner/banner-image.png"
            alt="ElMech India Engineers"
          />
        </div>
      </div>
    </div>
  );
}
