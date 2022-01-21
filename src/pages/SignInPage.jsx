import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import React, { useState, useEffect } from 'react';

const auth = getAuth();

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(
    false || localStorage.getItem('firebaseToken'),
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        localStorage.clear();
      }
    });
  }, []);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsAuthenticated(true);
        const firebaseToken = userCredential.user.accessToken;
        localStorage.setItem('firebaseToken', firebaseToken);
        return firebaseToken;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuthenticated(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
