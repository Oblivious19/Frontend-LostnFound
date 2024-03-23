// import React from 'react';

// function SignUp() {
//   return (
//     <div>
//       <h2>Sign Up</h2>
      
//       <form>
//         <input type="text" placeholder="Username" /><br />
//         <input type="email" placeholder="Email" /><br />
//         <input type="password" placeholder="Password" /><br />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;

import React from 'react';

function Signup({ onBackToWelcome }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1>Sign Up</h1>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
        <button
          onClick={onBackToWelcome}
          className="btn btn-secondary mt-3"
        >
          Back to Welcome
        </button>
      </div>
    </div>
  );
}

export default Signup;