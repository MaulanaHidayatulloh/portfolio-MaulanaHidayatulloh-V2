// Menu icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky Navbar
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove menu icon navbar when click navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Dark Mode
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

// Scroll Reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".home-content, .heading", {
  origin: "top",
});
ScrollReveal().reveal(
  ".home-img img, .education-container, projects-box, .contact form, .project-box",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});

// backend
// Ganti URL sesuai dengan alamat file PHP di XAMPP
const educationApiUrl = "http://localhost/backend/get_education.php";

// Ambil data pendidikan
fetch(educationApiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Update frontend untuk menampilkan data pendidikan
    console.log(data);
  })
  .catch((error) => console.error("Error fetching education data:", error));
