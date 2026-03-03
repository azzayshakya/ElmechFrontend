import { useEffect, useRef, useState } from 'react';
import './index.css';

export default function AboutUsMainNew() {
  const aboutUsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Color Variables
  const colors = {
    primary: '#7FFF7F',
    primaryDark: '#5FDF5F',
    accent: '#48d1cc',
    accentLight: '#40e0d0',
    dark: '#000000',
    darkGray: '#2c3e50',
    text: '#666666',
    textDark: '#333333',
    white: '#fff',
    background: '#ffffff',
    backgroundLight: '#f8f9fa',
    shadow: 'rgba(0,0,0,0.08)',
    shadowMedium: 'rgba(0,0,0,0.12)',
    shadowDark: 'rgba(0,0,0,0.2)',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.01 }
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

  const tabContent = {
    overview: {
      title: 'Company Overview',
      description: `ElMech India Engineers, founded by Mr. Anil K. Shakya with over 12 years of experience, 
      specializes in Electrical, Firefighting, and Building Services. The company has successfully executed 
      more than 50 projects across various sectors, including IT buildings, hotels, hospitals, and infrastructure 
      for both private and government clients.`,
      highlights: [
        'ISO 9001:2015 Certified Company',
        'Registered with MSME & Government of India',
        'Expert team of certified engineers',
        'State-of-the-art equipment and technology',
      ],
    },
    services: {
      title: 'Our Services',
      description: `We provide comprehensive engineering solutions tailored to meet the specific needs of each project, 
      ensuring quality, safety, and compliance with international standards.`,
      highlights: [
        'Electrical Installation & Maintenance',
        'Fire Fighting & Safety Systems',
        'HVAC Systems & Climate Control',
        'Plumbing & Sanitation Services',
        'Building Automation Systems',
        'Energy Audit & Management',
      ],
    },
    certifications: {
      title: 'Certifications & Compliance',
      description: `Our commitment to quality is reflected in our certifications and adherence to national and 
      international standards, ensuring every project meets the highest benchmarks.`,
      highlights: [
        'ISO 9001:2015 Quality Management',
        'NFPA Compliance for Fire Systems',
        'Electrical Contractor License',
        'Government Approved Vendor',
        'Safety & Environmental Compliance',
        'NBC (National Building Code) Adherent',
      ],
    },
    sectors: {
      title: 'Sectors We Serve',
      description: `With a diverse portfolio spanning multiple industries, we bring specialized expertise to every 
      sector, delivering solutions that meet unique operational requirements.`,
      highlights: [
        'IT Parks & Corporate Buildings',
        'Hospitality & Hotels',
        'Healthcare & Hospitals',
        'Educational Institutions',
        'Residential Complexes',
        'Industrial & Manufacturing',
        'Government Infrastructure',
        'Retail & Commercial Spaces',
      ],
    },
  };

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '12+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  const whyChooseUs = [
    {
      icon: '🎯',
      title: 'Quality Assurance',
      description: 'International standards maintained across all projects',
    },
    {
      icon: '⚡',
      title: 'Timely Delivery',
      description: 'Committed to project deadlines without compromise',
    },
    {
      icon: '🔧',
      title: 'Expert Team',
      description: 'Certified engineers with extensive experience',
    },
    {
      icon: '💼',
      title: 'End-to-End Solutions',
      description: 'From design to commissioning and maintenance',
    },
  ];

  return (
    <div itemScope itemType="https://schema.org/Organization">
      {/* SEO Meta Content */}
      <meta itemProp="name" content="ElMech India Engineers" />
      <meta
        itemProp="description"
        content="Leading electrical, firefighting, and building services company with 12+ years of experience and 50+ successful projects across India."
      />
      <meta itemProp="url" content="https://www.elmechindia.com" />
      <meta itemProp="founder" content="Mr. Anil K. Shakya" />
      <meta itemProp="foundingDate" content="2013" />
      <meta itemProp="areaServed" content="India" />

      <section
        className={`about-us-modern ${isVisible ? 'about-us-modern--visible' : ''}`}
        ref={aboutUsRef}
        aria-labelledby="about-heading"
        style={{
          background: colors.background,
          padding: '6rem 2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="about-us-modern__main-container">
          {/* Left Side - Text Content */}
          <div className="about-us-modern__left-content">
            {/* <span
              className={`about-us-modern__badge ${isVisible ? 'about-us-modern__badge--animate' : ''}`}
              style={{
                display: 'inline-block',
                padding: '0.4rem 0',
                color: colors.primary,
                fontSize: '1.2rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                marginBottom: '1.5rem',
              }}
            >
              ABOUT US
            </span> */}

            <h1
              id="about-heading"
              className={`about-us-modern__main-title ${isVisible ? 'about-us-modern__main-title--animate' : ''}`}
              itemProp="slogan"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: '900',
                lineHeight: '1.1',
                marginBottom: '2rem',
                color: colors.dark,
                textTransform: 'lowercase',
              }}
            >
              Transforming spaces
              <br />
              creating memories
            </h1>

            <p
              className={`about-us-modern__description ${isVisible ? 'about-us-modern__description--animate' : ''}`}
              itemProp="description"
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: colors.text,
                marginBottom: '0',
                maxWidth: '650px',
              }}
            >
              ElMech India Engineers, founded by Mr. Anil K. Shakya with over 12 years of
              experience, specializes in Electrical, Firefighting, and Building Services. The
              company has successfully executed more than 50 projects across various sectors,
              including IT buildings, hotels, hospitals, and infrastructure for both private and
              government clients. With a commitment to delivering quality from conceptualization to
              completion, ElMech India Engineers ensures international standards and customer
              satisfaction on every project.
            </p>
          </div>

          {/* Right Side - Image */}
          <div
            className="about-us-modern__right-image"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className={`about-us-modern__image-wrapper ${isVisible ? 'about-us-modern__image-wrapper--animate' : ''}`}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '600px',
              }}
            >
              {/* Background Decorative Shape */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, ${colors.accent}20 0%, ${colors.primary}20 100%)`,
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  zIndex: 0,
                }}
              />

              {/* Image Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `10px solid ${colors.white}`,
                  boxShadow: `0 20px 60px ${colors.shadowDark}`,
                  zIndex: 1,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop"
                  alt="ElMech India Engineers - Professional engineering team at work"
                  itemProp="image"
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`about-us-modern__stats-section ${isVisible ? 'about-us-modern__stats-section--animate' : ''}`}
          style={{
            maxWidth: '1400px',
            margin: '5rem auto 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            padding: '0 1rem',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '2.5rem 1.5rem',
                background: colors.white,
                borderRadius: '15px',
                boxShadow: `0 5px 20px ${colors.shadow}`,
                border: `1px solid ${colors.backgroundLight}`,
                transition: 'all 0.3s ease',
              }}
              className="stat-card-modern"
            >
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: colors.accent,
                  marginBottom: '0.5rem',
                  lineHeight: '1',
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: '0.95rem',
                  color: colors.text,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tabs Section */}
        <div
          className="about-us-modern__tabs-section"
          style={{
            maxWidth: '1400px',
            margin: '5rem auto 0',
            padding: '0 1rem',
          }}
        >
          {/* Tabs Navigation */}
          <div
            className="about-us-modern__tabs-nav"
            role="tablist"
            aria-label="About us sections"
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              borderBottom: `2px solid ${colors.backgroundLight}`,
              paddingBottom: '1rem',
            }}
          >
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`tabpanel-${tab}`}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0.9rem 2rem',
                  border: 'none',
                  background: activeTab === tab ? colors.accent : 'transparent',
                  color: activeTab === tab ? colors.white : colors.text,
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'capitalize',
                  boxShadow: activeTab === tab ? `0 4px 15px ${colors.accent}40` : 'none',
                }}
                className="tab-button-modern"
              >
                {tab.replace('_', ' ')}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className={`about-us-modern__tab-panel ${isVisible ? 'about-us-modern__tab-panel--animate' : ''}`}
            style={{
              background: colors.white,
              borderRadius: '20px',
              padding: '3rem',
              boxShadow: `0 5px 30px ${colors.shadowMedium}`,
              border: `1px solid ${colors.backgroundLight}`,
            }}
          >
            <h2
              style={{
                fontSize: '2.2rem',
                fontWeight: '800',
                color: colors.dark,
                marginBottom: '1.5rem',
              }}
            >
              {tabContent[activeTab].title}
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: colors.text,
                marginBottom: '2rem',
              }}
            >
              {tabContent[activeTab].description}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
              }}
            >
              {tabContent[activeTab].highlights.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem',
                    background: colors.backgroundLight,
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                  }}
                  className="highlight-item"
                >
                  <span
                    style={{
                      fontSize: '1.2rem',
                      marginRight: '0.8rem',
                      color: colors.accent,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontSize: '0.95rem',
                      color: colors.textDark,
                      fontWeight: '500',
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div
          className="about-us-modern__why-section"
          style={{
            maxWidth: '1400px',
            margin: '5rem auto 0',
            padding: '0 1rem',
          }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: colors.dark,
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            Why Choose ElMech India Engineers
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '2.5rem 2rem',
                  background: colors.white,
                  borderRadius: '15px',
                  boxShadow: `0 5px 20px ${colors.shadow}`,
                  border: `1px solid ${colors.backgroundLight}`,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                className="why-card"
              >
                <div
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: colors.dark,
                    marginBottom: '0.8rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: colors.text,
                    lineHeight: '1.6',
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ElMech India Engineers',
            description:
              'Leading electrical, firefighting, and building services company with 12+ years of experience',
            url: 'https://www.elmechindia.com',
            logo: 'https://www.elmechindia.com/logo.png',
            founder: {
              '@type': 'Person',
              name: 'Mr. Anil K. Shakya',
            },
            foundingDate: '2013',
            areaServed: 'India',
            serviceType: [
              'Electrical Services',
              'Firefighting Systems',
              'Building Services',
              'HVAC Systems',
              'Building Automation',
            ],
            numberOfEmployees: '50+',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              reviewCount: '50',
            },
          })}
        </script>
      </section>
    </div>
  );
}
