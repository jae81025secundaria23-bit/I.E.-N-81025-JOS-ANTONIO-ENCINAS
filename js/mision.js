document.addEventListener('DOMContentLoaded', () => {
  // Menú Nosotros
  const btn = document.getElementById('btnNosotros');
  const menu = document.getElementById('menuNosotros');
  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
      btn.setAttribute('aria-expanded', menu.classList.contains('show'));
    });
    document.addEventListener('click', () => {
      menu.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  // Botón ☰ en celular
  const toggle = document.getElementById('menuToggleMobile');
  const menuPrincipal = document.getElementById('menuPrincipalNav');
  if (toggle && menuPrincipal) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menuPrincipal.classList.toggle('active');
    });
    menuPrincipal.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menuPrincipal.classList.remove('active'));
    });
  }
});