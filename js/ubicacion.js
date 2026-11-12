document.addEventListener('DOMContentLoaded', () => {
  // Menú Nosotros
  const btnNosotros = document.getElementById('btnNosotros');
  const menuNosotros = document.getElementById('menuNosotros');
  if (btnNosotros && menuNosotros) {
    btnNosotros.addEventListener('click', (e) => {
      e.stopPropagation();
      menuNosotros.classList.toggle('show');
      btnNosotros.setAttribute('aria-expanded', menuNosotros.classList.contains('show'));
    });
    document.addEventListener('click', () => {
      menuNosotros.classList.remove('show');
      btnNosotros.setAttribute('aria-expanded', 'false');
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

  // Botón copiar dirección
  const btnCopiar = document.getElementById('btnCopiar');
  const direccion = document.getElementById('direccion-text');
  const msg = document.getElementById('copiado-msg');
  if (btnCopiar && direccion) {
    btnCopiar.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(direccion.textContent.trim());
        if (msg) msg.textContent = '¡Copiado!';
      } catch {
        if (msg) msg.textContent = 'No se pudo copiar';
      }
      setTimeout(() => { if (msg) msg.textContent = ''; }, 2000);
    });
  }
});
