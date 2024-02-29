const arrows = document.querySelectorAll(".arrow");
const slides = document.querySelectorAll(".slides");
const bullets = document.querySelectorAll(".bullet");
const customers = document.querySelectorAll(".customer");
const Dates = new Date();
const Year = Dates.getFullYear();
const navLinks = ["Contrats", "Prestations", "Contact", "Devis"];
let screenWidth = window.innerWidth;

if (screenWidth < 700) {
  heroImg.src = "./médias/Background-hero-mobile.webp";
} else {
  heroImg.src = "./médias/Background-hero.webp";
}

//make the header fixed to the top after 3 scrolls from the user
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 240) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.background = "#fefffe";
    header.style.paddingBottom = "8px";
    header.style.paddingTop = "8px";
    navMobile.style.top = "47px";
    movedSection.style.paddingTop = "203px";
  } else if (mobileMenu.innerText !== "X") {
    header.style.position = "relative";
    header.style.paddingBottom = "16px";
    header.style.paddingTop = "16px";
    navMobile.style.top = "55px";
    header.style.background = "transparent";
    movedSection.style.paddingTop = "128px";
  }
});

// carrousel navigation
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const nextCustomer = e.target.id === "next" ? 1 : -1;
    const customerActive = document.querySelector(".active");

    newActive = nextCustomer + [...customers].indexOf(customerActive);
    if (newActive < 0) newActive = [...customers].length - 1;
    if (newActive >= [...customers].length) newActive = 0;
    customers[newActive].classList.add("active");
    customerActive.classList.remove("active");
  });
});

// carrousel navigation under 590px width device
slides.forEach((slide) => {
  slide.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true }
  );
  slide.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].clientX;
      const swipeDistance = touchStartX - touchEndX;

      const nextCustomer = swipeDistance > 0 ? 1 : -1;
      const customerActive = document.querySelector(".active");

      newActive = nextCustomer + [...customers].indexOf(customerActive);
      if (newActive < 0) newActive = [...customers].length - 1;
      if (newActive >= [...customers].length) newActive = 0;
      customers[newActive].classList.add("active");
      customerActive.classList.remove("active");
      console.log(newActive);

      bullets.forEach((bullet) => {
        bullet.style.transition = "0.4s ease-in-out";
        if (newActive === 0) {
          bullet.classList.remove("bulletActive");
          bullets[0].classList.add("bulletActive");
        }
        if (newActive === 1) {
          bullet.classList.remove("bulletActive");
          bullets[1].classList.add("bulletActive");
        }
        if (newActive === 2) {
          bullet.classList.remove("bulletActive");
          bullets[2].classList.add("bulletActive");
        }
      });
    },
    { passive: true }
  );
});

// Burger Menu
document.addEventListener("click", (e) => {
  if (e.target.innerText === "☰") {
    navMobile.classList.toggle("mobile-nav-clicked");
    mobileMenu.innerText = "X";
    header.style.background = "#fefffe";
  } else if (e.target.innerText === "X") {
    navMobile.classList.toggle("mobile-nav-clicked");
    mobileMenu.innerText = "☰";
    header.style.background = "transparent";
  }
  if (navLinks.includes(e.target.innerText)) {
    navMobile.classList.toggle("mobile-nav-clicked");
    mobileMenu.innerText = "☰";
    header.style.background = "transparent";
  }
});

// credits year auto update
meta.innerText =
  "© " + Year + " Actif Services Nettoyage " + " Tous droits réservés";
