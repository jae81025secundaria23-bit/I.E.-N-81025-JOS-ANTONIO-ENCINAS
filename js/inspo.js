document.addEventListener('DOMContentLoaded', () => {

  // --- TABS ---
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');
      const targetPanel = document.getElementById(targetId);

      // Quitar activo a todos
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      tabPanels.forEach(p => {
        p.hidden = true;
        p.classList.remove('active');
      });

      // Activar actual
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      if (targetPanel) {
        targetPanel.hidden = false;
        targetPanel.classList.add('active');
      }
    });
  });

  // --- TABS DE NIVELES (hor-card) - para tu niveles.html ---
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

  // --- BOTON OBRAS ---
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

  // --- MENU NOSOTROS ---
  const btnNosotros = document.querySelector('.btn-menu-dropdown');
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

});