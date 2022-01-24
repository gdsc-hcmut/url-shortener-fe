import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import ModalPage from './pages/ModalPage';
import SignUpDesktop from './pages/SignUpDesktop';
import store from './store';
import './index.css';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/sign-up" element={<SignUpDesktop />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
