const slides = document.querySelectorAll(".slides");
const bullets = document.querySelectorAll(".slider-bullet");
const customers = document.querySelectorAll(".customer");
const Dates = new Date();
const Year = Dates.getFullYear();
const navLinks = ["Contrats", "Prestations", "Contact", "Devis"];
const url = window.location.href;
const typeOptions = document.querySelectorAll(".type");
let screenWidth = window.innerWidth;
let startX, endX, deltaX;

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
  const scrollTop = window.scrollY;
  const scale = 20 - (scrollTop * 4) / 100;
  if (scale <= 1) {
    heart.style.transform = "scale(1)";
  } else {
    heart.style.transform = "scale(" + scale + ")";
  }
  if (window.scrollY >= 240) {
    header.classList.add("scrolled");
    navMobile.style.top = "47px";
  } else if (mobileMenu.innerText !== "X") {
    header.classList.remove("scrolled");
    header.style.background = "transparent";
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
    const bulletIndex = [...bullets].indexOf(bullet);
    const customerActive = document.querySelector(".active");
    const newActive = customers[bulletIndex];

    clearInterval(intervalId);
    intervalId = setInterval(autoAnimation, 6000);

    circleAnimation(newActive);
    customerActive.classList.remove("active");
    newActive.classList.add("active");
  });
});

carrousel.addEventListener(
  "touchstart",
  (e) => {
    startX = e.touches[0].clientX;
  },
  { passive: true }
);

function manualNavigation(e) {
  if (e.type !== "click") {
    deltaX = endX - startX;
  }
  if (deltaX <= -60 || deltaX >= 60) {
    const customerActive = document.querySelector(".active");
    const indexActive = [...customers].indexOf(customerActive);

    clearInterval(intervalId);
    intervalId = setInterval(autoAnimation, 6000);
    let newIndex = deltaX <= 0 ? indexActive + 1 : indexActive - 1;
    if (newIndex >= [...customers].length) newIndex = 0;
    if (newIndex < 0) newIndex = [...customers].length - 1;
    const newActive = customers[newIndex];
    circleAnimation(newActive);
    customerActive.classList.remove("active");
    newActive.classList.add("active");
  }
}
carrousel.addEventListener("mousemove", (e) => {
  const boundingRect = carrousel.getBoundingClientRect();
  const cursorX = e.clientX - boundingRect.left;
  const cursorY = e.clientY - boundingRect.top;
  cursor.classList.add("is-visible");
  cursor.style.transform = "translate(" + cursorX + "px," + cursorY + "px)";
  if (cursorX > slides[0].width / 2) {
    carrouselArrow.classList.add("next");
  } else {
    carrouselArrow.classList.remove("next");
  }
});
carrousel.addEventListener("mouseleave", (e) => {
  cursor.classList.remove("is-visible");
});

slides.forEach((slide) => {
  slide.addEventListener("click", (e) => {
    e.preventDefault();
    boundingRect = slide.getBoundingClientRect();
    const clickX = e.clientX - boundingRect.left;
    console.log(slide.width);
    if (clickX < slide.width / 2) {
      deltaX = 60;
    } else {
      deltaX = -60;
    }
    manualNavigation(e);
  });
});

carrousel.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  manualNavigation(e);
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
