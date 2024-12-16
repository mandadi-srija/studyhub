
import React, { useState } from 'react';
import './login.css'; 

const Login = ({ onLogin, onToggle }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <section className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Log In</h2>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
        <p>
          Don't have an account?{' '}
          <span onClick={onToggle} className="signup-toggle">
            Sign Up
          </span>
        </p>
      </form>
    </section>
  );
};

export default Login;
