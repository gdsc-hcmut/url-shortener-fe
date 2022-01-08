import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

export default function App() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/" class="font-bold underline">Home</Link>
          </li>
          <li>
            <Link to="/about" class="font-bold underline">User</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<UserPage />} />
        </Routes>
      </div>
    </div>
  );
}
