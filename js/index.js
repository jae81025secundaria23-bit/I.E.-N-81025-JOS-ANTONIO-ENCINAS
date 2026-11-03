document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnNosotros');
  const menu = document.getElementById('menuNosotros');

  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    menu.classList.toggle('show');
    const abierto = menu.classList.contains('show');
    btn.setAttribute('aria-expanded', abierto);
  });

  // cerrar si haces click fuera
  document.addEventListener('click', () => {
    menu.classList.remove('show');
    btn.setAttribute('aria-expanded', 'false');
  });
});