import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import './index.css'; // Optional: Include global styles

// Create the root and render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

