import React, { useState } from 'react';
import './App.css';

function LoginScreen() {
  return (
    <div className="login-container">
      <form>
        <div className="input-group">
          <h2>Email:</h2>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-group">
          <h2>Password:</h2>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <body>
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
    <header className={`App-header ${darkMode ? 'dark-header' : 'light-header'}`}>
      <button onClick={toggleLogin}>
        Login
      </button>
      <button onClick={toggleTheme}>
        {darkMode ? '🌙' : '🌞'}
      </button>
    </header>

   
    <div className="main-container">
      {showLogin && <LoginScreen />}
    </div>
  </div>
  </body>
  );
}

export default App;
