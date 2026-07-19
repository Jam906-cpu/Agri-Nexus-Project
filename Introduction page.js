// Introduction page.js
// Handles the short "contact us" form at the bottom of the Introduction page.

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var fname = document.getElementById("fname").value.trim();
        var lname = document.getElementById("lname").value.trim();
        var message = document.querySelector("textarea[name='message']").value.trim();

        if (fname === "") {
            alert("Please enter your first name.");
            return;
        }

        if (message === "") {
            alert("Please write a short message before submitting.");
            return;
        }

        alert("Thank you, " + fname + "! Your message has been received.");
        form.reset();
    });

    // Highlight the nav link that was clicked
    var navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (l) { l.style.color = "black"; });
            link.style.color = "#27500A";
        });
    });

    // Let the user know their career choice was noted
    var careerSelect = document.getElementById("career");
    if (careerSelect) {
        careerSelect.addEventListener("change", function () {
            console.log("Career selected: " + careerSelect.value);
        });
    }

    // Simple hover effect on the table rows
    var rows = document.querySelectorAll("table tr");
    rows.forEach(function (row) {
        row.addEventListener("mouseover", function () {
            row.style.backgroundColor = "#eef5ec";
        });
        row.addEventListener("mouseout", function () {
            row.style.backgroundColor = "";
        });
    });
});
