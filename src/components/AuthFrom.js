import React, { useState } from 'react';
import './AuthForm.css'; // We'll style our forms here.

const AuthFrom = () => {
  const [isLogin, setIsLogin] = useState(true);  // State to toggle between Login and Signup forms
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

  // Handle form switch
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', confirmPassword: '' }); // Reset form fields
  };

  // Handle form submission (dummy for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login
      alert('Logging in with email: ${formData.email}');
    } else {
      // Handle signup
      alert('Signing up with email: ${formData.email}');
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {!isLogin && (
          <div className="input-container">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <button type="submit" className="submit-btn">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p className="toggle-link" onClick={toggleForm}>
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default AuthFrom;