import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	// FIREBASE CONFIG HERE
};

initializeApp(firebaseConfig);

const auth = getAuth()

export { auth }