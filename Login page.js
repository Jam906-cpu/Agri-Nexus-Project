// Login page.js
// Basic front-end validation for the log in form.

document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.querySelector("input[type='submit']");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (!submitButton) return;

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        if (email.value.trim() === "" || password.value.trim() === "") {
            alert("Please enter both your e-mail and password.");
            return;
        }

        if (!email.value.includes("@")) {
            alert("Please enter a valid e-mail address.");
            return;
        }

        alert("Logging in as " + email.value + "...");
        // In a real application this is where the login request would be sent.
    });

    // Let the user click the password field's label area (or double-click) to reveal it
    if (password) {
        password.addEventListener("dblclick", function () {
            password.type = (password.type === "password") ? "text" : "password";
        });
    }

    // Simple hover feedback on the log in button
    submitButton.addEventListener("mouseover", function () {
        submitButton.style.opacity = "0.85";
    });
    submitButton.addEventListener("mouseout", function () {
        submitButton.style.opacity = "1";
    });

    // Log which link the user clicked, just for basic tracking
    var links = document.querySelectorAll(".divi a");
    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navigating to: " + link.textContent.trim());
        });
    });
});
