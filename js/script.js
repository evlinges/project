<script>
  const burger = document.getElementById('burger');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
</script>
const start = Date.now();
window.addEventListener('load', () => {
  const diff = (Date.now() - start) / 1000;
  console.log(`Час верстки: ${diff.toFixed(2)} секунд`);
});

