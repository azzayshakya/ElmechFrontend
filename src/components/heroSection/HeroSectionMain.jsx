import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './heroSection.css';
import { useNavigate } from 'react-router-dom';

const images = [
  '/elmech-hero-bg/elmech-bg-1.jpeg',
  '/elmech-hero-bg/elmech-bg-2.jpeg',
  '/elmech-hero-bg/elmech-bg-3.jpeg',
  '/elmech-hero-bg/elmech-bg-4.jpeg',
  '/elmech-hero-bg/elmech-bg-5.jpeg',
  '/elmech-hero-bg/elmech-bg-6.jpeg',
  '/elmech-hero-bg/elmech-bg-7.jpeg',
];

const HeroSectionMain = () => {
  const navigate = useNavigate();

  const handleHomeContactUsButton = () => {
    navigate('/getInTouch');
  };

  const { ref: heroRef } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = images.length;

    images.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const next = (prev + 1) % images.length;
        setNextImageIndex((next + 1) % images.length);
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <div
      className="elmech-hero-main"
      ref={heroRef}
      style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Preload next image */}
      {imagesLoaded && <link rel="preload" as="image" href={images[nextImageIndex]} />}

      <div
        className="elmech-hero-slideview"
        style={{
          backgroundImage: imagesLoaded
            ? `url(${images[currentImageIndex]})`
            : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          transition: 'background-image 1.2s ease-in-out',
          position: 'relative',
        }}
      >
        {/* Overlay gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.6) 100%)',
            zIndex: 1,
          }}
        />

        <div
          className="elmech-hero-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            padding: '0 10rem',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div
            style={{
              maxWidth: '55rem',
              textAlign: 'left',
            }}
          >
            <h1
              style={{
                color: '#ffffff',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '3.5rem',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                letterSpacing: '-0.02em',
              }}
            >
              Engineering Excellence, Building the Future.
            </h1>

            <p
              style={{
                color: '#e0e0e0',
                fontFamily: "'Inter', 'Roboto', sans-serif",
                fontSize: '1.25rem',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
                fontWeight: 300,
                maxWidth: '45rem',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              }}
            >
              Experience world-class design and engineering services tailored for IT buildings,
              hotels, hospitals, and more.
            </p>

            <button
              onClick={handleHomeContactUsButton}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50px',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
                position: 'relative',
                overflow: 'hidden',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
              }}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Image loading indicator - only show when NOT loaded */}
        {!imagesLoaded && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div className="elmech-loader" />
            <p
              style={{
                color: '#ffffff',
                fontSize: '1rem',
                fontFamily: "'Inter', sans-serif",
                opacity: 0.8,
              }}
            >
              Loading...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSectionMain;
