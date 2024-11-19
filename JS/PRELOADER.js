document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("preloader");

    window.addEventListener("load", function() {
        loader.classList.add("fade-out");
    });
});
