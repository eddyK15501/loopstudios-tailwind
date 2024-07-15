const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const toggleNav = () => {
  btn.classList.toggle('open');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
};

const checkScreenWidth = () => {
  if (window.innerWidth > 768) {
    btn.classList.remove('open');
    menu.classList.add('hidden');
    menu.classList.remove('flex');
  }
};

btn.addEventListener('click', toggleNav);
window.addEventListener('resize', checkScreenWidth);

checkScreenWidth();