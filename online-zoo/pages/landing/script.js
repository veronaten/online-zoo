const state = {};
const carouselList = document.querySelector('.how_animals');
const carouselItems = document.querySelectorAll('.how_item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  let newActive = event.target;
  let isItem = newActive.closest('.how_item');
  
  if (!isItem || (newActive && newActive.classList.contains('how_item_active'))) {
    return;
  };
  
  update(newActive);

});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('how_item_active');
  
  [current, prev, next, first, last].forEach(item => {
    let itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

function getPos(current, active) {
  const diff = current - active;
  if (active == -2) {
      if (Math.abs(current - active) > 2 && Math.abs(current - active) < 4) {
          return -current - 1
      } else if (Math.abs(current - active) > 3) {
          return -current + 1
      }
  }
  else if (Math.abs(active) >= 2) {
      if (Math.abs(current - active) > 2 && Math.abs(current - active) < 4) {
          return -current + 1
      } else if (Math.abs(current - active) > 3) {
          return -current - 1
      }
  }
  else {
      if (Math.abs(current - active) > 2) {
          return -current
      }
  }

  return diff;
}


const gap = 20;
const carousel = document.querySelector(".pets_slider_animals__container");
const content = document.querySelector(".pets_slider_animals__wrapper");
const card = document.querySelector(".pets_slider_animals_blocks")
const next = document.querySelector(".btn_slider_right");
const prev = document.querySelector(".btn_slider_left");

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

next.addEventListener("click", e => {
  carousel.scrollBy(width, 0);
  if (content.scrollWidth - width  < carousel.scrollLeft + width) {
    carousel.scrollBy(-(width) * 3, 0);
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width), 0);
  // if (carousel.scrollLeft - width - gap <= 0) {
  //   prev.style.display = "none";
  // }
  // if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
  //   next.style.display = "flex";
  // }
  // if (condition) {

  // }

  if (carousel.scrollLeft + width < content.scrollWidth - width) {
    carousel.scrollBy((width) * 3, 0);
  }

});


const coverElem = document.getElementById('cover');
const feedBackButton = document.getElementById('btn_footer');
const wrapper = document.querySelector('.wrapper');
const formElem = document.getElementById('form-feedback');
const buttonNext = document.getElementById('next');

feedBackButton.addEventListener('click', () => {
  wrapper.classList.add('hidden');
  coverElem.classList.remove('hidden');
  formElem.classList.remove('hidden');
});

coverElem.addEventListener('click', () => {
  wrapper.classList.remove('hidden');
  coverElem.classList.add('hidden');
  formElem.classList.add('hidden');
}); 

buttonNext.addEventListener('click', () => {
  wrapper.classList.remove('hidden');
  coverElem.classList.add('hidden');
  formElem.classList.add('hidden');
}); 


