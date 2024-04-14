import cars from './cars.js';

const containerEl = document.querySelector('.js-container');

// Bad example (don't use)
// cars.forEach(({ model, type, price}) => {
//   const carMarkup = `<li class="container-item">
//         <h2 class="car-model">Марка - ${model}</h2>
//         <h3 class="car-type">Модель - ${type}</h3>
//         <p class="car-price">Ціна - ${price}</p>
//       </li>`;

//   containerEl.insertAdjacentHTML('beforeend', carMarkup);
// });

// Good example
// const carsMarcup = cars
//   .map(
//     ({
//       id,
//       model,
//       type,
//       price,
//     } = {}) => `<li class="container-item" data-id="${id}">
//         <h2 class="car-model">Марка - ${model}</h2>
//         <h3 class="car-type">Модель - ${type}</h3>
//         <p class="car-price">Ціна - ${price}</p>
//       </li>`
//   )
//   .join('');

// containerEl.insertAdjacentHTML('beforeend', carsMarcup);

// Example with function
function createCarMarkup({ id, model, type, price } = {}) {
  return `<li class="container-item" data-id="${id}">
        <h2 class="car-model">Марка - ${model}</h2>
        <h3 class="car-type">Модель - ${type}</h3>
        <p class="car-price">Ціна - ${price}</p>
      </li>`;
}

const createCarsMarkup = cars.map(createCarMarkup).join('');

containerEl.insertAdjacentHTML('beforeend', createCarsMarkup);
