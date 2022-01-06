import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
// We will create these two pages in a moment
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

export default function App() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">User</Link>
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
