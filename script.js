(function() {
  const greetingEl = document.getElementById('greeting');
  const themeBtn = document.getElementById('changeTheme');

  function getGreeting(date) {
    const hour = date.getHours();
    if (hour < 5) return 'Burning the midnight oil? ??';
    if (hour < 12) return 'Good morning! ??';
    if (hour < 17) return 'Good afternoon! ???';
    if (hour < 22) return 'Good evening! ??';
    return 'Late night vibes! ??';
  }

  function render() {
    const now = new Date();
    greetingEl.textContent = `${getGreeting(now)} It\'s ${now.toLocaleTimeString()}.`;
  }

  render();
  setInterval(render, 1000);

  themeBtn?.addEventListener('click', () => {
    const root = document.documentElement;
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  // Persist theme
  const stored = localStorage.getItem('theme');
  if (stored === 'light') document.documentElement.classList.add('light');
})();
