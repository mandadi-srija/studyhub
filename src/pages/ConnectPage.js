// import React, { useState, useEffect } from 'react';
// import SearchBar from '../components/SearchBar'; 
// import './ConnectPage.css';

// const ConnectPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [userProfile, setUserProfile] = useState([]); // State to hold displayed user profiles

//   // Sample user data (replace this with actual data from a server or database if needed)
  
//   const users = [
//     { username: 'Shamitha', name: 'Shamitha', bio: 'A passionate developer.' },
//     { username: 'John', name: 'John Doe', bio: 'A web designer.' },
//     { username: 'Alice', name: 'Alice Smith', bio: 'A graphic designer.' },
//   ];

//   // Display all profiles on initial load
//   useEffect(() => {
//     setUserProfile(users); // Set all users as default
//   }, []);

//   // Handle the search logic
//   const handleSearchChange = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     // Filter profiles based on search term, or display all if search term is empty
//     const filteredUsers = term
//       ? users.filter(user => user.username.toLowerCase().includes(term.toLowerCase()))
//       : users;

//     setUserProfile(filteredUsers); // Update displayed profiles based on search term
//   };

//   return (
//     <div>
//       <SearchBar placeholder="Search for username..." searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
//       <div className="msg">
//         <h1>Connect with Users</h1>
//       </div>

//       <div className="profile">
//         {/* Display all matching user profiles */}
//         {userProfile.length > 0 ? (
//           userProfile.map(user => (
//             <div key={user.username} className="profile-card">
//               <h2>{user.name}</h2>
//               <p>{user.bio}</p>
//               <button className="connect-btn">Connect</button>
//               <button className="message-btn">Message</button>
//             </div>
//           ))
//         ) : (
//           searchTerm && <p>No user found with the username "{searchTerm}".</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ConnectPage;


// src/pages/ConnectPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import './ConnectPage.css';

const ConnectPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userProfile, setUserProfile] = useState([]); // State to hold the displayed user profiles
  const navigate = useNavigate(); // React Router hook to navigate programmatically

  // Sample user data (replace with actual data from a server or database if needed)
  const users = [
    { username: 'Shamitha', name: 'Shamitha', bio: 'A passionate developer.' },
    { username: 'Prabhavathi', name: 'Prabhavathi', bio: 'A web designer.' },
    { username: 'Sanjana', name: 'Sanjana', bio: 'A graphic designer.' },
  ];

  // Display all profiles on initial load
  useEffect(() => {
    setUserProfile(users); // Set all users as default
  }, []);

  // Handle the search logic
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter profiles based on search term, or display all if search term is empty
    const filteredUsers = term
      ? users.filter(user => user.username.toLowerCase().includes(term.toLowerCase()))
      : users;

    setUserProfile(filteredUsers); // Update displayed profiles based on search term
  };

  // Navigate to the Message page and pass the user data
  const handleMessage = (user) => {
    navigate('/message', { state: user }); // Pass user data to the message page
  };

  return (
    <div>
      <SearchBar placeholder="Search for username..." searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
      <div className="msg">
        <h1>Connect with Users</h1>
      </div>

      <div className="profile">
        {/* Display all matching user profiles */}
        {userProfile.length > 0 ? (
          userProfile.map(user => (
            <div key={user.username} className="profile-card">
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
              <button className="connect-btn">Connect</button>
              <button className="message-btn" onClick={() => handleMessage(user)}>Message</button>
            </div>
          ))
        ) : (
          searchTerm && <p>No user found with the username "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
};

export default ConnectPage;
