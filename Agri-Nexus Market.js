// Agri-Nexus Market.js
// Lets a visitor add crop listings to a simple running cart count.

document.addEventListener("DOMContentLoaded", function () {
    var addButtons = document.querySelectorAll(".button");
    var cartCount = 0;

    addButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var cropItem = button.closest(".cropitem");
            var cropName = cropItem ? cropItem.querySelector(".cropname").textContent : "item";

            cartCount++;
            alert(cropName + " added to your cart. (" + cartCount + " item(s) in cart)");
        });

        // Small hover feedback on the "+" buttons
        button.addEventListener("mouseover", function () {
            button.style.opacity = "0.8";
        });
        button.addEventListener("mouseout", function () {
            button.style.opacity = "1";
        });
    });

    // Highlight a price row when clicked
    var priceRows = document.querySelectorAll(".price-row");
    priceRows.forEach(function (row) {
        row.addEventListener("click", function () {
            priceRows.forEach(function (r) { r.style.backgroundColor = ""; });
            row.style.backgroundColor = "rgba(255,255,255,0.1)";
        });
    });

    // Highlight a crop card on hover
    var cropItems = document.querySelectorAll(".cropitem");
    cropItems.forEach(function (item) {
        item.addEventListener("mouseover", function () {
            item.style.boxShadow = "0 4px 10px rgba(0,0,0,0.9)";
        });
        item.addEventListener("mouseout", function () {
            item.style.boxShadow = "0 2px 6px rgba(0,0,0,0.8)";
        });
    });

    // Clicking a numbered step button highlights it
    var stepButtons = document.querySelectorAll(".pre2end button");
    stepButtons.forEach(function (step) {
        step.addEventListener("click", function () {
            stepButtons.forEach(function (s) { s.style.backgroundColor = ""; });
            step.style.backgroundColor = "#7ab648";
        });
    });
});
