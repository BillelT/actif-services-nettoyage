const Dates = new Date();
const Year = Dates.getFullYear();

document.addEventListener("click", (e) => {
  console.log(e);
  if (e.target === prev) {
    customer1.classList.toggle("active");
    customer2.classList.toggle("active");
  }
  if (e.target === next) {
    customer2.classList.toggle("active");
    customer1.classList.toggle("active");
  }
});

meta.innerText =
  "Actif Services Nettoyage © " + Year + " - Tous droits réservés";
