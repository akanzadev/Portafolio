"use strict";

window.addEventListener("load", () => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  const hamburgerMenu = $(".hamburger");
  const navLinks = $(".nav-links");
  const links = $$(".nav-links li");

  hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  const language = window.navigator.language || navigator.browserLanguage;
  const lang = language.slice(0, 2);

  if (lang === "es") {
    $$(".en").forEach((el) => (el.style.display = "none"));
  } else {
    $$(".es").forEach((el) => (el.style.display = "none"));
    $$(".en").forEach((el) => (el.style.display = "block"));
  }

  const ancles = $$(".nav-links a");
  const modal = $(".modal");
  const modalContent = $(".modal-content");

  ancles.forEach((ancle) => {
    ancle.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
