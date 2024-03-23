// import React, { useState } from 'react';
// import Welcome from './components/Welcome';
// import Signup from './components/signup';
// import Login from './components/login';

// function App() {
//   const [showSignup, setShowSignup] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);

//   const handleSignupClick = () => {
//     setShowSignup(true);
//   };

//   const handleLoginClick = () => {
//     setShowLogin(true);
//   };

//   const handleBackToWelcome = () => {
//     setShowSignup(false);
//     setShowLogin(false);
//   };

//   return (
//     <div>
//       {showSignup ? (
//         <Signup onBackToWelcome={handleBackToWelcome} />
//       ) : showLogin ? (
//         <Login onBackToWelcome={handleBackToWelcome} />
//       ) : (
//         <Welcome
//           onSignupClick={handleSignupClick}
//           onLoginClick={handleLoginClick}
//         />
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import logo from './ourlogo.png'; // Replace with your logo file
import placeholder from './ourlogo.png'; // Replace with your image file

function App() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home handleLoginClick={handleLoginClick} />} />
        <Route path="/login" element={<Login onBackToHome={handleBackToHome} />} />
      </Routes>
    </div>
  );
}

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#">Explore</Nav.Link>
            <Nav.Link href="#">Notifications</Nav.Link>
            <Nav.Link href="#">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Home({ handleLoginClick }) {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Post />
          <Post />
          {/* Add more Post components for additional posts */}
        </Col>
        <Col md={4}>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
              <h2>Welcome</h2>
              <button onClick={handleLoginClick} className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function Login({ onBackToHome }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <button onClick={onBackToHome} className="btn btn-secondary mt-3">
          Back to Home
        </button>
      </div>
    </div>
  );
}

function Post() {
  return (
    <Card className="mb-4">
      <Card.Header>
        <div className="d-flex align-items-center">
          <img
            src={placeholder}
            alt="Avatar"
            className="rounded-circle mr-3"
            style={{ width: '40px', height: '40px' }}
          />
          <div>
            <h6 className="mb-0">Username</h6>
            <small className="text-muted">Location</small>
          </div>
        </div>
      </Card.Header>
      <Card.Img variant="top" src={placeholder} />
      <Card.Body>
        <Card.Text>
          <strong>Username</strong> Post caption goes here...
        </Card.Text>
        <Button variant="link">View Comments</Button>
      </Card.Body>
    </Card>
  );
}

export default App;