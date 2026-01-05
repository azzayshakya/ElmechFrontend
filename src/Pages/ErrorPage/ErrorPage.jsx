import React from 'react';
import './ErrorPage.css';
const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <a href="/" className="back-home-button">
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
