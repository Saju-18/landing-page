document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("home").addEventListener("click", () => {
        document.querySelector(".homepage").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("features").addEventListener("click", () => {
        document.querySelector(".feature-section").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("reviews").addEventListener("click", () => {
        document.querySelector(".review-section").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("price").addEventListener("click", () => {
        document.querySelector(".price-section").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("contact").addEventListener("click", () => {
        document.querySelector(".contact-section").scrollIntoView({ behavior: "smooth" });
    });
});

