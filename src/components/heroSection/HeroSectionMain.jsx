import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./heroSection.css";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://media.istockphoto.com/id/937812742/photo/fire-safety-concept-fire-extinguisher-and-fire-hose-reel-in-public-building-corridor.jpg?s=612x612&w=0&k=20&c=ObAbcEx4Js99FHraj0y-o2FaQ0P_CqYiYdaD2Ibk-Sk=",
  "https://images.pexels.com/photos/12255/pexels-photo-12255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1482731215275-a1f151646268?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const HeroSectionMain = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate=useNavigate();
  const handleHomeContactUsButton=()=>{
    navigate("/getInTouch")
  }
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`mainHome ${heroInView ? "fade-in" : ""}`}
      ref={heroRef}
    >
      <div
        className="homeSlideView"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div className="firstSlide">
          <div className="FirstSlideTagLine">
            <span>Engineering Excellence, Building the Future.</span>
            <p>
              Experience world-class design and engineering services tailored
              for IT buildings, hotels, hospitals, and more.
            </p>
            <button  onClick={handleHomeContactUsButton}>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionMain;
