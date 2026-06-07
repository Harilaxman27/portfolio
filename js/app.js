/* ============================================
   Main Application Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // Form Submission
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const successMsg = document.getElementById('contactSuccess');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Simulate sending
      submitBtn.innerHTML = 'Sending...';
      submitBtn.style.opacity = '0.7';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        contactForm.style.display = 'none';
        successMsg.classList.add('visible');
        
        // Trigger animation on success message
        setTimeout(() => {
          successMsg.style.transform = 'translateY(0)';
          successMsg.style.opacity = '1';
        }, 50);
        
        // Clear form
        contactForm.reset();
      }, 1000);
    });
  }

  // ==========================================
  // Blog Search (Visual Only)
  // ==========================================
  const blogSearch = document.getElementById('blogSearch');
  if (blogSearch) {
    blogSearch.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      // Since we don't have real articles yet, just show a visual state
      if (val.length > 0) {
        blogSearch.style.borderColor = 'var(--accent)';
      } else {
        blogSearch.style.borderColor = '';
      }
    });
  }

  // Handle URL hash for direct linking
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    if (window.switchSection) {
      window.switchSection(hash);
    }
  }

  // Check if fonts are loaded to avoid layout shifts on initial animation
  document.fonts.ready.then(() => {
    document.body.classList.add('fonts-loaded');
  });

});
