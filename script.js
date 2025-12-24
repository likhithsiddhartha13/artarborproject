// Mobile Navigation Toggle
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

// Form Submission Handling
const handleForm = () => {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      form.reset();
    });
  }
};

// Smooth Scrolling
const smoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed header
            behavior: "smooth",
          });

          // Close mobile menu if open
          const nav = document.querySelector(".nav-links");
          const burger = document.querySelector(".burger");
          if (nav.classList.contains("nav-active")) {
            nav.classList.remove("nav-active");
            burger.classList.remove("toggle");
            document.querySelectorAll(".nav-links li").forEach((link) => {
              link.style.animation = "";
            });
          }
        }
      }
    });
  }
};

// Header Scroll Effect
const headerScroll = () => {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
};

// Scroll Reveal Implementation
const scrollReveal = () => {
  const revealElements = document.querySelectorAll(".reveal");

  const reveal = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add("active");
      }
    }
  };

  window.addEventListener("scroll", reveal);
  // Initial check
  reveal();
};

// Initialize functions
const init = () => {
  navSlide();
  handleForm();
  smoothScroll();
  headerScroll();
  scrollReveal();
};

document.addEventListener("DOMContentLoaded", init);
