document.addEventListener("click", (e) => {
  console.log(e);
  if (e.target === arrowPrec) {
    customer1.classList.toggle("unactive");
    customer2.classList.toggle("unactive");
  }
  if (e.target === arrowNext) {
    customer2.classList.toggle("unactive");
    customer1.classList.toggle("unactive");
  }
});
