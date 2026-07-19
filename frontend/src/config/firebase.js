import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// You can replace these placeholders with your actual Firebase config or add them to frontend/.env
const firebaseConfig = {
  apiKey: "AIzaSyCW3kx5oYXNkjRXSjFz404HPjDby02hYkc",
  authDomain: "bhawna-closet.firebaseapp.com",
  projectId: "bhawna-closet",
  storageBucket: "bhawna-closet.firebasestorage.app",
  messagingSenderId: "450046441815",
  appId: "1:450046441815:web:bb63f9e71b1dd3077ba612",
  measurementId: "G-3R82TF3Z29"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
