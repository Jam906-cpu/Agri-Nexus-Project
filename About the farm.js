// About the farm.js
// Adds a small fade-in effect to each service card as it scrolls into view.

document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".middiv");

    cards.forEach(function (card) {
        card.style.opacity = "0";
        card.style.transition = "opacity 0.6s ease";
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(function (card) {
        observer.observe(card);
    });

    // Clicking a card gives it a slightly bigger, highlighted look
    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            cards.forEach(function (c) {
                c.style.transform = "scale(1)";
                c.style.boxShadow = "none";
            });
            card.style.transform = "scale(1.03)";
            card.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
        });
    });

    // Simple hover effect on the little role tags (e.g. "Farmers", "Buyers")
    var tags = document.querySelectorAll(".mindiv");
    tags.forEach(function (tag) {
        tag.addEventListener("mouseover", function () {
            tag.style.backgroundColor = "#E1EFE4";
        });
        tag.addEventListener("mouseout", function () {
            tag.style.backgroundColor = "#F1EFEA";
        });
    });
});
