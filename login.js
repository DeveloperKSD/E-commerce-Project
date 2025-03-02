const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// Select form and elements
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Add form submission event listener
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Clear previous error message
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    // Validate email
    if (!emailInput.checkValidity()) {
        // Show SweetAlert2 error for invalid email
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email!',
            text: 'Please enter a valid email address.',
            confirmButtonText: 'Try Again'
        });
        return;
    }

    // Validate password
    if (!passwordInput.checkValidity()) {
        // Show SweetAlert2 error for invalid password
        Swal.fire({
            icon: 'error',
            title: 'Invalid Password!',
            text: 'Password must be at least 6 characters long.',
            confirmButtonText: 'Try Again'
        });
        return;
    }

    // If validation passes, show success message with SweetAlert2 and redirect
    Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'You will be redirected to the homepage shortly.',
        showConfirmButton: false,
        timer: 2000, // Duration of the popup
        timerProgressBar: true
    }).then(() => {
        // Store user data in localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", "User");  // Replace with actual username
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("phone", "+1234567890");  // Replace with actual phone number

        // Redirect after the popup is closed
        window.location.href = 'dashboard.html'; // Redirect to the dashboard
    });
});

// Check if the user is already logged in when the page loads
window.onload = function () {
    if (localStorage.getItem("isLoggedIn") === "true") {
        // If the user is logged in, redirect to a protected page (like the dashboard)
        window.location.href = "dashboard.html";  // You can change this to wherever you want to redirect
    }
};

// Handle form submission for login
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Example of validating credentials (replace with actual validation logic)
    if (username === "user" && password === "password") {
        // Store login state in localStorage
        localStorage.setItem("isLoggedIn", "true");

        // Store user info in localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("email", "user@example.com");  // Replace with actual email
        localStorage.setItem("phone", "+1234567890");  // Replace with actual phone number

        // Redirect to a protected page (e.g., dashboard)
        window.location.href = "dashboard.html";  // Redirect to the dashboard or homepage
    } else {
        alert("Invalid credentials! Please try again.");
    }
});
