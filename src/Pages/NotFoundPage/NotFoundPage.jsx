import React from 'react';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <>
      <div className="page-not-found">
        <div className="content">
          <h1>404</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <a href="/" className="home-link">
            Go Back Home
          </a>
        </div>
      </div>
    </>
  );
}
