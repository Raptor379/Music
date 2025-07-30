document.addEventListener('DOMContentLoaded', () => {
  const tumbler = document.getElementById('tumbler');
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const Display = document.querySelectorAll('.display-transition');
  const DisplayNone = document.querySelectorAll('.display_none-transition');
  const shadows = document.querySelectorAll('.shadow-transition')
  const man = document.getElementById('bg-man');
  let positionX = 0;
  let tumblerState = true;

  tumbler.addEventListener('click', () => {
    if (tumblerState) {
        positionX = -42;
        tumbler.style.transform = `translateX(${positionX}px)`;
        tumblerState = false;
        moon.style.opacity = 0;
        sun.style.opacity = 1;
        document.documentElement.style.setProperty('--main-color', '#FAFAFA');
        document.documentElement.style.setProperty('--elements-color', '#FAFAFA');
        document.documentElement.style.setProperty('--text-color', '#000000');
        Display.forEach(el => {
            el.style.display = 'none';
        })
        DisplayNone.forEach(el => {
            el.style.display = 'block';
        })
        shadows.forEach(el => {
            el.style.boxShadow = '0 4px 12px #0000003d';
        })
        cards.forEach(el =>{
            el.style.background = '#282828';
        })
    }
    else {
        positionX = 0;
        tumbler.style.transform =`translateX(${positionX}px)`;
        tumblerState = true;
        sun.style.opacity = 0;
        moon.style.opacity = 1;
        document.documentElement.style.setProperty('--main-color', '#070606');
        document.documentElement.style.setProperty('--elements-color', '#000000');
        document.documentElement.style.setProperty('--text-color', '#FFFFFF');
        DisplayNone.forEach(el => {
            el.style.display = 'none';
        })
        Display.forEach(el => {
            el.style.display = 'block';
        })
        shadows.forEach(el => {
            el.style.boxShadow = 'none';
        })
    }
  });


const carousel = document.getElementById('carousel');
let cards = Array.from(carousel.querySelectorAll('.card'));
let cardWidth = 0;
if (cards.length > 0) {
  cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
}

carousel.addEventListener('scroll', () => {
  const scrollLeft = carousel.scrollLeft;
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  // Если прокрутка достигла конца
  if (scrollLeft >= maxScrollLeft - cardWidth) {
    // Клонируем первую карточку и вставляем в конец
    const firstCard = cards[0];
    const clone = firstCard.cloneNode(true);
    carousel.appendChild(clone);
    // Обновляем массив карточек
    cards = Array.from(carousel.querySelectorAll('.card'));
  }

  // Если прокрутка достигла начала
  if (scrollLeft <= 0) {
    // Клонируем последнюю карточку и вставляем в начало
    const lastCard = cards[cards.length - 1];
    const clone = lastCard.cloneNode(true);
    carousel.insertBefore(clone, cards[0]);
    // Обновляем массив карточек
    cards = Array.from(carousel.querySelectorAll('.card'));
    // Немного смещаем прокрутку вперед, чтобы не "зависнуть" при вставке
    carousel.scrollLeft = cardWidth;
  }
});

const second = document.getElementById('second');
const minute = document.getElementById('minute');
const hour = document.getElementById('hour');

  setInterval(() =>{

  let secNum = Number(second.textContent);
  let minNum = Number(minute.textContent);
  let HrNum = Number(hour.textContent);

    if (secNum !== 0) {
      second.textContent = (secNum - 1).toString().padStart(2, '0');
    }
    else {
      if (minNum !== 0) {
        second.textContent = 59;
        minute.textContent = (minNum - 1).toString().padStart(2, '0');; 
      }
      else {
        if (HrNum !== 0) {
          minute.textContent = 59;
          hour.textContent = (HrNum - 1).toString().padStart(2, '0');;
        }
      }
    }
}, 1000);
});