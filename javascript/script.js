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
