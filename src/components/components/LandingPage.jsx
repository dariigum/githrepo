import React from 'react';
import './LandingPage.css';

const LandingPage = () => (
  <div className="landing-page">
    <h1>Welcome to Green Thumb Store</h1>
    <p>Your one-stop shop for beautiful houseplants!</p>
    <button onClick={() => window.location.href = '/products'}>Get Started</button>
  </div>
);

export default LandingPage;
