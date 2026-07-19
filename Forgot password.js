// Forgot password.js
// Handles the "Send code via SMS" and "Send code via E-mail" buttons.

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll("input[type='button'], input[type='submit']");
    var email = document.getElementById("email");
    var phone = document.querySelector("input[type='number']");

    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            var isSms = button.value.toLowerCase().includes("sms");

            if (isSms && (!phone || phone.value.trim() === "")) {
                alert("Please enter your phone number to receive a code via SMS.");
                return;
            }

            if (!isSms && (!email || email.value.trim() === "")) {
                alert("Please enter your e-mail address to receive a code.");
                return;
            }

            alert(isSms ? "A verification code has been sent via SMS." : "A verification code has been sent via e-mail.");

            // Simple cooldown so the user can't spam the button
            var originalText = button.value;
            button.disabled = true;
            button.value = "Sent! Wait 10s...";
            setTimeout(function () {
                button.disabled = false;
                button.value = originalText;
            }, 10000);
        });

        // Small hover effect
        button.addEventListener("mouseover", function () {
            button.style.opacity = "0.85";
        });
        button.addEventListener("mouseout", function () {
            button.style.opacity = "1";
        });
    });

    var link = document.querySelector(".divi a");
    if (link) {
        link.addEventListener("click", function () {
            console.log("Going to create an account instead.");
        });
    }
});
