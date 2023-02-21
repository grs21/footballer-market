import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './services/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);

reportWebVitals();
