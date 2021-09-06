import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyC7Ax3VnVvwYLPuQcXAXRsF2ucP52w0hnI',
  authDomain: 'koappi-test-server.firebaseapp.com',
  projectId: 'koappi-test-server',
  storageBucket: 'koappi-test-server.appspot.com',
  messagingSenderId: '922026094748',
  appId: '1:922026094748:web:a3f621331a1fa293eebd59',
  measurementId: 'G-X4MNVQTV8Y',
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const fireStore = firebase.firestore();
export const storage = firebase.storage();

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js"></script>
