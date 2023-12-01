import React from 'react';
import './LoginForm.css'; // Import your CSS file
import './SignupForm.css'; // Import your CSS file
import { useState } from 'react';
const LoginForm = () => {
  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form>
        <input type="text" placeholder="Username" className="form-input" required />
        <input type="password" placeholder="Password" className="form-input" required />
        <button type="submit" className="form-btn">Login</button>
      </form>
      <div className="additional-options">
        <p>
          <a href="#forgot-password">Forgot Password?</a>
        </p>
        <p>
          Don't have an account? <a href="#sign-up">Sign Up</a>
        </p>
        <p>
          Or login with:
          <button className="login-with-btn">Google</button>
          <button className="login-with-btn">Facebook</button>
        </p>
      </div>
    </div>
  );
};





const SignupForm = ({ toggleForms }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup submission logic here
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          className="form-input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="form-input"
          required
        />
        <button type="submit" className="form-btn">
          Sign Up
        </button>
      </form>
      <p className="toggle-form">
        Already have an account?{' '}
        <button onClick={toggleForms} className="toggle-btn">
          Log In
        </button>
      </p>
    </div>
  );
};

export default {SignupForm, LoginForm };
