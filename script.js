
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu after selecting a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  observer.observe(element);
});

// Scroll progress bar
const progressBar = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  const scrollable =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = scrollable > 0
    ? (window.scrollY / scrollable) * 100
    : 0;

  progressBar.style.width = `${progress}%`;
});

// Automatically update footer year
document.getElementById("year").textContent =
  new Date().getFullYear();
