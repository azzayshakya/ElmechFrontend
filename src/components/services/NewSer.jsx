import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { IoConstructOutline } from 'react-icons/io5';
import { PiFireTruckBold } from 'react-icons/pi';
import { MdPlumbing } from 'react-icons/md';
import { GiElectricalResistance } from 'react-icons/gi';
import { FaScrewdriverWrench, FaTrowelBricks } from 'react-icons/fa6';

const SERVICES = [
  {
    icon: <GiElectricalResistance />,
    title: 'Electrical Systems',
    description:
      'Safe, efficient electrical systems designed to power your building reliably. From panel upgrades to full installations, we handle it all.',
    stats: '500+ Projects',
    tag: 'Licensed & Insured',
  },
  {
    icon: <FaScrewdriverWrench />,
    title: 'Construction Consulting',
    description:
      'Expert project guidance from planning to handover. We ensure your construction runs on time, on budget, and to specification.',
    stats: '15+ Years',
    tag: 'End-to-End',
  },
  {
    icon: <PiFireTruckBold />,
    title: 'Fire Fighting Systems',
    description:
      'Advanced fire detection, suppression, and safety systems engineered to protect lives and property around the clock.',
    stats: 'NFPA Compliant',
    tag: '24/7 Support',
  },
  {
    icon: <MdPlumbing />,
    title: 'Plumbing Services',
    description:
      'Fast, dependable plumbing solutions — from water supply and drainage to full MEP coordination across commercial projects.',
    stats: '1,200+ Clients',
    tag: 'Rapid Response',
  },
  {
    icon: <FaTrowelBricks />,
    title: 'Reconstruction Services',
    description:
      'We restore and rebuild with precision, bringing new life to aging structures. Structural upgrades, retrofits, and full refurbishments.',
    stats: '98% Satisfaction',
    tag: 'Quality Assured',
  },
];

export default function NewServices() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (headerRef.current) headerObserver.observe(headerRef.current);
    return () => headerObserver.disconnect();
  }, []);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setVisibleCards((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.12 }
    );
    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });
    return () => cardObserver.disconnect();
  }, []);

  return (
    <section className="services-section">
      <div className="services-bg-orb services-bg-orb--1" aria-hidden="true" />
      <div className="services-bg-orb services-bg-orb--2" aria-hidden="true" />

      <div className="services-container">
        {/* ── Section Header ── */}
        <div
          ref={headerRef}
          className={`services-header ${headerVisible ? 'services-header--visible' : ''}`}
        >
          <div className="services-header__eyebrow">
            <span className="services-header__icon">
              <IoConstructOutline />
            </span>
            <span>What We Do</span>
          </div>
          <h2 className="services-header__title">
            Engineering Solutions <br />
            <em>Built to Last</em>
          </h2>
          <p className="services-header__subtitle">
            From concept to completion, we deliver end-to-end building services with precision,
            compliance, and craftsmanship that stands the test of time.
          </p>

          {/* Key Metrics */}
          <div className="services-metrics">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '15+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support Available' },
            ].map((m) => (
              <div className="services-metric" key={m.label}>
                <span className="services-metric__value">{m.value}</span>
                <span className="services-metric__label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Services Grid ── */}
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`service-card ${visibleCards.has(index) ? 'service-card--visible' : ''}`}
              style={{ '--card-delay': `${index * 0.1}s` }}
            >
              <div className="service-card__inner">
                <span className="service-card__tag">{service.tag}</span>
                <div className="service-card__icon-wrap">
                  <span className="service-card__icon">{service.icon}</span>
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                </div>
                <div className="service-card__footer">
                  <span className="service-card__stat">{service.stats}</span>
                  <button
                    className="service-card__cta"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path
                        d="M1 7h12M7 1l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="service-card__glow" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className={`services-cta ${headerVisible ? 'services-cta--visible' : ''}`}>
          <p>Ready to start your project?</p>
          <a href="/contact" className="services-cta__btn">
            Get a Free Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M1 8h14M8 1l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
