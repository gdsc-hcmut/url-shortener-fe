import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { loadUser } from 'actions/auth';

import Homepage from './pages/Homepage';
import ModalPage from './pages/ModalPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import store from './store';
import './index.css';
import setAuthToken from './utils/setAuthToken';

if (localStorage.user) {
  setAuthToken();
}

export default function App() {
  useEffect(() => store.dispatch(loadUser()), []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
