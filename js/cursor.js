/* ============================================
   Cursor Companion — Platinum Orb with Spring Physics
   ============================================ */

(function() {
  const orb = document.getElementById('cursorOrb');
  const ring = document.getElementById('cursorRing');
  const label = document.getElementById('cursorLabel');

  if (!orb || !ring || !label) return;

  // Check for touch device
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    orb.style.display = 'none';
    ring.style.display = 'none';
    label.style.display = 'none';
    return;
  }

  let mouseX = 0, mouseY = 0;
  let orbX = 0, orbY = 0;
  let ringX = 0, ringY = 0;
  let currentState = '';

  // Spring physics parameters
  const orbSmoothing = 0.15;
  const ringSmoothing = 0.08;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    // Spring interpolation
    orbX += (mouseX - orbX) * orbSmoothing;
    orbY += (mouseY - orbY) * orbSmoothing;
    ringX += (mouseX - ringX) * ringSmoothing;
    ringY += (mouseY - ringY) * ringSmoothing;

    orb.style.left = orbX + 'px';
    orb.style.top = orbY + 'px';
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    label.style.left = ringX + 'px';
    label.style.top = ringY + 'px';

    requestAnimationFrame(animate);
  }
  animate();

  // State management
  function setState(state, text) {
    if (currentState === state) return;
    currentState = state;

    // Remove all states
    orb.className = 'cursor-orb';
    ring.className = 'cursor-ring';
    label.className = 'cursor-label';

    if (state) {
      orb.classList.add('hover-' + state);
      ring.classList.add('hover-' + state);
      label.classList.add('hover-' + state);
      if (text) label.textContent = text;
    }
  }

  // Event delegation for hover states
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-cursor]');
    if (target) {
      const type = target.dataset.cursor;
      switch (type) {
        case 'project':
          setState('project', 'OPEN');
          break;
        case 'verify':
          setState('verify', 'VERIFY');
          break;
        case 'button':
          setState('button', '→');
          break;
        default:
          setState('link', '');
      }
      return;
    }

    // Image detection
    if (e.target.closest('.project-card-image') || e.target.closest('.photo-card')) {
      setState('image', 'VIEW');
      return;
    }

    // Link detection
    if (e.target.closest('a') || e.target.closest('button:not(.nav-link)')) {
      setState('link', '');
      return;
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('[data-cursor], a, button, .project-card-image, .photo-card');
    if (target) {
      // Check if we're still inside another interactive element
      const relatedTarget = e.relatedTarget;
      if (relatedTarget && relatedTarget.closest('[data-cursor], a, button, .project-card-image, .photo-card')) {
        return;
      }
      setState('', '');
    }
  });

  // Hide cursor on leave
  document.addEventListener('mouseleave', () => {
    orb.style.opacity = '0';
    ring.style.opacity = '0';
    label.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    orb.style.opacity = '1';
    ring.style.opacity = '1';
  });
})();
