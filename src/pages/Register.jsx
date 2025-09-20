import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';
import './Login.css'; // Reuse the same styles

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dateOfBirth: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);

    try {
      const userData = {
        displayName: `${formData.firstName} ${formData.lastName}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        dateOfBirth: formData.dateOfBirth,
        preferences: {
          newsletter: true,
          notifications: true
        }
      };

      const result = await registerUser(formData.email, formData.password, userData);
      
      if (result.success) {
        setMessage('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Registration error:', error);
    }
    
    setLoading(false);
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form-wrapper">
          <div className="zara-logo">
            <h1>LOUDLY WORN</h1>
          </div>
          
          <div className="login-form">
            <h2>REGISTER</h2>
            
            {error && (
              <div className="error-message" style={{
                color: '#ff4444',
                backgroundColor: '#ffebee',
                padding: '10px',
                borderRadius: '4px',
                marginBottom: '15px',
                fontSize: '14px'
              }}>
                {error}
              </div>
            )}
            
            {message && (
              <div className="success-message" style={{
                color: '#4caf50',
                backgroundColor: '#e8f5e8',
                padding: '10px',
                borderRadius: '4px',
                marginBottom: '15px',
                fontSize: '14px'
              }}>
                {message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="FIRST NAME"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="login-input"
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="input-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="LAST NAME"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="login-input"
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  className="login-input"
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE NUMBER"
                  value={formData.phone}
                  onChange={handleChange}
                  className="login-input"
                  disabled={loading}
                />
              </div>
              
              <div className="input-group">
                <input
                  type="date"
                  name="dateOfBirth"
                  placeholder="DATE OF BIRTH"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="login-input"
                  disabled={loading}
                />
              </div>
              
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  value={formData.password}
                  onChange={handleChange}
                  className="login-input"
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="CONFIRM PASSWORD"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="login-input"
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="button-group">
                <button 
                  type="submit" 
                  className="login-btn"
                  disabled={loading}
                >
                  {loading ? 'CREATING ACCOUNT...' : 'REGISTER'}
                </button>
                
                <button 
                  type="button" 
                  className="register-btn"
                  onClick={handleBackToLogin}
                  disabled={loading}
                >
                  BACK TO LOGIN
                </button>
              </div>
            </form>
          </div>
          
          <div className="help-section">
            <a href="#" className="help-link">HELP</a>
          </div>
        </div>
      </div>
      
      <div className="login-right">
        <div className="model-image">
          <img src="/src/images/101.jpg" alt="Fashion Model" className="model-img" />
        </div>
      </div>
    </div>
  );
};

export default Register;