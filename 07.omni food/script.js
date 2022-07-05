const yearEl = document.querySelector(".year");
const current = new Date();
yearEl.textContent = current.getFullYear();

// MOBILE NAVIGATION WORK
const menu = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const navlink = document.querySelector(".main-nav-list");
menu.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

//smooth scrolling
const links = document.querySelectorAll("a:link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (header.classList.contains("nav-open")) {
      header.classList.toggle("nav-open");
    }
  });
});

//implement sticky
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entry) {
    const ent = entry[0];
    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
