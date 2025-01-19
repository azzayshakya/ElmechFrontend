import React from 'react';
import './WebsiteUpdates.css';
import { useNavigate } from 'react-router-dom';

export default function UpdatesPage() {
  const navigate=useNavigate();
  const HadnleUpdateUnderProcessButon =()=>{
    navigate("/new-update")

  }
  return (
    <div className="updates-page-container">
      <div className="updates-page-header">
        <h1 className="updates-page-title">Updates</h1>
      </div>

      <div className="updates-content">
        {/* Version 0.0.1 */}
        <section className="update-section">
          <h2 className="update-version">Version 0.0.1</h2>
          <ul className="update-list">
            <li>Initial launch with core features.</li>
            <li>Implemented basic UI layout and responsiveness.</li>
            <li>Added user authentication and basic navigation.</li>
            <li>Integrated homepage with detailed company information.</li>
            <li>Set up footer with contact details and social media links.</li>
          </ul>
        </section>

        {/* Version 0.0.2 */}
        <section className="update-section">
          <h2 className="update-version">Version 0.0.2</h2>
          <ul className="update-list">
            <li>Bug fixes related to user profile page.</li>
            <li>Improved loading times and page performance.</li>
            <li>Enhanced mobile responsiveness for better usability.</li>
            <li>Streamlined navigation for a smoother experience.</li>
            <li>Optimized media assets to reduce page size.</li>
          </ul>
        </section>

        {/* Version 0.0.3 */}
        <section className="update-section">
          <h2 className="update-version">Version 0.0.3</h2>
          <ul className="update-list">
            <li>Implemented login form integration with backend API.</li>
            <li>Fixed access token bug to ensure secure authentication.</li>
            <li>Improved session handling for better user experience.</li>
            <li>Added feature to remember login state across sessions.</li>
            <li>Updated security protocols to align with industry standards.</li>
          </ul>
        </section>

        {/* Version 0.0.4 */}
        <section className="update-section">
          <h2 className="update-version">Version 0.0.4</h2>
          <ul className="update-list">
            <li>Enhanced user validation on the frontend for forms.</li>
            <li>Implemented client-side validation for better error handling.</li>
            <li>Added tooltips to guide users during form submission.</li>
            <li>Improved feedback on form errors with real-time updates.</li>
            <li>Integrated confirmation modal for critical actions.</li>
          </ul>
        </section>

        {/* Version 0.0.5 */}
        <section className="update-section">
          <h2 className="update-version">Version 0.0.5</h2>
          <ul className="update-list">
            <li>Fixed form style bugs for consistent UI across devices.</li>
            <li>Resolved responsiveness issues in the "Get In Touch" form.</li>
            <li>Updated layout to enhance readability on smaller screens.</li>
            <li>Improved accessibility features, including better tab navigation.</li>
            <li>Added fallback mechanisms for form submission errors.</li>
          </ul>
        </section>
      </div>

      <div className="updates-footer">
        <button className='button-22' onClick={HadnleUpdateUnderProcessButon}>Update 0.0.6 (Under Process)</button>
      </div>
    </div>
  );
}
