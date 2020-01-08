const arrow_prew = document.querySelector('.slider__arrow_prev');
const arrow_next = document.querySelector('.slider__arrow_next');

const images = document.querySelectorAll('.slider__item');
let i = 0;

arrow_prew.onclick = function () {
  images[i].className = 'slider__item';
  i--;

  if (i < 0) {
    i = images.length - 1;
  }

  images[i].className = 'slider__item slider__item_active';
}

arrow_next.onclick = function () {
  images[i].className = 'slider__item';
  i++;

  if (i >= images.length) {
    i = 0;
  }

  images[i].className = 'slider__item slider__item_active';
}
















