// I.E. 81025 - NIVELES.JS FINAL
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnNosotros');
  const menu = document.getElementById('menuNosotros');

  if(btn && menu){
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      menu.classList.toggle('show');
    });
    document.addEventListener('click', ()=> menu.classList.remove('show'));
  }

  //Niveles
  document.querySelectorAll('.hor-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      document.querySelectorAll('.hor-card').forEach(c=>c.classList.remove('active'));
      card.classList.add('active');
      document.querySelectorAll('.detalle-nivel').forEach(d=>d.classList.remove('activo'));
      const target = document.getElementById('det-'+card.dataset.nivel);
      if(target) target.classList.add('activo');
      target?.scrollIntoView({behavior:'smooth', block:'center'});
    });
  });
});
