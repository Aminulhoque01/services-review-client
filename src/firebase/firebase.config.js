// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA742upXj1MTH8rtd4Yje7gBPTBzFjkpTE",
  authDomain: "services-client-4799f.firebaseapp.com",
  projectId: "services-client-4799f",
  storageBucket: "services-client-4799f.appspot.com",
  messagingSenderId: "903302271404",
  appId: "1:903302271404:web:01c45401b5d0be0286aa09",
  measurementId: "G-KEWBV5DPWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;