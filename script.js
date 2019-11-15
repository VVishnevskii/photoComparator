const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const leftPhoto = document.querySelector('.left');
const rightPhoto = document.querySelector('.right');
const photoContainer = document.querySelector('.container');
let flag = false;

slider.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  flag = true;
  slider.style.backgroundColor = "green";
}, false);

document.addEventListener('mouseup', function () {
  flag = false;
  slider.style.backgroundColor = "red";
}, false);

sliderContainer.addEventListener('mousemove', function (evt) {
  let res = evt.pageX - this.offsetLeft;
  
  console.log('Я работаю!');

  if (flag && (res > 0) && (res < rightPhoto.offsetWidth)) {
    slider.style.left = res + 'px';
    leftPhoto.style.width = res + 'px';
  }

}, false);