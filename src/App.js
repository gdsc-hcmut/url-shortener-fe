import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
