const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Đóng menu' : 'Mở menu');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const checks = [...document.querySelectorAll('.check-item input')];
const progressText = document.querySelector('#progress-text');
const progressFill = document.querySelector('#progress-fill');
const result = document.querySelector('#check-result');

function updateChecklist() {
  const completed = checks.filter(check => check.checked).length;
  const total = checks.length;
  if (progressText) progressText.textContent = `${completed}/${total}`;
  if (progressFill) progressFill.style.width = `${(completed / total) * 100}%`;
  if (result) {
    if (completed === total) result.textContent = 'Tuyệt! Bạn đã hoàn thành cả 4 bước kiểm tra an toàn số.';
    else if (completed === 0) result.textContent = 'Chọn các mục bạn đã hoàn thành để xem kết quả.';
    else result.textContent = `Bạn đã hoàn thành ${completed}/${total} bước. Còn ${total - completed} thói quen nữa để kiểm tra!`;
  }
}
checks.forEach(check => check.addEventListener('change', updateChecklist));
