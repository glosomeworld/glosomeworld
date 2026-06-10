document.getElementById('year').textContent = new Date().getFullYear();
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
btn?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
