const arrows = document.querySelectorAll(".arrow")
const customers = document.querySelectorAll(".customer")
const Dates = new Date();
const Year = Dates.getFullYear();

arrows.forEach((arrow) => {
  arrow.addEventListener('click', (e) => {
    const nextCustomer = e.target.id === "next" ? 1 : -1;
    const customerActive = document.querySelector(".active");

    newActive = nextCustomer  + [...customers].indexOf(customerActive);
    if (newActive < 0 ) newActive = [...customers].length - 1;
    if (newActive >= [...customers].length ) newActive = 0;
    customers[newActive].classList.add("active");
    customerActive.classList.remove("active")
  })
} )

meta.innerText = "Actif Services Nettoyage © " + Year + " - Tous droits réservés";

