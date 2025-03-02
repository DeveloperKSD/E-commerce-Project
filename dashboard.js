// Updated dashboard.js

document.addEventListener("DOMContentLoaded", function() {
    // Check if user is logged in (this example uses localStorage)
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
  
    // If user is logged in, show their info
    if (username && email && phone) {
      document.getElementById("user-name").textContent = `Welcome back, ${username}!`;
      document.getElementById("user-email").textContent = email;
      document.getElementById("user-phone").textContent = phone;
    } else {
      window.location.href = "login.html"; // Redirect to login if not logged in
    }
  
    // Logout functionality
    document.getElementById("logoutBtn").addEventListener("click", function() {
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("phone");
      localStorage.setItem("isLoggedIn", "false");
      window.location.href = "login.html"; // Redirect to login after logout
    });
});
