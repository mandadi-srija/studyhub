// // src/pages/SignUp.js
// import React, { useState } from 'react';
// import './auth.css';

// const SignUp = ({ onSignUp, onToggle }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSignUp(username, password);
//   };

//   return (
//     <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-sm w-full">
//         <label className="block mb-2">
//           Username
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full mt-1 p-2 border border-gray-300 rounded"
//             required
//           />
//         </label>
//         <label className="block mb-4">
//           Password
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full mt-1 p-2 border border-gray-300 rounded"
//             required
//           />
//         </label>
//         <button
//           type="submit"
//           className="w-full mt-4 bg-green-600 text-white p-2 rounded hover:bg-green-700"
//         >
//           Sign Up
//         </button>
//       </form>
//       <p className="mt-4">
//         Already have an account?{' '}
//         <span onClick={onToggle} className="text-green-600 cursor-pointer hover:underline">
//           Log In
//         </span>
//       </p>
//     </section>
//   );
// };

// export default SignUp;




// src/pages/SignUp.js
import React, { useState } from 'react';
import './signup.css'; // Import signup-specific CSS

const SignUp = ({ onSignUp, onToggle }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(username, password);
  };

  return (
    <section className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?{' '}
          <span onClick={onToggle} className="login-toggle">
            Log In
          </span>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
