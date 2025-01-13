document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    easing: "ease",
    // once: true,
    //mirror: true, data-aos-mirror=true;
    //anchorPlacement:'top-bottom',
  });
});

// AOS.init();

document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Desktop Dropdown Toggling
function toggleDesktopDropdown(dropdownId, arrowId) {
  const allDropdowns = document.querySelectorAll(".desktop-dropdown");
  const allArrows = document.querySelectorAll(".desktop-arrow");

  allDropdowns.forEach((dropdown) => dropdown.classList.add("hidden"));
  allArrows.forEach((arrow) => arrow.classList.remove("rotate-180"));

  const dropdown = document.getElementById(dropdownId);
  const arrow = document.getElementById(arrowId);
  dropdown.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}

// Mobile Dropdown Toggling
function toggleMobileDropdown(dropdownId, arrowId) {
  const allDropdowns = document.querySelectorAll(".mobile-dropdown");
  const allArrows = document.querySelectorAll(".mobile-arrow");

  allDropdowns.forEach((dropdown) => dropdown.classList.add("hidden"));
  allArrows.forEach((arrow) => arrow.classList.remove("rotate-180"));

  const dropdown = document.getElementById(dropdownId);
  const arrow = document.getElementById(arrowId);
  dropdown.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}

// Desktop Dropdown Event Listeners
document
  .getElementById("desktop-services-toggle")
  .addEventListener("click", function () {
    toggleDesktopDropdown(
      "desktop-services-dropdown",
      "desktop-services-arrow"
    );
    const otherDropdowns = [
      "desktop-products-dropdown",
      "desktop-solutions-dropdown",
    ];
    const otherArrows = ["desktop-products-arrow", "desktop-solutions-arrow"];
    otherDropdowns.forEach((id) =>
      document.getElementById(id).classList.add("hidden")
    );
    otherArrows.forEach((id) =>
      document.getElementById(id).classList.remove("rotate-180")
    );
  });

document
  .getElementById("desktop-products-toggle")
  .addEventListener("click", function () {
    toggleDesktopDropdown(
      "desktop-products-dropdown",
      "desktop-products-arrow"
    );
    const otherDropdowns = [
      "desktop-services-dropdown",
      "desktop-solutions-dropdown",
    ];
    const otherArrows = ["desktop-services-arrow", "desktop-solutions-arrow"];
    otherDropdowns.forEach((id) =>
      document.getElementById(id).classList.add("hidden")
    );
    otherArrows.forEach((id) =>
      document.getElementById(id).classList.remove("rotate-180")
    );
  });

document
  .getElementById("desktop-solutions-toggle")
  .addEventListener("click", function () {
    toggleDesktopDropdown(
      "desktop-solutions-dropdown",
      "desktop-solutions-arrow"
    );

    const otherDropdowns = [
      "desktop-services-dropdown",
      "desktop-products-dropdown",
    ];
    const otherArrows = ["desktop-services-arrow", "desktop-products-arrow"];
    otherDropdowns.forEach((id) =>
      document.getElementById(id).classList.add("hidden")
    );
    otherArrows.forEach((id) =>
      document.getElementById(id).classList.remove("rotate-180")
    );
  });

// Mobile Dropdown Event Listeners
document
  .getElementById("services-toggle")
  .addEventListener("click", function () {
    toggleMobileDropdown("services-dropdown", "services-arrow");
    const otherDropdowns = ["products-dropdown", "solutions-dropdown"];
    const otherArrows = ["products-arrow", "solutions-arrow"];
    otherDropdowns.forEach((id) =>
      document.getElementById(id).classList.add("hidden")
    );
    otherArrows.forEach((id) =>
      document.getElementById(id).classList.remove("rotate-180")
    );
  });

document
  .getElementById("products-toggle")
  .addEventListener("click", function () {
    toggleMobileDropdown("products-dropdown", "products-arrow");
    const otherDropdowns = ["services-dropdown", "solutions-dropdown"];
    const otherArrows = ["services-arrow", "solutions-arrow"];
    otherDropdowns.forEach((id) =>
      document.getElementById(id).classList.add("hidden")
    );
    otherArrows.forEach((id) =>
      document.getElementById(id).classList.remove("rotate-180")
    );
  });

document
  .getElementById("solutions-toggle")
  .addEventListener("click", function () {
    toggleMobileDropdown("solutions-dropdown", "solutions-arrow");
    const otherDropdowns = ["services-dropdown", "products-dropdown"];
    const otherArrows = ["services-arrow", "products-arrow"];
    otherDropdowns.forEach((id) =>
      document.getElementById(id).classList.add("hidden")
    );
    otherArrows.forEach((id) =>
      document.getElementById(id).classList.remove("rotate-180")
    );
  });

const carousel = document.getElementById("carousel");
const dots = document.getElementById("dots").children;
let currentSlide = 0;
const totalSlides = 3; // For desktop (2 cards at once)
const totalSlidesMobile = 4; // For mobile (1 card at once)
let autoplayInterval;
let isMobile = window.innerWidth < 768;

function updateCarousel() {
  isMobile = window.innerWidth < 768;

  if (isMobile) {
    // On mobile, move 100% per slide (full width)
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  } else {
    // On desktop, move 50% per slide (half width)
    const offset = -currentSlide * 50;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  // Update dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = `w-3 h-3 rounded-full ${
      i === currentSlide ? "bg-blue-900" : "bg-blue-300"
    }`;
  }
}

function nextSlide() {
  const maxSlides = isMobile ? totalSlidesMobile - 1 : totalSlides - 1;
  currentSlide = currentSlide + 1 > maxSlides ? 0 : currentSlide + 1;
  updateCarousel();
}

function goToSlide(slideIndex) {
  if (isMobile) {
    // For mobile, adjust the slide index to show the corresponding single card
    currentSlide = slideIndex * 1; // Multiply by 1 to show one card at a time
  } else {
    currentSlide = slideIndex;
  }
  updateCarousel();
  resetAutoplay();
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 5000);
}

function resetAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

// Touch handling
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide();
    } else {
      const maxSlides = isMobile ? totalSlidesMobile - 1 : totalSlides - 1;
      currentSlide = currentSlide - 1 < 0 ? maxSlides : currentSlide - 1;
      updateCarousel();
    }
    resetAutoplay();
  }
}

// Handle window resize
window.addEventListener("resize", () => {
  // Reset to first slide when switching between mobile and desktop
  const wasMobile = isMobile;
  isMobile = window.innerWidth < 768;

  if (wasMobile !== isMobile) {
    currentSlide = 0;
  }
  updateCarousel();
});

// Initialize
updateCarousel();
startAutoplay();
function showTab(tabId) {
  // Hide all tab content
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.add("hidden");
  });

  // Show selected tab content
  document.getElementById(tabId).classList.remove("hidden");

  // Update tab button styles
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("bg-gray-200", "text-gray-700");
  });

  // Style active tab button
  event.target.classList.remove("bg-gray-200", "text-gray-700");
  event.target.classList.add("bg-blue-800", "text-white");
}
