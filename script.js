const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  menu.setAttribute('aria-expanded', String(!open));
});

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      nav.style.display = 'none';
      menu.setAttribute('aria-expanded', 'false');
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    nav.style.display = '';
    menu.setAttribute('aria-expanded', 'false');
  }
});
