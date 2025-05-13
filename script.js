window.addEventListener('DOMContentLoaded', () => {
  // 1. Apply theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(`${savedTheme}-mode`);

  // 2. Toggle theme on button click
  const toggleBtn = document.getElementById('toggle-theme');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-mode');
      document.body.classList.toggle('dark-mode', !isDark);
      document.body.classList.toggle('light-mode', isDark);
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
  }

  // 3. Auto-fill form from localStorage
  const savedData = JSON.parse(localStorage.getItem('formData'));
  if (savedData) {
    if (savedData.name) document.getElementById('name').value = savedData.name;
    if (savedData.email) document.getElementById('email').value = savedData.email;
  }

  // 4. Save form data on submit
  const form = document.getElementById('user-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('formData', JSON.stringify({ name, email }));
  });
});
