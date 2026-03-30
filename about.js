/* MOBILE MENU */
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

/* NAV SCROLL EFFECT */
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

/* SCROLL ANIMATION */
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

/* COUNTER ANIMATION */
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  let update = () => {
    let target = +counter.getAttribute("data-target");
    let count = +counter.innerText;

    let inc = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 20);
    } else {
      counter.innerText = target + "+";
    }
  };
  update();
});
