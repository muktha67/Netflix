// Scroll effect on navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Redirect on profile icon click
  const profileIcon = document.querySelector(".profile-icon");
  if (profileIcon) {
    profileIcon.addEventListener("click", () => {
      window.location.href = "profile-details.html";
    });
  }

  // Hover effect on movie cards
  const movieCards = document.querySelectorAll(".content-card"); // Not ".movie-card"
  movieCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.transition = "transform 0.3s ease";
    });
  });
});
