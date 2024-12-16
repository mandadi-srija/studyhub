// src/pages/Message.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Message.css';

const Message = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [message, setMessage] = useState('');
  const { username, name } = location.state || {};  // Get user info from location state

  // Handle sending the message
  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Message sent to ${name}: ${message}`);
      // You can add logic to save/send the message to a server here
      setMessage('');
    } else {
      alert('Please enter a message.');
    }
  };

  return (
    <div className='msg-msg'>
      <h2>Message {name}</h2>
      <div>
        <textarea
          placeholder={`Type your message to ${name}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          cols="40"
        />
      </div>
      <button onClick={handleSendMessage}>Send Message</button>
      <button onClick={() => navigate(-1)}>Back</button>  {/* Navigate back to the previous page */}
    </div>
  );
};

export default Message;
