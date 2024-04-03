/* eslint-disable quotes *//* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';

import {getAuth } from 'firebase/auth';

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfi = {
//   apiKey: 'AIzaSyCOMW68vne_5RKKtrb8glwiOnJoXPEwZ2E',
//   authDomain: 'fir-auth-2e05c.firebaseapp.com',
//   projectId: 'fir-auth-2e05c',
//   storageBucket: 'fir-auth-2e05c.appspot.com',
//   messagingSenderId: '565301010881',
//   appId: '1:565301010881:web:f3869a32f513ec880c0f40',
// };

const firebaseConfig = {
  apiKey: "AIzaSyBRgkJ0wWOPSghMyFjrE1SRdq0eh2lGcTA",
  authDomain: "dietauth.firebaseapp.com",
  projectId: "dietauth",
  storageBucket: "dietauth.appspot.com",
  messagingSenderId: "490412133224",
  appId: "1:490412133224:web:4ffc75bace3386776924dd",
  measurementId: "G-2YL97C8M5K",
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
const firebase_auth = initializeAuth(firebase_app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
// const firebase_auth = getAuth(firebase_app);

export {firebase_app, firebase_auth};










// You are initializing Firebase Auth for React Native without providing
// AsyncStorage. Auth state will default to memory persistence and will not
// persist between sessions. In order to persist auth state, install the package
// "@react-native-async-storage/async-storage" and provide it to
// initializeAuth:

// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// const auth = initializeAuth(app, {
//  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });