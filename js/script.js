// Carrusel simple
(function(){
  let idx = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const next = () => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  };
  setInterval(next, 5000);
})();

// Menú móvil
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(!toggle || !links) return;

  const updateAria = () => toggle.setAttribute('aria-expanded', links.classList.contains('open'));

  toggle.addEventListener('click', ()=>{
    links.classList.toggle('open');
    updateAria();
  });

  // Cerrar al hacer click en un enlace
  links.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      links.classList.remove('open');
      updateAria();
    });
  });
})();

// Ajustes dinámicos suaves (logo y hero según viewport)
(function(){
  const logo = document.querySelector('.logo');
  const hero = document.querySelector('.hero-carousel');

  function ajustar(){
    const w = window.innerWidth;

    // Logo: tamaños controlados por JS + CSS
    if(logo){
      if(w < 520) logo.style.width = '100px';
      else if(w < 768) logo.style.width = '120px';
      else logo.style.width = '130px';
    }

    // Hero altura ya es responsive en CSS; aquí afinamos si hay pantallas muy bajas
    if(hero){
      const vh = Math.max(window.innerHeight, 320);
      if(vh < 620 && w > 900){
        hero.style.height = '70vh';
      } else {
        hero.style.height = ''; // usa CSS por defecto
      }
    }
  }

  window.addEventListener('resize', ajustar);
  window.addEventListener('orientationchange', ajustar);
  window.addEventListener('load', ajustar);
})();