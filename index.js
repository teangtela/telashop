const people = [
  {
    h2: "Women Collection 2018",
    h1: "NEW SEASON",
    imgSourse:
      "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp",
  },
  {
    h2: "Men New-Season",
    h1: "JACKET & COAT",
    imgSourse:
      "https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp",
  },
  {
    h2: "Men Collection 2018",
    h1: "NEWS ARRIVALS",
    imgSourse:
      "https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp",
  },
];
const h2 = document.querySelector(".h2");
const h1 = document.querySelector(".h1");
const btnNext = document.querySelector(".next");
const btnBack = document.querySelector(".back");
const mainContent = document.querySelector(".main-content");
let number = 0;

function updateSlide() {
  const person = people[number];
  h2.textContent = person.h2;
  h1.textContent = person.h1;
  mainContent.style.backgroundImage = "url(" + person.imgSourse + ")";
}
btnNext.addEventListener("click", nextslide);
btnBack.addEventListener("click", backslide);
function nextslide() {
  number = (number + 1) % people.length;
  updateSlide();
}

function backslide() {
  number = (number - 1 + people.length) % people.length;
  updateSlide();
}
setInterval(function () {
  nextslide();
}, 2500);

// top-header
const nav = document.getElementById("nav");
document.addEventListener("scroll", () => {
  const scrolltop = scrollY;
  if (scrolltop > 10) {
    nav.style.backgroundColor = "white";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});
const btnSubscribe = document.querySelector(".subscribe");
const input = document.querySelector(".input");
btnSubscribe.addEventListener("click",()=>{
    if(input.value){
        window.alert("Thank You for your subscribe !!!");
        window.location.href = "shop.html";
        input.value = "";
    }
})


