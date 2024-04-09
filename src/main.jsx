import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="https://xfirefly5.github.io/DevMugsShop" element={<App/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
