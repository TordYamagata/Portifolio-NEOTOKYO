const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const themeToggle = document.getElementById('themeToggle');

menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? '●' : '◐';
});

const projects = [
  {
    code: 'FILE 001',
    title: 'MODAL + DARKMODE',
    image: 'Modal e Darkmode.png',
    text: 'Projeto desenvolvido para praticar JavaScript aplicado à interface. Trabalha com modal, manipulação do DOM e alternância de tema claro/escuro. Layout inspirado no Jogo MOUTHWASHING',
    link: 'https://github.com/TordYamagata/Darkmode/tree/main'
  },
  {
    code: 'FILE 002',
    title: 'TEST HTML',
    image: 'PNGHTMLTEST.png',
    text: 'Site TESTE não funcional feito como uma pequena biografia inspirada no jogo Hylics',
    link: 'https://github.com/TordYamagata/TestHTML'
  },
  {
    code: 'FILE 003',
    title: 'GOTHAM CITY POLICE DEPARTMENT',
    image: 'GCPDSITE.png',
    text: 'Projeto inspirado no GOTHAM CITY POLICE DEPARTMENT do universo DC-BATMAN.',
    link: 'https://github.com/TordYamagata/Gotham-City-Police-Department-Site'
  }
];

const modal = document.getElementById('projectModal');
const modalCode = document.getElementById('modalCode');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalText');
const modalLink = document.getElementById('modalLink');

function openProject(index){
  const project = projects[index];
  modalCode.textContent = project.code;
  modalTitle.textContent = project.title;
  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalText.textContent = project.text;
  modalLink.href = project.link;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeProject(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openProject(Number(card.dataset.project)));
});
document.querySelector('.modal-close').addEventListener('click', closeProject);
modal.addEventListener('click', e => { if(e.target === modal) closeProject(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeProject(); });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelector('.hero-machine').style.transform = `translateY(${y * .08}px) rotate(-8deg)`;
});