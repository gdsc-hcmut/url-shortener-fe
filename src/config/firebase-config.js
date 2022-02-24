import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAtEmHhdbIDe5u91yCeYl3rqmsFm9n6VkA',
  authDomain: 'url-shortener-production.firebaseapp.com',
  projectId: 'url-shortener-production',
  storageBucket: 'url-shortener-production.appspot.com',
  messagingSenderId: '441677540122',
  appId: '1:441677540122:web:c77a756155c498c0bc9aa3',
  measurementId: 'G-EPB91F8BWG',
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
