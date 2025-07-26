const sidebar = document.querySelector(".sidebar");
const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");

let lastScrollTop = 0;
let closedManually = false;

function showSidebar() {
  if (closedManually) return;
  sidebar.classList.add("open");
  btnOpen.style.display = "none";
  btnClose.style.display = "inline-flex";
}

function hideSidebar() {
  sidebar.classList.remove("open");
  btnOpen.style.display = "inline-flex";
  btnClose.style.display = "none";
  closedManually = true;
}

window.addEventListener("DOMContentLoaded", () => {
  btnClose.style.display = "none";
});

btnOpen.addEventListener("click", () => {
  closedManually = false;
  showSidebar();
});

btnClose.addEventListener("click", hideSidebar);

window.addEventListener("scroll", () => {
  if (window.innerWidth <= 768) {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
      hideSidebar();
    } else if (currentScroll < lastScrollTop - 20) {
      showSidebar();
    }
  }
});
