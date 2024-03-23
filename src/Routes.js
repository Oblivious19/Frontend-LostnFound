import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import SignUp from './components/signup';
import Login from './components/login'; 

function Routes() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/signup" component={SignUp} />
        <Route path="/login" element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>
  );
}

export default Routes;