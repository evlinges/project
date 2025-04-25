// modal.js
document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.feedback-link');
    const modal = document.getElementById('feedback-modal');
    const closeBtn = document.getElementById('modal-close');
    const form = document.getElementById('feedback-form');
  
    // Зберігаємо початковий HTML форми, щоб мати змогу його відновити
    const formHTML = form.innerHTML;
  
    // Відкриття модалки
    openBtn.addEventListener('click', e => {
      e.preventDefault();
      modal.classList.add('active');
    });
  
    // Закриття (хрестик)
    closeBtn.addEventListener('click', () => {
      closeModal();
    });
  
    // Закриття при кліку на overlay
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        closeModal();
      }
    });
  
    // Обробка сабміту
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      // валідація
      let valid = true;
      form.querySelectorAll('[required]').forEach(el => {
        if (!el.value.trim()) {
          valid = false;
          el.classList.add('error');
        } else {
          el.classList.remove('error');
        }
      });
      if (!valid) return;
  
      // імітуємо відправку і щось робимо через 1с
      form.innerHTML = '<p class="modal-thanks">Дякуємо за ваш відгук! Ми з вами зв\'яжемося найближчим часом.</p>';
    });
  
    function closeModal() {
      modal.classList.remove('active');
      // відновлюємо форму
      setTimeout(() => {
        form.innerHTML = formHTML;
      }, 300);
    }
  });
  