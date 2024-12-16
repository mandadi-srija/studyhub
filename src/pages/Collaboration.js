import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Collaboration.css';
import image from '../images/image.png'

const Collaboration = () => {
    const navigate = useNavigate(); // Initialize navigate

  const handleGetStartedClick = () => {
    navigate('/connect'); // Navigate to /connect
  };

  return (
    <div
  className="collaboration-page"
  style={{ backgroundColor: "#d5e7fd" }}
>

      {/* Hero Section */}
      <section className="hero">
        <div className="image">
        <img
        src={image} // URL or path to your image
        alt="description of image"
        className="image-style" // Optional: class name to style the image
      />
        </div>

        <div className="hero-content">
          <h1 >Collaboration</h1>
          <p>Connect with fellow students, join study groups, and collaborate on projects to achieve academic goals together.</p>
          <div className="buttons">
          <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaboration;
