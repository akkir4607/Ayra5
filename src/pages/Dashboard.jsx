import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { logoutUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        borderBottom: '1px solid #eee',
        paddingBottom: '20px'
      }}>
        <h1>LOUDLY WORN Dashboard</h1>
        <button 
          onClick={handleLogout}
          style={{
            padding: '10px 20px',
            backgroundColor: '#000',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            textTransform: 'uppercase'
          }}
        >
          Logout
        </button>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3>User Information</h3>
          <p><strong>Name:</strong> {userData?.displayName || 'N/A'}</p>
          <p><strong>Email:</strong> {currentUser?.email}</p>
          <p><strong>Phone:</strong> {userData?.phone || 'N/A'}</p>
          <p><strong>Member since:</strong> {new Date(userData?.createdAt).toLocaleDateString()}</p>
          <p><strong>Email verified:</strong> {currentUser?.emailVerified ? 'Yes' : 'No'}</p>
        </div>

        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3>Account Status</h3>
          <p><strong>Status:</strong> {userData?.isActive ? 'Active' : 'Inactive'}</p>
          <p><strong>Last login:</strong> {userData?.lastLoginAt ? new Date(userData.lastLoginAt).toLocaleString() : 'N/A'}</p>
          <p><strong>Profile updated:</strong> {userData?.updatedAt ? new Date(userData.updatedAt).toLocaleString() : 'N/A'}</p>
        </div>

        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3>Preferences</h3>
          <p><strong>Newsletter:</strong> {userData?.preferences?.newsletter ? 'Subscribed' : 'Not subscribed'}</p>
          <p><strong>Notifications:</strong> {userData?.preferences?.notifications ? 'Enabled' : 'Disabled'}</p>
        </div>

        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3>Quick Actions</h3>
          <button style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            cursor: 'pointer'
          }}>
            Edit Profile
          </button>
          <button style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            cursor: 'pointer'
          }}>
            Order History
          </button>
          <button style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            cursor: 'pointer'
          }}>
            Account Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;