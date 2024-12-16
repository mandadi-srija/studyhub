import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Peer-to-Peer Learning Platform</h1>
      </div>
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We aim to create an open and collaborative learning environment where individuals can 
            learn, share knowledge, and grow together. Our platform connects learners with experts 
            to help them excel in their academic and personal growth through peer-driven courses.
          </p>
        </section>
        <section className="about-section">
          <h2>How It Works</h2>
          <p>
            The Peer-to-Peer Learning platform allows learners to share their knowledge and expertise 
            by creating and uploading courses. Users can browse through available courses, join 
            learning groups, and collaborate with others to achieve learning goals. The platform 
            is built for all types of learners, from students to professionals.
          </p>
        </section>
        <section className="about-section">
          <h2>Join Our Community</h2>
          <p>
            By becoming part of our community, you gain access to diverse courses, collaboration 
            opportunities, and the chance to help others in their learning journey. Whether you're 
            looking to teach or learn, there's something for everyone here!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
