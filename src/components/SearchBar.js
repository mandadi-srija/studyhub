
// // src/components/SearchBar.js
// import React from 'react';
// import './SearchBar.css';  // Optional: Import your CSS for the SearchBar styling

// const SearchBar = ({ placeholder, searchTerm, setSearchTerm }) => {
//   return (
//     <div className="search-bar-container">
//       <input 
//         className="search-bar" 
//         type="text" 
//         placeholder={placeholder}
//         value={searchTerm}  // Bind the value of the input to searchTerm state
//         onChange={setSearchTerm}  // Update searchTerm as user types
//       />
//     </div>
//   );
// };

import React from 'react';
import './SearchBar.css';
const SearchBar = ({ placeholder, onChange }) => {
  return (
    <div className = "search-bar-container">
    <input
       className="search-bar"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
    </div>
  );
};

export default SearchBar;


// export default SearchBar;
