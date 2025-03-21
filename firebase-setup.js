// firebase-setup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBzBXkfHcEXzJSk78DqAD9E21oMBFDaY6k",
   authDomain: "webapp1-1faf6.firebaseapp.com",
   projectId: "webapp1-1faf6",
   storageBucket: "webapp1-1faf6.firebasestorage.app",
   messagingSenderId: "987792283410",
   appId: "1:987792283410:web:cbfc3c68c1bc84fa6085cb"
 };
  

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

window.auth = auth;
window.db = db;
