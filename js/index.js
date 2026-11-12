document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnNosotros');
  const menu = document.getElementById('menuNosotros');
  const toggle = document.getElementById('menuToggleMobile');
  const menuPrincipal = document.getElementById('menuPrincipalNav');

  // Menú Nosotros ▾
  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      menu.classList.toggle('show');
      btn.setAttribute('aria-expanded', menu.classList.contains('show'));
    });

    // Cerrar Nosotros si tocas fuera
    document.addEventListener('click', () => {
      menu.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  // Botón ☰ en celular - ESTO ERA LO QUE TE FALTABA
  if (toggle && menuPrincipal) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menuPrincipal.classList.toggle('active');
    });

    // Cerrar menú al tocar un enlace
    menuPrincipal.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menuPrincipal.classList.remove('active');
      });
    });
  }
});