import React, { useEffect } from 'react';
import './CompanyStateSlide.css';

export default function CompanyStateSlide() {
  const animateNumbers = (targetElements) => {
    targetElements.forEach((el) => {
      let count = 0;
      const target = parseInt(el.getAttribute('data-target'), 10);
      const increment = target / 100;
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          el.textContent = target;
          clearInterval(interval);
        } else {
          el.textContent = Math.floor(count);
        }
      }, 20);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const numberElements = document.querySelectorAll('.number');
            animateNumbers(numberElements);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    const target = document.querySelector('.reviewOfWork');
    if (target) observer.observe(target);
  }, []);

  return (
    <div className="reviewOfWork">
      {[
        { target: '300', text: 'Happy Customers' },
        { target: '310', text: 'Completed Projects' },
        { target: '23', text: 'Team Members' },
        { target: '12', text: 'Years of Working' },
      ].map((item, index) => (
        <div className="boxes" key={index}>
          <div>
            <div className="numberWrapper">
              <p data-target={item.target} className="number">
                0
              </p>
              <span className="plusSign">+</span>
            </div>
            <span>{item.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
