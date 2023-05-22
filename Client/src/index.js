import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://rickandmorty-production-51e4.up.railway.app'

const container = document.getElementById('root')

createRoot(container).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
