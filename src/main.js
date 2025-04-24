import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#home, #products, #about, #contact");
    const navLinks = document.querySelectorAll(".nav-link");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.classList.remove("border-b-4", "border-green-500", "text-green-500");
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("border-b-4", "border-green-500", "text-green-500");
              }
            });
          }
        });
      },
      {
        threshold: 0.6, // 60% of section must be in view
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".mobile-menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");
    const navLinks = document.querySelectorAll(".mobile-menu a");
  
    // Toggle mobile menu on button click
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  
    // Close the menu when any nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  });
  
  