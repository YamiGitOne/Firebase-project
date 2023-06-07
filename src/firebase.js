import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAfHELa2wurSDfW3wYVgu9z_swtNglhFEI",
  authDomain: "fireb-poject.firebaseapp.com",
  projectId: "fireb-poject",
  storageBucket: "fireb-poject.appspot.com",
  messagingSenderId: "378940736443",
  appId: "1:378940736443:web:4280f78355a25d1efafa9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {auth};