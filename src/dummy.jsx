import { useState, useEffect } from 'react';

const HeroSliderDummy = () => {
  const images = [
    'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://media.istockphoto.com/id/937812742/photo/fire-safety-concept-fire-extinguisher-and-fire-hose-reel-in-public-building-corridor.jpg?s=612x612&w=0&k=20&c=ObAbcEx4Js99FHraj0y-o2FaQ0P_CqYiYdaD2Ibk-Sk=',
    'https://images.pexels.com/photos/12255/pexels-photo-12255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1482731215275-a1f151646268?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={styles.container}>
      <div style={styles.sliderWrapper}>
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              ...styles.slide,
              opacity: index === currentIndex ? 1 : 0,
              transform:
                index === currentIndex
                  ? 'scale(1) translateX(0)'
                  : index < currentIndex
                    ? 'scale(0.8) translateX(-100px)'
                    : 'scale(0.8) translateX(100px)',
              zIndex: index === currentIndex ? 1 : 0,
            }}
          >
            <img src={img} alt={`Slide ${index + 1}`} style={styles.image} />
          </div>
        ))}
      </div>

      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1
            style={{
              ...styles.title,
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
            }}
          >
            Welcome to Our Platform
          </h1>
          <p
            style={{
              ...styles.subtitle,
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
            }}
          >
            Experience innovation and excellence
          </p>
          <button style={styles.button}>Get Started</button>
        </div>
      </div>

      <div style={styles.indicators}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.indicator,
              backgroundColor: index === currentIndex ? '#fff' : 'rgba(255,255,255,0.4)',
              width: index === currentIndex ? '40px' : '12px',
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  sliderWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.7)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  content: {
    textAlign: 'center',
    color: '#fff',
    padding: '0 20px',
    maxWidth: '800px',
  },
  title: {
    fontSize: '64px',
    fontWeight: '700',
    marginBottom: '20px',
    letterSpacing: '-1px',
    transition: 'all 0.5s ease',
  },
  subtitle: {
    fontSize: '24px',
    marginBottom: '40px',
    opacity: 0.9,
    fontWeight: '300',
    transition: 'all 0.5s ease 0.1s',
  },
  button: {
    padding: '16px 48px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '2px solid #fff',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  indicators: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '12px',
    zIndex: 3,
  },
  indicator: {
    height: '4px',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
  },
};

// Add hover effect to button
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    button:hover {
      background-color: #fff !important;
      color: #000 !important;
      transform: scale(1.05);
    }
  `;
  document.head.appendChild(styleSheet);
}

export default HeroSliderDummy;
