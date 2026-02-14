import React, { useEffect, useState } from 'react';
import './Services.css';
import { IoConstructOutline } from 'react-icons/io5';
import { PiFireTruckBold } from 'react-icons/pi';
import { MdPlumbing } from 'react-icons/md';
import { GiElectricalResistance } from 'react-icons/gi';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after animation triggers
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    const target = document.querySelector('.ServicesSlide');
    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className={`ServicesSlide ${isVisible ? 'animate' : ''}`}>
        <div className="ServicesBoxes">
          {[
            {
              icon: <IoConstructOutline />,
              title: 'WHAT WE DO',
              description:
                'Transforming ideas into reality with innovative solutions, exceptional quality, and a commitment to excellence. Explore the range of services we provide to bring your projects to life with precision and expertise.',
              isFirst: true,
            },
            {
              icon: <GiElectricalResistance />,
              title: 'Electrical System',
              description:
                'Safe, efficient electrical systems designed to power your building reliably and effectively.',
            },
            {
              icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
              title: 'Construction Consultant',
              description:
                'Get expert guidance for your project from start to finish, ensuring smooth and successful results.',
            },
            {
              icon: <PiFireTruckBold />,
              title: 'Fire Fighting System',
              description:
                'Protect your property with advanced fire safety systems that are reliable and ready when you need them.',
            },
            {
              icon: <MdPlumbing />,
              title: 'Plumbing Services',
              description:
                'Count on us for fast, dependable plumbing solutions that keep your systems running smoothly.',
            },
            {
              icon: <i className="fa-solid fa-trowel-bricks"></i>,
              title: 'Reconstruction Services',
              description:
                'We restore and rebuild with care, bringing new life to your property with quality and precision.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`ServiceBox ${service.isFirst ? 'FirstServiceBox' : 'OtherServiceBox'}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {service.isFirst ? (
                <>
                  <p className="TopRow">
                    <span className="ServiceTopRowIcon">{service.icon}</span>
                    <span className="ServiceTopRowP">{service.title}</span>
                  </p>
                  <div className="bottomRow OtherServiceBox">
                    <span>Our services that we provided</span>
                    <p>{service.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="logo">{service.icon}</div>
                  <p className="OtherServiceBoxInfoTopRow">{service.title}</p>
                  <p className="OtherServiceBoxInfoBottomRow">{service.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
