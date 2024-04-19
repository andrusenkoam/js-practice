const contentEl = document.querySelector('.js-content');
const resultEl = document.querySelector('.js-result');
const playerXEl = document.querySelector('.player-x');
const playerOEl = document.querySelector('.player-o');
const friendlyShipEl = document.querySelector('.friendlyship');

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let historyX = [];
let historyO = [];
let player = 'X';
let playerX = 0;
let playerO = 0;
let friendlyShip = 0;

createMarkup();

playerXEl.textContent = playerX;
playerOEl.textContent = playerO;
friendlyShipEl.textContent = friendlyShip;

contentEl.addEventListener('click', onItemClick);

function onItemClick(evt) {
  const { target } = evt;
  if (!target.classList.contains('js-item') || target.textContent) {
    return;
  }

  const id = Number(target.dataset.id);
  let result = false;

  if (player === 'X') {
    historyX.push(id);
    result = isWinner(historyX);
  } else {
    historyO.push(id);
    result = isWinner(historyO);
  }

  target.textContent = player;

  if (result) {
    resultEl.textContent = `Winner ${player} 👏`;
    if (player === 'X') {
      playerXEl.textContent = playerX += 1;
    } else {
      playerOEl.textContent = playerO += 1;
    }
    resetGame();
    return;
  } else if (historyX.length + historyO.length === 9) {
    resultEl.textContent = 'Try again 🤝';
    friendlyShipEl.textContent = friendlyShip += 1;
    console.log(friendlyShip);
    resetGame();
    return;
  }

  player = player === 'X' ? 'O' : 'X';
}

function createMarkup() {
  let markup = '';

  for (let i = 0; i < 9; i += 1) {
    markup += `<div class="item js-item" data-id="${i + 1}"></div>`;
  }

  contentEl.innerHTML = markup;
}

function isWinner(arr) {
  return wins.some((item) => item.every((id) => arr.includes(id)));
}

function resetGame() {
  createMarkup();
  historyX = [];
  historyO = [];
  // player = 'X';
}
