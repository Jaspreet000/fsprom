const btn = document.getElementById('btnham');

function classAdd(){
 const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}
 btn.addEventListener('click', classAdd);