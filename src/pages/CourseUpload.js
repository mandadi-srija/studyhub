// import React, { useState } from 'react';
// import './CourseUpload.css';

// const CourseUpload = () => {
//   const [course, setCourse] = useState({
//     title: '',
//     description: '',
//     category: '',
//     price: '',
//     image: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle course upload logic here
//     console.log(course);
//     alert('Course uploaded successfully!');
//   };

//   return (
//     <div className="course-upload-page">
//       <h1>Upload a New Course</h1>
//       <form onSubmit={handleSubmit} className="course-upload-form">
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={course.title}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={course.description}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Category:
//           <input
//             type="text"
//             name="category"
//             value={course.category}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Price:
//           <input
//             type="text"
//             name="price"
//             value={course.price}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Course Image URL:
//           <input
//             type="text"
//             name="image"
//             value={course.image}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit" className="upload-btn">Upload Course</button>
//       </form>
//     </div>
//   );
// };

// export default CourseUpload;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './CourseUpload.css';

// const CourseUpload = () => {
//   const [course, setCourse] = useState({
//     title: '',
//     description: '',
//     category: '',
//     price: '',
//     image: '',
//   });

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(course); // Course upload data
//     alert('Course uploaded successfully!');
//     navigate('/upload'); // Navigate to the Upload page after submission
//   };

//   return (
//     <div className="course-upload-page">
//       <h1>Upload a New Course</h1>
//       <form onSubmit={handleSubmit} className="course-upload-form">
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={course.title}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={course.description}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Category:
//           <input
//             type="text"
//             name="category"
//             value={course.category}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Price:
//           <input
//             type="text"
//             name="price"
//             value={course.price}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Course Image URL:
//           <input
//             type="text"
//             name="image"
//             value={course.image}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit" className="upload-btn">Upload Course</button>
//       </form>
//     </div>
//   );
// };

// export default CourseUpload;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './CourseUpload.css';

const CourseUploadPage = () => {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image: '', // This will store the PDF URL
  });

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Course uploaded successfully!');

    // Save the PDF title and URL to localStorage
    const uploadedPdfs = JSON.parse(localStorage.getItem('uploadedPdfs')) || [];
    uploadedPdfs.push({ title: course.title, url: course.image }); // Add new PDF with title and URL
    localStorage.setItem('uploadedPdfs', JSON.stringify(uploadedPdfs)); // Save to localStorage

    // Redirect to UploadPage to view the uploaded PDF cards
    navigate('/upload');

    // Reset the form for the next upload
    setCourse({
      title: '',
      description: '',
      category: '',
      price: '',
      image: '',
    });
  };

  return (
    <div className="course-upload-page">
      <h1>Upload a New Course</h1>
      <form onSubmit={handleSubmit} className="course-upload-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={course.category}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={course.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Course Image URL (PDF URL):
          <input
            type="text"
            name="image"
            value={course.image}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="upload-btn">Upload Course</button>
      </form>
    </div>
  );
};

export default CourseUploadPage;
