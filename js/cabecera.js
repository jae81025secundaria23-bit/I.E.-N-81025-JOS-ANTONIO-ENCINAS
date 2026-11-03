const headerHTML = `
<header class="header-azul">
  <nav aria-label="Navegación principal">
    <div class="logo">
      <img src="../img/Cole.jpeg" alt="Insignia I.E. 81025" width="70" height="70">
      <h1><small>I.E. N° 81025</small>JOSÉ ANTONIO ENCINAS</h1>
    </div>
    <div class="menu">
      <a href="index.html">Inicio</a>
      <a href="inspiracion.html">Nuestro Patrono</a>
      <a href="niveles.html">Niveles</a>
      <div class="dropdown">
        <button type="button" class="btn-menu-dropdown" id="btnNosotros">Nosotros ▾</button>
        <div id="menuNosotros" class="dropdown-menu">
          <a href="mision.html">Misión y Visión</a>
          <a href="resena.html">Reseña Histórica</a>
  
        </div>
      </div>
      <a href="ubicacion.html">Ubicación</a>
    </div>
  </nav>
</header>
`;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inyecta la cabecera
  const contenedor = document.getElementById('cabecera');
  if (contenedor) contenedor.innerHTML = headerHTML;

  // 2. Activa el dropdown
  const btn = document.getElementById('btnNosotros');
  const menu = document.getElementById('menuNosotros');
  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
    });
    document.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  }

  // 3. Marca la página activa
  const actual = window.location.pathname.split('/').pop();
  document.querySelectorAll('.menu a').forEach(a => {
    if (a.getAttribute('href') === actual) {
      a.setAttribute('aria-current', 'page');
    }
  });
});