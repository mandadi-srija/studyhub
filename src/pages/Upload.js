import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate to redirect back to CourseUploadPage
import './UploadPage.css';

const UploadPage = () => {
  const [uploadedPdfs, setUploadedPdfs] = useState([]); // Store uploaded PDFs
  const navigate = useNavigate();

  useEffect(() => {
    // Load the previously uploaded PDFs from localStorage when the component mounts
    const storedPdfs = JSON.parse(localStorage.getItem('uploadedPdfs')) || [];
    setUploadedPdfs(storedPdfs);
  }, []);

  // Redirect to CourseUploadPage to upload a new PDF
  const handleBackToUpload = () => {
    navigate('/'); // Navigate back to the CourseUploadPage
  };

  return (
    <div className="upload-page">
      <h1>Uploaded PDFs</h1>

      {/* Display all uploaded PDFs as cards */}
      <div className="pdf-cards-container">
        {uploadedPdfs.map((pdf, index) => (
          <div key={index} className="pdf-card">
            <h3>{pdf.title}</h3>
            <button onClick={() => window.open(pdf.url, '_blank')}>
              Open PDF
            </button>
          </div>
        ))}
      </div>

      {/* Button to go back to CourseUploadPage for uploading another PDF */}
      <button onClick={handleBackToUpload} className="upload-btn">
        Upload Another PDF
      </button>
    </div>
  );
};

export default UploadPage;
