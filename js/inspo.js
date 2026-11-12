document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPanel = document.getElementById(btn.getAttribute('aria-controls'));
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => {
        p.hidden = true;
        p.classList.remove('active');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      if (targetPanel) {
        targetPanel.hidden = false;
        targetPanel.classList.add('active');
      }
    });
  });

  const horCards = document.querySelectorAll('.hor-card');
  horCards.forEach(card => {
    card.addEventListener('click', () => {
      horCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      document.querySelectorAll('.detalle-nivel').forEach(d => d.classList.remove('activo'));
      const target = document.getElementById('det-' + card.dataset.nivel);
      if (target) target.classList.add('activo');
    });
  });

  const btnObras = document.getElementById('btnObras');
  const obras = document.getElementById('obras');
  if (btnObras && obras) {
    btnObras.addEventListener('click', () => {
      const isHidden = obras.hasAttribute('hidden');
      if (isHidden) {
        obras.removeAttribute('hidden');
        btnObras.setAttribute('aria-expanded', 'true');
        btnObras.textContent = 'Ocultar obras principales ▴';
      } else {
        obras.setAttribute('hidden', '');
        btnObras.setAttribute('aria-expanded', 'false');
        btnObras.textContent = 'Ver sus obras principales ▾';
      }
    });
  }

  const btnNosotros = document.getElementById('btnNosotros');
  const menuNosotros = document.getElementById('menuNosotros');
  if (btnNosotros && menuNosotros) {
    btnNosotros.addEventListener('click', (e) => {
      e.stopPropagation();
      menuNosotros.classList.toggle('show');
    });
    document.addEventListener('click', () => {
      menuNosotros.classList.remove('show');
    });
  }

  const menuToggle = document.getElementById('menuToggleMobile');
  const menuPrincipal = document.getElementById('menuPrincipalNav');
  if (menuToggle && menuPrincipal) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menuPrincipal.classList.toggle('active');
    });
    menuPrincipal.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menuPrincipal.classList.remove('active');
      });
    });
    document.addEventListener('click', (e) => {
      if (!menuPrincipal.contains(e.target) && e.target !== menuToggle) {
        menuPrincipal.classList.remove('active');
      }
    });
  }
});