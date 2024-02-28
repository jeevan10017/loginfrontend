import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignupForm from './components/SignupForm.js';
import LoginForm from './components/LoginForm.js';

const App = () => {
  return (
    <Router>
      <div>
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
