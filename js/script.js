// Carrusel
const slides = document.querySelectorAll(".carousel .slides img");
const prevBtn = document.querySelector(".carousel .prev");
const nextBtn = document.querySelector(".carousel .next");

let index = 0;

function showSlide(i) {
  slides.forEach((img, idx) => {
    img.classList.toggle("active", idx === i);
  });
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});