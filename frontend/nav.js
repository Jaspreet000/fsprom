const btnnn = document.getElementById('btnham');

function classAdd(){
 const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}
 btnnn.addEventListener('click', classAdd);