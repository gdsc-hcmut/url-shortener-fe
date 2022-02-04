import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { register, logout } from 'actions/auth';
import api from 'services/api';

function SignUpPage() {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('ahihi');
    dispatch(register(email, password));
  };

  const handleSignOut = () => dispatch(logout());

  const handlePrivateRoute = async () => {
    const res = await api.get('http://localhost:5000/api/private');
    console.log(res.data);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center text-2xl">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Logged In</h1>
          <button type="button" onClick={handleSignOut}>
            Sign Out
          </button>
          <br />
          <button type="button" onClick={handlePrivateRoute}>
            Get private route
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSignUp}
          className="flex flex-col justify-center items-center"
        >
          <input
            className="border border-red-600"
            type="email"
            value={email}
            onChange={handleEmail}
          />
          <input
            className="border border-blue-600"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <button className="border border-black-600" type="submit">
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
}

export default SignUpPage;
