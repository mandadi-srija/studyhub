import React, { useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './profile.css';

function Profile() {
  const [user, setUser] = useState({
    name: 'shamitha',
    email: 'shamitha@gmail.com',
    bio: 'Full Stack Developer and Course Creator',
    profileImage: 'data:image/jpeg;base64,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',
    coursesUploaded: 3,
    dailyStreaks: 2,
    achievements: [],
    dailyActivity: [
     
      { date: '2024-11-03', count: 1 },
      { date: '2024-11-04', count: 1 },
      { date: '2024-11-07', count: 4 }], 
  });
  const [isEditing, setIsEditing] = useState(false);
  const [newUserData, setNewUserData] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  const saveChanges = () => {
    setUser(newUserData);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profileImage} alt="Profile" className="profile-image" />
        {isEditing && (
          <input
            type="file"
            onChange={(e) => setNewUserData({ ...newUserData, profileImage: URL.createObjectURL(e.target.files[0]) })}
          />
        )}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.bio}</p>
        {isEditing ? (
          <div className="edit-form">
            <input type="text" name="name" value={newUserData.name} onChange={handleInputChange} />
            <input type="email" name="email" value={newUserData.email} onChange={handleInputChange} />
            <textarea name="bio" value={newUserData.bio} onChange={handleInputChange}></textarea>
            <button onClick={saveChanges}>Save</button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        )}
      </div>

      <div className="profile-stats">
        <div className="stat-item" title="Courses Uploaded">
          <span>{user.coursesUploaded}</span>
          <p>Courses Uploaded</p>
        </div>
        <div className="stat-item" title="Daily Streaks">
          <span>{user.dailyStreaks}</span>
          <p>Daily Streaks</p>
        </div>
        <div className="stat-item" title="Achievements">
          <span>{user.achievements.length}</span>
          <p>Achievements</p>
        </div>
      </div>

      <div className="heatmap-container">
        <h3>Yearly Performance</h3>
        <CalendarHeatmap
          startDate={new Date(new Date().getFullYear(), 0, 1)}
          endDate={new Date()}
          values={user.dailyActivity}
          classForValue={(value) => {
            if (!value || value.count === 0) {
              return 'color-empty';
            }
            return `color-scale-${value.count}`;
          }}
        />
      </div>
<div className ></div>
      <div className="profile-bottom-links">
        <button>My Collaborations</button>
        <button>Quizzes</button>
        <button>Discuss</button>
        <button>My Favorites</button>
      </div>
    </div>
  );
}

export default Profile;