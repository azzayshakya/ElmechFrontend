import React from "react";
import { useInView } from "react-intersection-observer";
import "./WhyChooseUs.css";
import { GiSkills } from "react-icons/gi";

function AnimatedBox({ title, description, icon, delay }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust visibility threshold
  });

  return (
    <div
      ref={ref}
      className={`BoxOfWhyUs ${inView ? "fade-in" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
      <div className="WhyUsBoxPng">
        <span>{icon}</span>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="WhyUs">
      <div ref={headerRef} className={`top ${headerInView ? "fade-in" : ""}`}>
        <span>WHY CHOOSE US</span>
        <p>High Quality Innovative Design</p>
      </div>

      <div className="BottomOfWhyUs">
        <div className="leftRowInWhyUs">
          <AnimatedBox
            title="24 / 7 Support"
            description="We're always here, ensuring around-the-clock assistance for every project need."
            icon={<i className="fa-solid fa-phone"></i>}
            delay={0.2}
          />
          <AnimatedBox
            title="Latest Technology"
            description="Harnessing cutting-edge technology to bring your vision to life with precision."
            icon={<i className="fa-solid fa-chalkboard-user"></i>}
            delay={0.4}
          />
          <AnimatedBox
            title="Skilled Team"
            description="Our expert team delivers exceptional craftsmanship, backed by years of experience."
            icon={<i className="fa-solid fa-people-group"></i>}
            delay={0.6}
          />
        </div>

        <div className="MidRowInWhyUs">
          <img
            src="https://wp.framerpeak.com/construz/wp-content/uploads/2024/07/why-choose.png"
            alt="Why Choose Us Illustration"
          />
        </div>

        <div className="RightRowInWhyUs">
          <AnimatedBox
            title="Innovation"
            description="Pioneering creative solutions to build beyond the ordinary, with unmatched innovation."
            icon={<i className="fa-regular fa-lightbulb"></i>}
            delay={0.8}
          />
          <AnimatedBox
            title="Affordable Price"
            description="Quality construction at a price that fits your budget, without compromise."
            icon={<i className="fa-solid fa-handshake"></i>}
            delay={1.0}
          />
          <AnimatedBox
            title="Experience"
            description="Decades of expertise in turning dreams into reality, one project at a time."
            icon={<GiSkills />}
            delay={1.2}
          />
        </div>
      </div>
    </div>
  );
}
