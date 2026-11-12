// Niveles - JS final
document.addEventListener('DOMContentLoaded', () => {

  // Menú hamburguesa en celular
  const btnMenu = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  if (btnMenu && menu) {
    btnMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('active');
    });
    document.addEventListener('click', () => menu.classList.remove('active'));
  }

  // Submenú Nosotros
  const btn = document.querySelector('.btn-menu-dropdown');
  const subMenu = document.querySelector('.dropdown-menu');
  if (btn && subMenu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      subMenu.classList.toggle('show');
    });
    document.addEventListener('click', () => subMenu.classList.remove('show'));
  }

  // Cambiar de nivel
  document.querySelectorAll('.hor-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.hor-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      document.querySelectorAll('.detalle-nivel').forEach(d => d.classList.remove('activo'));
      const target = document.getElementById('det-' + card.dataset.nivel);
      if (target) {
        target.classList.add('activo');
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

});