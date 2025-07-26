// ====== Elementos ======
const sidebar = document.querySelector('.sidebar');
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');

let lastScrollTop = 0;
let closedManually = false; // <- nova flag

function showSidebar() {
  if (closedManually) return; // não mostra se foi fechado manualmente
  sidebar.classList.add('open');
  btnOpen.style.display = 'none';
  btnClose.style.display = 'inline-flex';
}

function hideSidebar() {
  sidebar.classList.remove('open');
  btnOpen.style.display = 'inline-flex';
  btnClose.style.display = 'none';
  closedManually = true; // marca que foi fechado pelo botão
}

window.addEventListener('DOMContentLoaded', () => {
  btnClose.style.display = 'none';
});

btnOpen.addEventListener('click', () => {
  closedManually = false; // resetar flag ao abrir manualmente
  showSidebar();
});

btnClose.addEventListener('click', hideSidebar);

window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
      // rolando para baixo
      hideSidebar();
    } else if (currentScroll < lastScrollTop - 20) {
      // rolando para cima com margem
      showSidebar();
    }
  }
});
