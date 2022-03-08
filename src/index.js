import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'

// contextproviders
import MessageContextProvider from './context/messageContext'

ReactDOM.render(
  <React.StrictMode>
    <MessageContextProvider>
      <Router>
        <App />
      </Router>
    </MessageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);