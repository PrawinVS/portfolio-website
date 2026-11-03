const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  primaryNav?.classList.toggle('is-open', !isOpen);
});

primaryNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation');
    primaryNav.classList.remove('is-open');
  });
});

const year = document.getElementById('currentYear');
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// Show the résumé button only after resume.pdf has been added to the site root.
const resumeLink = document.getElementById('resumeLink');
if (resumeLink) {
  fetch('resume.pdf', { method: 'HEAD' })
    .then((response) => {
      if (response.ok) resumeLink.hidden = false;
    })
    .catch(() => {
      // No résumé file yet; keep the optional button hidden.
    });
}
