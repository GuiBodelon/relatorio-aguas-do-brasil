function closeMenu() {
  document.getElementById("menu__toggle").checked = false;
}

const links = document.querySelectorAll(".scroll-link");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    const distanceToTop = target.getBoundingClientRect().top;

    window.scrollBy({ top: distanceToTop, left: 0, behavior: "smooth" });
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};