function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

// === Tema Gelap / Terang ===
const body = document.body;
const themeToggleBtn = document.querySelector('.theme-toggle');

// Deteksi preferensi sistem
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark');
  themeToggleBtn.textContent = '☀️';
}

function toggleTheme() {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    themeToggleBtn.textContent = '☀️';
  } else {
    themeToggleBtn.textContent = '🌙';
  }
}
