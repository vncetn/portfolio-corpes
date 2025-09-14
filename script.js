document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all modal triggers
    const openButtons = document.querySelectorAll(".view-more");
    const closeButtons = document.querySelectorAll(".close");
    const modals = document.querySelectorAll(".modal");

    // Ensure all modals are hidden on page load
    modals.forEach(modal => {
        modal.style.display = "none";
    });

    // Open the corresponding modal
    openButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetModalId = this.getAttribute("data-modal");
            const targetModal = document.getElementById(targetModalId);
            if (targetModal) {
                targetModal.style.display = "flex";
            }
        });
    });

    // Close modals when close button is clicked
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".modal").style.display = "none";
        });
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener("click", function (event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentSlide = 0;

// Show Slide with Smooth Animation
function showSlide(index) {
    const slideWidth = slides[0].clientWidth; // Get single slide width
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    
    // Update active dot
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

// Next Slide
rightArrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Previous Slide
leftArrow.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Click on Dots to Change Slide
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Initialize First Slide
showSlide(currentSlide);





  





function toggleNightMode() {
    document.body.classList.toggle("night-mode-active"); // Toggle the class

    // Change the moon icon to a sun icon and vice versa
    const nightModeIcon = document.querySelector(".night-mode");
    if (document.body.classList.contains("night-mode-active")) {
        nightModeIcon.textContent = s; // Change to sun icon
    } else {
        nightModeIcon.textContent = "🌙"; // Change back to moon icon
    }
}


  document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const textArray = [">.<", ":)", "^_^", "UwU", "Cute"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      let currentText = textArray[textIndex];

      if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex);
        charIndex--;
      } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        speed = 1000; // Pause before erasing
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        speed = 500; // Pause before typing new text
      }

      setTimeout(typeEffect, speed);
    }

    typeEffect();
  });

  document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".scroll-reveal");

    function handleScroll() {
        scrollElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
                el.classList.add("show");
            } else {
                el.classList.remove("show"); // Remove when out of view
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
