import React, { useState } from 'react';
import './LoginForm.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Show Password:', showPassword);
    // You can add your authentication logic here
  };

  return (
    <div className="login-form">
      <h2>WELCOME IMAGGAR OFFICIALS</h2>

      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <label>
        Password:
        <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </label>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
