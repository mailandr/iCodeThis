const paletteEl = document.querySelectorAll(".palette");
const infoEl = document.querySelector(".information");
const infoColorEl = document.querySelector(".information-color");

for (let i = 0; i < paletteEl.length; i++) {
  paletteEl[i].addEventListener("click", function () {
    infoEl.classList.remove("hidden");
    infoColorEl.textContent = paletteEl[i].textContent;
  });
}
