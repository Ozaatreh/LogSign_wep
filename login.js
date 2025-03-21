document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "home.html"; // ✅ Navigate to home
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});
