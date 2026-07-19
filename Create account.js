// Create account.js
// Validates the sign-up form before "creating" the account.

document.addEventListener("DOMContentLoaded", function () {
    var signupForm = document.querySelector("form");
    var passwordBox = document.getElementById("password");
    var fullnameBox = document.getElementById("fullname");

    if (!signupForm) return;

    signupForm.addEventListener("submit", function (event) {
        // Stop the page from reloading/submitting for real
        event.preventDefault();

        // Simple password length check
        if (passwordBox.value.length < 6) {
            alert("Your password should be at least 6 characters long.");
            return;
        }

        // If everything is fine, show a success message
        alert("Account created successfully! Welcome, " + fullnameBox.value + ".");
        signupForm.reset();
    });

    // Give a quick hint about the account type chosen
    var accountType = document.getElementById("account type");
    if (accountType) {
        accountType.addEventListener("change", function () {
            if (accountType.value === "farmer") {
                console.log("Farmer/Seller account selected.");
            } else if (accountType.value === "buyer") {
                console.log("Buyer account selected.");
            }
        });
    }

    // Live password strength hint as the user types
    if (passwordBox) {
        passwordBox.addEventListener("input", function () {
            var length = passwordBox.value.length;
            if (length === 0) {
                passwordBox.style.borderColor = "#ccc";
            } else if (length < 6) {
                passwordBox.style.borderColor = "red";
            } else {
                passwordBox.style.borderColor = "#27a547";
            }
        });
    }

    // Highlight the submit button on hover
    var submitButton = document.querySelector(".submit");
    if (submitButton) {
        submitButton.addEventListener("mouseover", function () {
            submitButton.style.opacity = "0.85";
        });
        submitButton.addEventListener("mouseout", function () {
            submitButton.style.opacity = "1";
        });
    }
});
