//import React from 'react';
import SearchBar from '../components/SearchBar';
import CourseCard from '../components/CourseCard';
import java from '../images/java.jpg'
import ai from '../images/ai.jpg'
import cn from '../images/cn.jpg'
import mongodb from '../images/mongodb.jpg';
import css from '../images/css.jpg';
import devops from '../images/devops.jpg';
import dm from '../images/dm.jpg';
import ml from '../images/ml.jpg';
import oops from '../images/oops.jpg';
import os from '../images/os.jpg';
import python from '../images/python.jpg';
import react from '../images/react.jpg';
import React, { useState } from 'react';

import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

const courses =[
  {
    "title": "Advanced JavaScript",
    "description": "Explore advanced JavaScript concepts and features in-depth.",
    "image":java
  },
  {
    "title": "Artificial Intelligence",
    "description": "Explore the fundamentals of AI and its real-world applications.",
    "image": ai
  },
  {
    "title": "Cascading Style Sheets (CSS)",
    "description": "Learn the basics and advanced features of CSS for web design.",
    "image": css
  },
  {
    "title": "Computer Networks",
    "description": "Understand the fundamentals of networking and data communication.",
    "image": cn
  },
  {
    title: "MongoDB",
    description: "Learn statistical methods and their applications in computing.",
    image: mongodb,
  },
  {
    "title": "DevOps",
    "description": "Master the tools and processes for continuous integration and deployment.",
    "image": devops
  },
  {
    "title": "Discrete Mathematics",
    "description": "Dive into the principles of discrete mathematics and logic.",
    "image": dm
  },
  {
    "title": "Machine Learning",
    "description": "An introductory course on machine learning concepts and techniques.",
    "image": ml
  },
  {
    "title": "OOP Through Java",
    "description": "Master object-oriented programming principles using Java.",
    "image": oops
  },
  {
    "title": "Operating Systems",
    "description": "Explore the core concepts and functions of modern operating systems.",
    "image": os
  },
  {
    "title": "Python",
    "description": "Get started with Python, a versatile programming language for all purposes.",
    "image": python
  },
  {
    "title": "React for Beginners",
    "description": "Learn React from scratch and build amazing, interactive apps.",
    "image": react
  }
];

// const Home = () => {
//   return (
//     <div className="home">
//       <SearchBar placeholder="Search for courses..." />
//       <div className="courses-container">
//         {courses.map((course, index) => (
//           <CourseCard
//             key={index}
//             title={course.title}
//             description={course.description}
//             image={course.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

const filteredCourses = courses.filter(course =>
  course.title.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <div className="home">
    <SearchBar
      placeholder="Search for courses..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div className="courses-container">
      {filteredCourses.map((course, index) => (
        <CourseCard
          key={index}
          title={course.title}
          description={course.description}
          image={course.image}
        />
      ))}
    </div>
  </div>
);
};

export default Home;
