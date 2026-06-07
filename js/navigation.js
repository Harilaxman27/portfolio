/* ============================================
   Navigation — Tab Switching + Sliding Indicator
   ============================================ */

(function() {
  const navList = document.getElementById('navList');
  const navLinks = document.querySelectorAll('.nav-link');
  const indicator = document.getElementById('navIndicator');
  const sections = document.querySelectorAll('.section');

  if (!navList || !indicator || navLinks.length === 0) return;

  function updateIndicator(activeLink) {
    const listRect = navList.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    indicator.style.left = (linkRect.left - listRect.left) + 'px';
    indicator.style.width = linkRect.width + 'px';
  }

  function switchSection(sectionId) {
    // Update navigation
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
      updateIndicator(activeLink);
    }

    // Update sections
    sections.forEach(section => {
      section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.classList.add('active');

      // Re-trigger fade-up animations for newly visible section
      setTimeout(() => {
        const fadeElements = activeSection.querySelectorAll('.fade-up:not(.visible)');
        fadeElements.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('visible');
          }, i * 60);
        });
      }, 50);
    }
  }

  // Click handlers
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const section = link.dataset.section;
      switchSection(section);
    });
  });

  // Initial indicator position
  const initialActive = document.querySelector('.nav-link.active');
  if (initialActive) {
    // Wait for fonts to load
    document.fonts.ready.then(() => {
      updateIndicator(initialActive);
    });
    // Fallback
    setTimeout(() => updateIndicator(initialActive), 100);
  }

  // Handle resize
  window.addEventListener('resize', () => {
    const active = document.querySelector('.nav-link.active');
    if (active) updateIndicator(active);
  });

  // Export for external use
  window.switchSection = switchSection;
})();
