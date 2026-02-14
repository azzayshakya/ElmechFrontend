import React from 'react';
import './Footer.css';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="footer">
        <div className="footerBottom">
          <div className="footerCopyright">
            &copy; {currentYear} ElMech India Engineers. All Rights Reserved.
          </div>
          <div className="footerLinks">
            <a href="/termsAndConditions">Terms</a>
            <a href="/privacyPolicy">Privacy</a>
            <a href="/getInTouch">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
