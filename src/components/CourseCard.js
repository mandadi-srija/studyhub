import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, description, image }) => {
  return (
    <div className="course-card">
      <img className="course-card-image" src={image} alt={title} />
      <div className="course-card-content">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
