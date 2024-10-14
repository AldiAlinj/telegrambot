import React, { useEffect, useState } from 'react';
import './App.css'; // Importing the CSS file for styling

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if the Telegram WebApp API is available
    if (window.Telegram?.WebApp?.initDataUnsafe) {
      const user = window.Telegram.WebApp.initDataUnsafe.user;

      if (user) {
        // Set the username or fallback to first name
        setUsername(user.username || user.first_name || 'User');
      }
    }
  }, []);

alert(window.Telegram?.WebApp?.initData)

  return (
    <div className="telegram-user-container">
      <div className="user-info-card">
        <h1 className="welcome-text">Welcome, {username}!</h1>
      </div>
    </div>
  );
}

export default App;
