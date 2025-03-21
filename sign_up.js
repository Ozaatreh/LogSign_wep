// sign_up.js
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Get the Firebase app and initialize the necessary services
const auth = getAuth();
const db = getFirestore();

// Get the sign-up form
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get input values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const sex = document.getElementById("sex").value;

  try {
    // Create a new user with email and password in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save additional user information to Firestore
    await setDoc(doc(db, "users", user.uid), {
      firstName,
      lastName,
      email,
      sex,
      createdAt: new Date(),
    });

    // Show success message
    document.getElementById("message").innerHTML = "Account created successfully!";
    // Optionally, you can redirect to the login page
    // window.location.href = "login.html";

  } catch (error) {
    // Show error message if the signup fails
    document.getElementById("message").innerHTML = `Error: ${error.message}`;
  }
});
