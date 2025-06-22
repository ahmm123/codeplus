const nav = document.querySelector('nav');
const bars = document.getElementById('nav-opener');

bars.addEventListener('click', ()=>{
  nav.classList.toggle('open');
});
