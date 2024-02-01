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
    navMobile.style.top ="58.8px"
    trust.style.paddingTop = "384px"
  } else if(mobileMenu.innerText !== "X") {
    header.style.paddingBottom = "16px";
    header.style.paddingTop = "16px";
    header.style.position = "relative";
    navMobile.style.top ="68.8px"
    header.style.background = "transparent";
    trust.style.paddingTop = "128px"
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
    navMobile.classList.toggle("mobile-nav-clicked");
    mobileMenu.innerText = "X";
    header.style.background = "#fefffe"
  } else if (e.target.innerText === "X") {
    navMobile.classList.toggle("mobile-nav-clicked");
    mobileMenu.innerText = "☰";
    header.style.background = "transparent"
  }
  if (navLinks.includes(e.target.innerText)) {
    navMobile.classList.toggle("mobile-nav-clicked");
    mobileMenu.innerText = "☰";
    header.style.background = "transparent"
  }
})


// credits year auto update
meta.innerText =
  "Actif Services Nettoyage © " + Year + " - Tous droits réservés";
