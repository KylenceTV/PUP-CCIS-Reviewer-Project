const nav = document.querySelector("nav");
const indicator = nav.querySelector(".indicator");
const items = nav.querySelectorAll("ul li a");

items.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    const itemRect = e.target.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    indicator.style.width = `${itemRect.width}px`;
    indicator.style.left = `${itemRect.left - navRect.left}px`;
  });
});

nav.addEventListener("mouseleave", () => {
  indicator.style.width = `0px`;
});

document.addEventListener("DOMContentLoaded", function() {
  const accountButton = document.getElementById("accountButton");
  const accountDropdown = document.getElementById("accountDropdown");

  accountButton.addEventListener("click", function(event) {
      event.preventDefault();
      accountDropdown.classList.toggle("show");
  });

  window.addEventListener("click", function(event) {
      if (!accountButton.contains(event.target) && !accountDropdown.contains(event.target)) {
          accountDropdown.classList.remove("show");
      }
  });
});
