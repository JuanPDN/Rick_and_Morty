import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root')

createRoot(container).render(
  <BrowserRouter>
  <App />,
  </BrowserRouter>
)
