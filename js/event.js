import cars from './cars.js';

const searchFormEl = document.querySelector('.js-search-form');
const carsListEl = document.querySelector('.js-cars-list');

searchFormEl.addEventListener('submit', onSearch);

function createCarsMarkup(arr) {
  return arr
    .map(
      ({
        id,
        model,
        type,
        price,
      } = {}) => `<li class="car-item" data-id="${id}">
        <h2 class="car-model">Марка - ${model}</h2>
        <h3 class="car-type">Модель - ${type}</h3>
        <p class="car-price">Ціна - ${price}</p>
      </li>`
    )
    .join('');
}

carsListEl.insertAdjacentHTML('beforeend', createCarsMarkup(cars));

function onSearch(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const { search, select } = form.elements;

  const searchCars = cars.filter(
    (car) =>
      car[select.value].toLowerCase() === search.value.trim().toLowerCase()
  );

  carsListEl.innerHTML = createCarsMarkup(searchCars);
}
