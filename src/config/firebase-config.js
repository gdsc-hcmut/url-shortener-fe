import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAgrh6lQMSuP9bN1D85qUDb8lf6P9A8TfY',
  authDomain: 'gdsc-url-shortener.firebaseapp.com',
  projectId: 'gdsc-url-shortener',
  storageBucket: 'gdsc-url-shortener.appspot.com',
  messagingSenderId: '887409352695',
  appId: '1:887409352695:web:244cb0a1dba2c71d2cd8f2',
  measurementId: 'G-FRQH8KNRVC',
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
