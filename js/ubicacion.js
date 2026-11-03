document.addEventListener('DOMContentLoaded', () => {

  const btnCopiar = document.getElementById('btnCopiar');
  const direccionText = document.getElementById('direccion-text');
  const msg = document.getElementById('copiado-msg');

  if (btnCopiar && direccionText) {
    btnCopiar.addEventListener('click', async () => {

      const texto = direccionText.textContent.trim();

      try {
        await navigator.clipboard.writeText(texto);

        // Feedback visual y accesible
        btnCopiar.textContent = '¡Copiado!';
        msg.textContent = '✓ Dirección copiada al portapapeles';

        setTimeout(() => {
          btnCopiar.textContent = 'Copiar dirección';
          msg.textContent = '';
        }, 2500);

      } catch (err) {
        // Fallback para celulares sin permisos
        const aux = document.createElement('textarea');
        aux.value = texto;
        document.body.appendChild(aux);
        aux.select();
        document.execCommand('copy');
        document.body.removeChild(aux);

        msg.textContent = '✓ Copiado';
        setTimeout(() => msg.textContent = '', 2500);
      }

    });
  }

});
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btnNosotros');
  const menu = document.getElementById('menuNosotros');
  
  console.log("¿existe btn?", btn);
  
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  document.addEventListener('click', function() {
    menu.classList.remove('show');
  });
});
