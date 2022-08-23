let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
  let body = document.querySelector("body");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", (e) => {
    if (!body.classList.contains("_wait")) {
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
    }
  });
}

function reply_click(id) {
  document.getElementById(`${id}`).lastElementChild.classList.toggle("_vis");
}

let arrow = document.querySelector(".arrow");
let thisLink = arrow.previousElementSibling;
let subMenu = arrow.nextElementSibling;
let thisArrow = arrow;
thisLink.classList.add("parent");
arrow.addEventListener("click", function () {
  subMenu.classList.toggle("open");
  thisArrow.classList.toggle("active");
});

let slideNavLeft = document.querySelector(".nav__left");
let slideNavRight = document.querySelector(".nav__right");
let slideInputs = document.querySelectorAll(".slide__input");

slideNavLeft.addEventListener("click", () => {
	let indSlide = activeSlideFn()
  if (indSlide > 0) {
    slideInputs[indSlide - 1].checked = true;
  } else {
    slideInputs[4].checked = true;
  }
});

slideNavRight.addEventListener("click", () => {
	let indSlide = activeSlideFn()
  if (indSlide < 4) {
    slideInputs[indSlide + 1].checked = true;
  } else {
    slideInputs[0].checked = true;
  }
});

let activeSlideFn = () => {
	let activeSlide = 0;
  slideInputs.forEach((i, ind) => i.checked === true ? (activeSlide = ind) : false );
	return activeSlide
}