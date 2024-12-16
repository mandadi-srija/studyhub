// src/pages/ProfilePage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { username } = useParams();

  const users = [
    { username: 'Shamitha', name: 'Shamitha', bio: 'A passionate developer.' },
    { username: 'John', name: 'John Doe', bio: 'A web designer.' }
  ];

  const user = users.find((user) => user.username === username);

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>{user.bio}</p>
    </div>
  );
};

export default ProfilePage;
