// createacc.js
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");

    // Validate username
    if (username.value.trim() === "") {
        showError(username, "Username is required.");
        isValid = false;
    }

    // Validate email
    if (!email.value.match(/^\S+@\S+\.\S+$/)) {
        showError(email, "Enter a valid email address.");
        isValid = false;
    }

    // Validate password
    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters.");
        isValid = false;
    }

    if (password.value !== confirmPassword.value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords do not match.',
        });
        isValid = false;
    }
    

    // If valid, show SweetAlert success and redirect
    if (isValid) {
        Swal.fire({
            icon: "success",
            title: "Account Created!",
            text: "You can now log in with your credentials.",
            confirmButtonText: "Go to Login",
        }).then(() => {
            window.location.href = "login.html"; // Redirect to login
        });
    }
});

// Helper to show error messages
function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    errorSpan.style.color = "red";
}

// Toggle password visibility
document.querySelectorAll(".toggle-password").forEach(function (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
        const passwordInputs = document.querySelectorAll("#password, #confirm-password");
        passwordInputs.forEach(function (passwordInput) {
            const type = passwordInput.type === "password" ? "text" : "password";
            passwordInput.type = type;
        });
        this.textContent = this.textContent === "👁️" ? "🙈" : "👁️";
    });
});
