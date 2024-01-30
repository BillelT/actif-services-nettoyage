const arrows = document.querySelectorAll(".arrow");
const customers = document.querySelectorAll(".customer");
const Dates = new Date();
const Year = Dates.getFullYear();

//make the header fixed to the top after 3 scrolls from the user
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 240) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.background = "#fefffe";
    header.style.padding = "8px 5.55% 8px 10.8%";
  } else {
    header.style.padding = "16px 5.55% 8px 10.8%";
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

// credits year auto update
meta.innerText =
  "Actif Services Nettoyage © " + Year + " - Tous droits réservés";
