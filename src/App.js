// // src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import CourseUpload from './pages/CourseUpload';
// import About from './pages/About';
// import Collaboration from './pages/Collaboration';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import Profile from './pages/Profile';
// import ProfilePage from './pages/ProfilePage';
// import ConnectPage from './pages/ConnectPage';
// import Message from './pages/Message';

// function App() {
//   const [user, setUser] = useState(null); // Current logged-in user
//   const [users, setUsers] = useState([]); // Registered users
//   const [isSignUp, setIsSignUp] = useState(false); // Controls whether SignUp or Login is shown

//   // Sign-up function to add a new user
//   const handleSignUp = (username, password) => {
//     const existingUser = users.find((u) => u.username === username);
//     if (existingUser) {
//       alert("Username already exists. Please choose a different one.");
//       return;
//     }
//     setUsers([...users, { username, password }]); // Add new user to state
//     setIsSignUp(false); // Switch to login view after successful sign-up
//     alert("Sign-up successful! Please log in.");
//   };

//   // Login function to authenticate user
//   const handleLogin = (username, password) => {
//     const foundUser = users.find((u) => u.username === username && u.password === password);
//     if (foundUser) {
//       setUser(foundUser); // Set the logged-in user if authentication is successful
//     } else {
//       alert("Incorrect username or password.");
//     }
//   };

//   // Logout function to reset user state
//   const handleLogout = () => {
//     setUser(null);
//   };

//   return (
//     <Router>
//       <Navbar user={user} />
//       <main className="pt-16">

//       {/* <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/course-upload" element={<CourseUpload /> } />
//             <Route path="/collaboration" element={<Collaboration />} />
//             <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
//             <Route path="/connect" element={<ConnectPage />}/>
//             <Route path="/message" element={<Message />} />
//             <Route path="/profile/:username" element={<ProfilePage />} />
//           </Routes> */}

//         {
//         user ?
//          (
//           // Main app routes for logged-in users
//            <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/course-upload" element={<CourseUpload /> } />
//             <Route path="/collaboration" element={<Collaboration />} />
//             <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
//             <Route path="/connect" element={<ConnectPage />}/>
//             <Route path="/message" element={<Message />} />
//             <Route path="/profile/:username" element={<ProfilePage />} />
//           </Routes>
//         ) 
//         : (
//           // Show either Login or SignUp based on isSignUp state
//           isSignUp ? (
//             <SignUp onSignUp={handleSignUp} onToggle={() => setIsSignUp(false)} />
//           ) : (
//             <Login onLogin={handleLogin} onToggle={() => setIsSignUp(true)} />
//           )
//         )
//         }
//       </main>
//     </Router>
//   );
// }

// export default App;



import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CourseUpload from './pages/CourseUpload';
import Upload from './pages/Upload'; // Import Upload page
import About from './pages/About';
import Collaboration from './pages/Collaboration';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ProfilePage from './pages/ProfilePage';
import ConnectPage from './pages/ConnectPage';
import Message from './pages/Message';

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = (username, password) => {
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      alert("Username already exists. Please choose a different one.");
      return;
    }
    setUsers([...users, { username, password }]);
    setIsSignUp(false);
    alert("Sign-up successful! Please log in.");
  };

  const handleLogin = (username, password) => {
    const foundUser = users.find((u) => u.username === username && u.password === password);
    if (foundUser) {
      setUser(foundUser);
    } else {
      alert("Incorrect username or password.");
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} />
      <main className="pt-16">
        {user ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course-upload" element={<CourseUpload />} />
            <Route path="/upload" element={<Upload />} /> {/* New Upload route */}
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/message" element={<Message />} />
            <Route path="/profile/:username" element={<ProfilePage />} />
          </Routes>
        ) : (
          isSignUp ? (
            <SignUp onSignUp={handleSignUp} onToggle={() => setIsSignUp(false)} />
          ) : (
            <Login onLogin={handleLogin} onToggle={() => setIsSignUp(true)} />
          )
        )}
      </main>
    </Router>
  );
}

export default App;
