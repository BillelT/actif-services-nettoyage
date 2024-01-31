const arrows = document.querySelectorAll(".arrow");
const customers = document.querySelectorAll(".customer");
const Dates = new Date();
const Year = Dates.getFullYear();
const navLinks = ["Contrats", "Prestations", "Contact","Devis"];

//make the header fixed to the top after 3 scrolls from the user
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 240) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.background = "#fefffe";
    header.style.paddingBottom = "8px";
    header.style.paddingTop = "8px";
  } else {
    header.style.paddingBottom = "16px";
    header.style.paddingTop = "16px";
    header.style.background = "transparent";
    header.style.position = "relative";
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


// Burger Menu
document.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.innerText === "☰") {
    nav.classList.toggle("mobile-nav-clicked");
    mobileMenu.innerText = "X";
  } else if (e.target.innerText === "X") {
    nav.classList.toggle("mobile-nav-clicked");
    mobileMenu.innerText = "☰";
  }
  if (navLinks.includes(e.target.innerText)) {
    nav.classList.toggle("mobile-nav-clicked");
    mobileMenu.innerText = "☰";
  }
})


// credits year auto update
meta.innerText =
  "Actif Services Nettoyage © " + Year + " - Tous droits réservés";
