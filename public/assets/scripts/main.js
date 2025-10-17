console.log("From /assets/scripts/main.js"); 
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

const scrollToTopButton = document.querySelector('.scroll-to-top-button');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement; // Target the html element
  const lightModeText = document.querySelector('.light-mode-text');
  const darkModeText = document.querySelector('.dark-mode-text');

  function applyTheme(theme) {
    console.log('Applying theme:', theme);
    
    if (theme === 'dark') {
      htmlElement.classList.add('dark-mode');
      lightModeText.style.display = 'none';
      darkModeText.style.display = 'flex';
    } else {
      htmlElement.classList.remove('dark-mode');
      lightModeText.style.display = 'flex';
      darkModeText.style.display = 'none';
    }
    localStorage.setItem('theme', theme);
  }

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (prefersDark) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  themeToggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark-mode')) {
      applyTheme('light');
    } else {
      applyTheme('dark');
    }
  });

  // Function to change primary color programmatically (example)
  window.changePrimaryColor = function(newColor) {
    document.documentElement.style.setProperty('--primary-color', newColor);
  };

  // Function to change secondary color programmatically (example)
  window.changeSecondaryColor = function(newColor) {
    document.documentElement.style.setProperty('--secondary-color', newColor);
  };
});
