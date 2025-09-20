import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    // Temporary console log for testing
    console.log('Login attempted with:', { email, password });
    
    // Simulate login (replace with actual Firebase logic later)
    setTimeout(() => {
      setMessage('Login successful!');
      setLoading(false);
    }, 1000);
  };

  const handleForgotPassword = () => {
    if (!email) {
      setError('Please enter your email address first.');
      return;
    }
    console.log('Forgot password clicked for:', email);
    setMessage('Password reset email would be sent to: ' + email);
  };

  const handleRegister = () => {
    console.log('Register clicked');
    // For now, just show a message
    setMessage('Registration page would open here');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form-wrapper">
          <div className="zara-logo">
            <h1>LOUDLY WORN</h1>
          </div>
          
          <div className="login-form">
            <h2>LOG IN</h2>
            
            {error && (
              <div style={{
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
              <div style={{
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
                  type="email"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-input"
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="input-group">
                <input
                  type="password"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="forgot-password">
                <button 
                  type="button" 
                  className="forgot-link"
                  onClick={handleForgotPassword}
                  disabled={loading}
                >
                  Have you forgotten your password?
                </button>
              </div>
              
              <div className="button-group">
                <button 
                  type="submit" 
                  className="login-btn"
                  disabled={loading}
                >
                  {loading ? 'LOGGING IN...' : 'LOG IN'}
                </button>
                
                <button 
                  type="button" 
                  className="register-btn"
                  onClick={handleRegister}
                  disabled={loading}
                >
                  REGISTER
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

export default Login;