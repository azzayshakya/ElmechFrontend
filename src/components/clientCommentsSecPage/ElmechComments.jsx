import React, { useEffect, useState } from "react";
import "./ElmechCommentsBox.css";
import { useNavigate } from "react-router-dom";

// Comment data
const commentsData = [
  {
    id: 1,
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    name: 'Rohan Mehta',
    profession: 'Electrical Engineer',
    comment: 'elMech India Engineers handled the entire electrical setup for our industrial project. Their expertise and attention to detail were evident from day one, ensuring a smooth execution on-site.'
  },
  {
    id: 2,
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Priya Sharma',
    profession: 'Civil Engineer',
    comment: 'I was impressed by the quality of the firefighting systems elMech India Engineers installed in our commercial building. The team was efficient and kept us informed throughout the process.'
  },
  {
    id: 3,
    photo: 'https://randomuser.me/api/portraits/men/73.jpg',
    name: 'Suresh Verma',
    profession: 'Property Contractor',
    comment: 'We collaborated with elMech India Engineers for electrical and plumbing services in a large residential project. Their technical expertise and commitment to timelines were exceptional.'
  },
  {
    id: 4,
    photo: 'https://randomuser.me/api/portraits/women/50.jpg',
    name: 'Anita Iyer',
    profession: 'Bank Manager',
    comment: 'The electrical design for our new bank branch was flawlessly executed by elMech. They ensured the highest safety standards and completed the work ahead of schedule.'
  },
  {
    id: 5,
    photo: 'https://randomuser.me/api/portraits/men/77.jpg',
    name: 'Amit Desai',
    profession: 'Construction Consultant',
    comment: 'elMech India Engineers provided excellent support during the planning phase of our project. Their design solutions were both innovative and practical, helping us stay within budget.'
  },
  {
    id: 6,
    photo: 'https://randomuser.me/api/portraits/women/35.jpg',
    name: 'Neha Kapoor',
    profession: 'Architect',
    comment: 'I highly recommend elMech India Engineers for their professionalism and expertise in the fire safety systems they implemented in our IT park project.'
  },
  {
    id: 7,
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
    name: 'Rajesh Kumar',
    profession: 'HVAC Specialist',
    comment: 'Working with elMech India Engineers was a smooth experience. They delivered top-notch HVAC solutions that met the complex requirements of our hospital project.'
  },
  {
    id: 8,
    photo: 'https://randomuser.me/api/portraits/women/47.jpg',
    name: 'Swati Joshi',
    profession: 'Hospital Administrator',
    comment: 'elMech played a crucial role in the electrical and firefighting designs of our new hospital wing. Their team was responsive and attentive to every detail.'
  },
  {
    id: 9,
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    name: 'Vikas Patel',
    profession: 'Real Estate Developer',
    comment: 'elMech India Engineers delivered exceptional services in electrical and plumbing systems for our high-rise residential complex. Their technical expertise ensured timely project completion.'
  },
  {
    id: 10,
    photo: 'https://randomuser.me/api/portraits/women/27.jpg',
    name: 'Kavita Rao',
    profession: 'Interior Designer',
    comment: 'The electrical installations by elMech in our luxury hotel project were flawless. Their attention to detail and willingness to adapt to design changes were highly appreciated.'
  }
];

const ElmechCommentsSecPage = () => {
   const navigate = useNavigate(); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const handleElmechCommentsPageButton=()=>{
    navigate("/addYourComment")
  }
  useEffect(() => {
    setShowAnimation(true);
    const interval = setInterval(() => {
      setShowAnimation(false);
      setTimeout(() => {
        setShowAnimation(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % commentsData.length);
      }, 500); // Match with animation duration
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const currentComment = commentsData[currentIndex];

  return (
    <div className={`ElmechCommentsSecPage ${showAnimation ? "animate" : ""}`}>
      <div className="commentsHeader">
        <div className="commentsHeaderTop">
          <span>What Our Clients Say</span>
          <div className="button-22">
            <button onClick={handleElmechCommentsPageButton}>
              Add Your Comment
            </button>
          </div>
        </div>
        <p>
          We take pride in delivering exceptional services. Here’s what some of
          our satisfied clients have to say about their experience with us.
        </p>
      </div>
      <div className="card">
        <img
          src={currentComment.photo}
          alt={`${currentComment.name}'s Profile`}
        />
        <div>
          <h2>{currentComment.name}</h2>
          <h3>{currentComment.profession}</h3>
          <p>{currentComment.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ElmechCommentsSecPage;