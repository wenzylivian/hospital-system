const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("siteNav");

// Create overlay dynamically
const overlay = document.createElement("div");
overlay.classList.add("menu-overlay");
document.body.appendChild(overlay);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
  overlay.classList.remove("active");
});
