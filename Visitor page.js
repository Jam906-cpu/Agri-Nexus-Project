// Visitor page.js
// Handles the Yes/No agriculture question and the registration form.

document.addEventListener("DOMContentLoaded", function () {
    var optionButtons = document.querySelectorAll(".option");
    var infobox = document.querySelector(".infobox");
    var form = document.querySelector("form");
    var consent = document.getElementById("consent");

    // Hide the info box until the user answers "Yes"
    if (infobox) infobox.style.display = "none";

    optionButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Reset styling on all option buttons
            optionButtons.forEach(function (btn) {
                btn.style.backgroundColor = "#F7F9F7";
            });

            // Highlight the clicked button
            button.style.backgroundColor = "#D6E8DF";

            var answer = button.textContent.trim().toLowerCase();
            if (infobox) {
                infobox.style.display = (answer === "yes") ? "block" : "none";
            }
        });
    });

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (consent && !consent.checked) {
                alert("Please confirm your consent before submitting the form.");
                return;
            }

            alert("Thank you for registering with AgriNexus!");
            form.reset();
            if (infobox) infobox.style.display = "none";
            updateFeatureCount();
        });
    }

    // Keep count of how many "features of interest" are checked
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    function updateFeatureCount() {
        var checkedCount = document.querySelectorAll("input[type='checkbox']:checked").length;
        console.log(checkedCount + " feature(s) selected");
    }
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("click", updateFeatureCount);
    });

    // Highlight the phone field red if it looks too short when the user leaves it
    var phoneField = document.getElementById("phone-number");
    if (phoneField) {
        phoneField.addEventListener("blur", function () {
            phoneField.style.borderColor = (phoneField.value.trim().length < 9) ? "red" : "#D6E8DF";
        });
    }
});
