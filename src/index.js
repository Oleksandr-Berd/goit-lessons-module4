import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { PaginationProvider } from 'components/context/pagination';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PaginationProvider>
      <App />
    </PaginationProvider>
  </React.StrictMode>
);
