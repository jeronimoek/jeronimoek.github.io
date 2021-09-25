const slider = document.querySelector(".slides");
const slides = document.querySelectorAll(".slides>div");
const slidesBtn = document.querySelectorAll(".slider>a.slider-a");
var slideWidth = document.querySelector(".slides>div").clientWidth;
var move = true;
var moveToNextTimer;

function moveToNextBtn() {
  let current = document.querySelector("a.current");
  let index = Array.from(current.parentNode.querySelectorAll("a")).indexOf(
    current
  );
  moveToSlide(index + 1);
}

function moveToLastBtn() {
  let current = document.querySelector("a.current");
  let index = Array.from(current.parentNode.querySelectorAll("a")).indexOf(
    current
  );
  moveToSlide(index - 1);
}

function resetSlidesBtn() {
  for (let i = 0; i < slidesBtn.length; i++) {
    slidesBtn[i].classList.remove("current");
  }
}

function resetMoveToNext(index) {
  move = true;
  clearTimeout(moveToNextTimer);
  moveToNext(index);
}

const moveToNext = (function () {
  let i = 0;
  return function (index) {
    if (move) {
      i++;
      index != undefined ? (i = index) : null;
      i == slides.length ? (i = 0) : null;
      slider.scrollLeft = slideWidth * i;
      resetSlidesBtn();
      slidesBtn[i].classList.add("current");
    }
    moveToNextTimer = setTimeout(moveToNext, 2500);
  };
})();

const moveToSlide = (function () {
  let moveTimer = null;
  return (i) => {
    i == slides.length ? (i = 0) : null;
    i == -1 ? (i = slides.length - 1) : null;
    resetSlidesBtn();
    slidesBtn[i].classList.add("current");
    slider.scrollLeft = slideWidth * i;
    if (moveTimer != null) {
      clearTimeout(moveTimer);
      moveTimer = null;
      move = false;
      moveTimer = setTimeout(() => {
        resetMoveToNext(i);
      }, 10000);
    } else {
      move = false;
      moveTimer = setTimeout(() => {
        resetMoveToNext(i);
      }, 10000);
    }
  };
})();

for (let i = 0; i < slidesBtn.length; i++) {
  slidesBtn[i].addEventListener("mouseover", function () {
    moveToSlide(i);
  });
}

window.addEventListener("load", () => {
  setTimeout(moveToNext, 2500);
});

window.addEventListener("resize", () => {
  slideWidth = document.querySelector(".slides>div").clientWidth;
});

var menuMasInfoTimer = null;
document.querySelector(".extra-links-switch").addEventListener("mouseover",() => {
  if(menuMasInfoTimer == null){
    menuMasInfoTimer = setTimeout(()=>{
      window.scrollBy({left: 0, top: document.body.scrollHeight, behavior: 'smooth'})
      setTimeout(()=>menuMasInfoTimer=null,500)
    }, 250)
  }
})