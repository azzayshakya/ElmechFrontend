import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import Link for navigation
import './PrivacyPolicyPage.css';

export default function PrivacyPolicy() {
  const navigate = useNavigate(); 
  const handleViewUpdates=()=>{
    navigate("/updates")
  }
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-header">
        <h1 className="privacy-policy-title">Privacy Policy</h1>
      </div>

      <div className="privacy-policy-content">
        <section className="privacy-policy-section">
          <h2 className="privacy-policy-section-title">Introduction</h2>
          <p className="privacy-policy-section-text">
            At elMech India Engineers, we value your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines the types of information we collect and how we use, share, and protect it.
          </p>
        </section>

        <section className="privacy-policy-section">
          <h2 className="privacy-policy-section-title">Information Collection</h2>
          <p className="privacy-policy-section-text">
            We collect personal information such as your name, email address, phone number, and any other details you provide while interacting with our website.
          </p>
        </section>

        <section className="privacy-policy-section">
          <h2 className="privacy-policy-section-title">How We Use Your Information</h2>
          <p className="privacy-policy-section-text">
            The information we collect is used to provide services, enhance user experience, improve our offerings, and comply with legal requirements.
          </p>
        </section>

        <section className="privacy-policy-section">
          <h2 className="privacy-policy-section-title">Data Protection</h2>
          <p className="privacy-policy-section-text">
            We implement robust security measures to ensure your personal data is protected against unauthorized access, alteration, or destruction.
          </p>
        </section>

        <section className="privacy-policy-section">
          <h2 className="privacy-policy-section-title">Third-Party Sharing</h2>
          <p className="privacy-policy-section-text">
            We do not share your personal information with third parties without your consent, except where necessary to fulfill services or as required by law.
          </p>
        </section>
      </div>

      <div className="privacy-policy-footer">
        <button className='button-22' onClick={handleViewUpdates}>View Updates</button>
      </div>
    </div>
  );
}
