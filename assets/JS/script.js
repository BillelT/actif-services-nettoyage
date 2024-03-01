const slides = document.querySelectorAll(".slides");
const bullets = document.querySelectorAll(".slider-bullet");
const customers = document.querySelectorAll(".customer");
const Dates = new Date();
const Year = Dates.getFullYear();
const navLinks = ["Contrats", "Prestations", "Contact", "Devis"];
const url = window.location.href;
const typeOptions = document.querySelectorAll(".type");
const movedSection = document.querySelector(".movedSection");
let screenWidth = window.innerWidth;

if (!url.includes("form")) {
} else {
  typeOptions.forEach((option) => {
    if (url.includes("contract") && option.value === "contract") {
      option.selected = true;
    } else if (url.includes("unique") && option.value === "unique") {
      option.selected = true;
    }
  });
}

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

// animate circle depending on current slide
function circleAnimation(newActive) {
  if ([...customers].indexOf(newActive) === 0) {
    circleLoad.style.transform = "translateX(0px)";
    circleLoad.classList.remove("animated");
    void circleLoad.offsetWidth;
    circleLoad.classList.add("animated");
  }
  if ([...customers].indexOf(newActive) === 1) {
    circleLoad.style.transform = "translateX(32px)";
    circleLoad.classList.remove("animated");
    void circleLoad.offsetWidth;
    circleLoad.classList.add("animated");
  }
  if ([...customers].indexOf(newActive) === 2) {
    circleLoad.style.transform = "translateX(64px)";
    circleLoad.classList.remove("animated");
    void circleLoad.offsetWidth;
    circleLoad.classList.add("animated");
  }
}

// carrousel auto animation
function autoAnimation() {
  let customerActive = document.querySelector(".active");
  let newIndex = [...customers].indexOf(customerActive) + 1;
  if (newIndex >= [...customers].length) newIndex = 0;
  if (newIndex < 0) newIndex = [...customers].length - 1;
  const newActive = customers[newIndex];
  circleAnimation(newActive);
  customerActive.classList.remove("active");
  newActive.classList.add("active");
}

let intervalId = setInterval(autoAnimation, 6000);

// carrousel navigation
bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    let bulletIndex = [...bullets].indexOf(bullet);
    let customerActive = document.querySelector(".active");
    const newActive = customers[bulletIndex];

    clearInterval(intervalId);
    intervalId = setInterval(autoAnimation, 6000);

    circleAnimation(newActive);
    customerActive.classList.remove("active");
    newActive.classList.add("active");
  });
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
