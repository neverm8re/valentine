const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const congratulation = document.getElementById('congratulation');

let toggle = 0; // Счетчик вызовов

function swapButtons() {
  const noBtnRect = noBtn.getBoundingClientRect();
  const yesBtnRect = yesBtn.getBoundingClientRect();

  // Меняем координаты кнопок
  noBtn.style.position = 'absolute';
  yesBtn.style.position = 'absolute';

  noBtn.style.transition = 'top 0.3s, left 0.3s';
  yesBtn.style.transition = 'top 0.3s, left 0.3s';

  noBtn.style.left = `${yesBtnRect.left}px`;
  noBtn.style.top = `${yesBtnRect.top}px`;

  yesBtn.style.left = `${noBtnRect.left}px`;
  yesBtn.style.top = `${noBtnRect.top}px`;
}

function moveButton() {
  if (toggle % 3 === 0) {
    // Каждый второй раз меняем кнопки местами
    swapButtons();
  } else {
    const btnRect = noBtn.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const padding = 50;
    const maxX = viewportWidth - btnRect.width - padding;
    const maxY = viewportHeight - btnRect.height - padding;
    
    let randomX = Math.random() * (maxX - padding) + padding;
    let randomY = Math.random() * (maxY - padding) + padding;
    
    noBtn.style.position = 'fixed';
    noBtn.style.transition = 'top 0.3s, left 0.3s';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  }
  
  toggle++; // Увеличиваем счетчик
}

// Обработчик для десктопа (при наведении)
noBtn.addEventListener('mouseenter', moveButton);

// Обработчик для мобильных устройств (при касании)
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveButton();
});

yesBtn.addEventListener('click', () => {
  congratulation.style.display = 'flex';
});

// Закрытие поздравления по клику вне текста
congratulation.addEventListener('click', (e) => {
  if (e.target === congratulation) {
    congratulation.style.display = 'none';
  }
});
