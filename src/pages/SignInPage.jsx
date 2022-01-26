import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { login, logout } from 'actions/auth';

function SignInPage() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const handleSignOut = () => dispatch(logout());

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Logged In</h1>
          <button type="button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSignIn}
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
            Sign In
          </button>
        </form>
      )}
    </div>
  );
}

export default SignInPage;
