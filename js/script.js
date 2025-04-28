const burger = document.getElementById('burger');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
const start = Date.now();
window.addEventListener('load', () => {
  const diff = (Date.now() - start) / 1000;
  console.log(`Час верстки: ${diff.toFixed(2)} секунд`);
});

document.addEventListener('DOMContentLoaded', function() {
  const submenuLinks = document.querySelectorAll('.has-submenu');

  submenuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const parentLi = this.closest('li');
      const submenu = parentLi.querySelector('.subcategory-list');

      if (!submenu) return;

      // Закриваємо ВСІ інші підкатегорії перед відкриттям нової
      document.querySelectorAll('.subcategory-list.show').forEach(openSubmenu => {
        if (openSubmenu !== submenu) {
          openSubmenu.classList.remove('show');
        }
      });

      document.querySelectorAll('.has-submenu.open').forEach(openLink => {
        if (openLink !== this) {
          openLink.classList.remove('open');
        }
      });

      // Перемикаємо поточну підкатегорію
      submenu.classList.toggle('show');
      this.classList.toggle('open');
    });
  });
});






