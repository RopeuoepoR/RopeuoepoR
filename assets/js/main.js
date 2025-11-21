// 导航开关
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => navMenu.classList.toggle('show'));

// 计时器（从 2025-11-07 00:00:00 开始）
const start = new Date('2025-11-07T00:00:00');
const timer = document.getElementById('timer');
setInterval(() => {
  const now = new Date();
  const diff = now - start;
  const sec = Math.floor(diff / 1000);
  const y = Math.floor(sec / (3600 * 24 * 365));
  const d = Math.floor((sec % (3600 * 24 * 365)) / (3600 * 24));
  const h = Math.floor((sec % (3600 * 24)) / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  timer.textContent = `网站已经存在了 ${y}年${d}天${h}小时${m}分钟${s}秒`;
}, 1000);
