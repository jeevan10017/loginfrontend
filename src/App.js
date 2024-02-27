// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignupForm from './components/SignupForm.js';
import LoginForm from './components/LoginForm.js';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
