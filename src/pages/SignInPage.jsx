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
    false || localStorage.getItem('auth') === 'true',
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setIsAuthenticated(true);
        localStorage.setItem('auth', 'true');
        const { uid } = user;
        console.log('uid', uid);
      } else {
        // User is signed out
        // ...
        console.log('signed out');
      }
    });
  }, []);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        console.log(user);
        // ...
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
        // Sign-out successful.
        localStorage.removeItem('auth');
        setIsAuthenticated(false);
      })
      .catch((error) => {
        // An error happened.
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
