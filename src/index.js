import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Use PUBLIC_URL as basename so app works when served from a subpath
          (development server may serve at /React-IBM-Project). This ensures
          the default route matches and Landing renders on initial load. */}
      <Router basename={process.env.PUBLIC_URL || '/'}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
