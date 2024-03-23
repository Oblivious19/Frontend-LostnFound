// import React from 'react';
// // import logo from './logo.svg';
// import ourlogo from './ourlogo.png';
// import './App.css';
// import { Link } from 'react-router-dom'; 

// import Button from 'react-bootstrap/Button';

// function Welcome() {
//   return (
//     <div className="App" >
//       <header className="App-header">
//         <img src={ourlogo} className="App-logo" alt="logo" />
//         <h4>
//           Welcome!  
//         </h4>
//         <p>
//         Find lost items easily 💕</p>
//         <div className="mb-3">
//         <Link to="/signup">
//           <Button variant="secondary" className="me-2">Sign Up</Button>
//         </Link>
//         <Link to="/login">
//           <Button variant="primary">Login</Button>
//         </Link>
//       </div>
//       </header>
//     </div>
//   );
// }

// export default Welcome;

import React from 'react';
import ourlogo from './images/ourlogo.png';
function Welcome({ onSignupClick,onLoginClick }) {
  return (
    <div className="d-flex flex-column align-items-center">
  <img src={ourlogo} className="App-logo mb-3" alt="logo" />
  <h1>Welcome</h1>
  <p>    Find lost items easily 💕</p> 
  <button onClick={onSignupClick} className="btn btn-primary btn-lg btn-block mx-auto mb-4">
    Sign Up
  </button>
  <button onClick={onLoginClick} className="btn btn-secondary btn-lg btn-block">
    Login
  </button>
</div>
  );
}

export default Welcome;


