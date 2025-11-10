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

// Enable lightbox for slider images too
document.querySelectorAll(".mySwiper img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    // Optional: use alt text as caption for slider images
    lightboxCaption.textContent = img.alt || "";
  });
});

// Lightbox for Featured Projects ONLY
document.querySelectorAll(".featured-gallery .featured-item").forEach(item => {
  item.addEventListener("click", () => {
    const galleryId = item.getAttribute("data-gallery");
    const galleryImages = document.querySelectorAll(`.gallery-images[data-gallery="${galleryId}"] img`);

    if (galleryImages.length > 0) {
      let currentIndex = 0;

      // Show lightbox
      lightbox.style.display = "flex";
      lightboxImg.src = galleryImages[currentIndex].src;
      lightboxCaption.textContent = galleryImages[currentIndex].alt || "";

      // Remove any existing arrows first
      document.querySelectorAll(".lightbox-arrow").forEach(a => a.remove());

      // Create arrows
      let leftArrow = document.createElement("div");
      let rightArrow = document.createElement("div");
      leftArrow.className = "lightbox-arrow left-arrow";
      rightArrow.className = "lightbox-arrow right-arrow";
      leftArrow.innerHTML = "&#10094;";   // ‹
      rightArrow.innerHTML = "&#10095;";  // ›

      lightbox.appendChild(leftArrow);
      lightbox.appendChild(rightArrow);

      // Function to update image
      const updateLightbox = () => {
        lightboxImg.src = galleryImages[currentIndex].src;
        lightboxCaption.textContent = galleryImages[currentIndex].alt || "";
      };

      // Arrow click events
      leftArrow.addEventListener("click", e => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightbox();
      });
      rightArrow.addEventListener("click", e => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateLightbox();
      });

      // Keyboard navigation
      const keyHandler = e => {
        if (e.key === "ArrowRight") {
          currentIndex = (currentIndex + 1) % galleryImages.length;
          updateLightbox();
        } else if (e.key === "ArrowLeft") {
          currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
          updateLightbox();
        } else if (e.key === "Escape") {
          lightbox.style.display = "none";
          document.removeEventListener("keydown", keyHandler);
        }
      };
      document.addEventListener("keydown", keyHandler);

      // Click outside to close
      const clickHandler = e => {
        if (e.target === lightbox) {
          lightbox.style.display = "none";
          document.removeEventListener("keydown", keyHandler);
          lightbox.removeEventListener("click", clickHandler);
        }
      };
      lightbox.addEventListener("click", clickHandler);

      // Close button
      closeBtn.onclick = () => {
        lightbox.style.display = "none";
        document.removeEventListener("keydown", keyHandler);
      };
    }
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

document.addEventListener("DOMContentLoaded", function() {
  // Swiper initialization
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
});
