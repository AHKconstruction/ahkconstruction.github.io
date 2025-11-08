// Lightbox functionality for project images
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxCaption = document.querySelector(".lightbox-caption");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".projects-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.nextElementSibling?.textContent || "";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.style.display = "none";
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") lightbox.style.display = "none";
});
// ---------------------------
// Simple contact form handler
// ---------------------------
const form = document.querySelector(".contact-form form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault(); // stop actual submission

    // Optionally collect form data
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();

    // Basic validation
    if (!name || !email) {
      alert("Please fill in your name and email before submitting.");
      return;
    }

    // Show a success message
    alert("✅ Thank you, " + name + "! Your message has been sent successfully.");

    // Reset form fields
    form.reset();
  });
}
