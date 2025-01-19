import React from 'react';
import './TermsAndCondtion.css';

export default function TermsAndConditions() {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1 className="terms-title">Terms & Conditions</h1>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2 className="terms-section-title">Overview</h2>
          <p className="terms-section-text">
            Welcome to elMech India Engineers. By accessing or using our website, you agree to comply with these Terms & Conditions. Please read them carefully before using our services.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">Our Services</h2>
          <p className="terms-section-text">
            elMech India Engineers specializes in Electrical Systems, Fire Fighting Systems, Plumbing Services, Construction Consulting, and Reconstruction Services. We are committed to delivering high-quality solutions tailored to your needs.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">User Responsibilities</h2>
          <p className="terms-section-text">
            Users agree to use the website and our services responsibly and not to engage in any activities that could harm the website or our reputation. Unauthorized use of our content is strictly prohibited.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">Intellectual Property</h2>
          <p className="terms-section-text">
            All content, including text, images, and logos, is the intellectual property of elMech India Engineers. Reproduction, distribution, or unauthorized use is prohibited without prior written consent.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">Liability Disclaimer</h2>
          <p className="terms-section-text">
            elMech India Engineers is not liable for any damages resulting from the use of our website or services. While we strive for accuracy, we do not guarantee the completeness or reliability of the content provided.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">Governing Law</h2>
          <p className="terms-section-text">
            These Terms & Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in our operational jurisdiction.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">Changes to Terms</h2>
          <p className="terms-section-text">
            elMech India Engineers reserves the right to modify these Terms & Conditions at any time. Please review this page periodically for updates. Continued use of the website signifies acceptance of any changes.
          </p>
        </section>
      </div>
    </div>
  );
}
