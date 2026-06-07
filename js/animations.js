/* ============================================
   Animations — Intersection Observer Fade Up
   ============================================ */

(function() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class
        entry.target.classList.add('visible');
        
        // Stop observing once animated (one-way animation)
        // If we want it to animate every time it enters, remove the unobserve call
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Function to initialize observer on all fade-up elements
  function initAnimations() {
    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }

  // Initial trigger for elements already in view
  function triggerVisible() {
    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight - 50) {
        el.classList.add('visible');
      }
    });
  }

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    setTimeout(triggerVisible, 100);
  });
})();
