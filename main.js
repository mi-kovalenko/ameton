import './style.scss'



document.addEventListener("DOMContentLoaded", function() {
  const galleryContainer = document.querySelector('.faq__gallery-container');
  const gallery = document.querySelector('.faq__gallery');
  const cards = document.querySelectorAll('.faq__card');
  const scrollRightBtn = document.getElementById('scrollRightBtn');
  const scrollLeftBtn = document.getElementById('scrollLeftBtn');
  
  const cardWidth = 282; 
  const gap = 16; 
  let currentOffset = 0; // текущее смещение галереи
  const maxOffset = (cardWidth + gap) * cards.length - galleryContainer.offsetWidth; // максимальное смещение
  
  // Изначально кнопка "Назад" не видна
  scrollLeftBtn.style.display = 'none';

  // Обработчик для кнопки "Вперед"
  scrollRightBtn.addEventListener('click', function() {
      if (currentOffset < maxOffset) {
          currentOffset += cardWidth + gap;
          gallery.style.transform = `translateX(-${currentOffset}px)`;
          scrollLeftBtn.style.display = 'block'; // Показываем кнопку "Назад"
      }

      // Скрываем кнопку "Вперед", если достигнут конец
      if (currentOffset >= maxOffset) {
          scrollRightBtn.style.display = 'none';
      }
  });

  // Обработчик для кнопки "Назад"
  scrollLeftBtn.addEventListener('click', function() {
      if (currentOffset > 0) {
          currentOffset -= cardWidth + gap;
          gallery.style.transform = `translateX(-${currentOffset}px)`;
          scrollRightBtn.style.display = 'block'; // Показываем кнопку "Вперед"
      }

      // Скрываем кнопку "Назад", если достигнуто начало
      if (currentOffset <= 0) {
          scrollLeftBtn.style.display = 'none';
      }
  });
});
