const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const congratulation = document.getElementById('congratulation');

function moveButton() {
  const btnRect = noBtn.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  // Устанавливаем отступ от краев
  const padding = 50;
  
  // Вычисляем максимальные координаты с учетом отступов
  const maxX = viewportWidth - btnRect.width - padding;
  const maxY = viewportHeight - btnRect.height - padding;
  
  // Генерируем случайные координаты в пределах видимой области
  let randomX = Math.random() * (maxX - padding) + padding;
  let randomY = Math.random() * (maxY - padding) + padding;
  
  noBtn.style.position = 'fixed';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Обработчик для десктопа (при наведении)
noBtn.addEventListener('mouseenter', moveButton);

// Обработчик для мобильных устройств (при касании)
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Предотвращаем стандартное поведение касания
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