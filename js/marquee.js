/* ============================================
   Skills Marquee — Infinite Scroll
   ============================================ */

(function() {
  const marqueeContainer = document.getElementById('skillsMarquee');
  if (!marqueeContainer) return;

  const skills = [
    { name: 'Python', icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"%3E%3Cpath fill="%233776AB" d="M63.9 1.1c-31.5 0-30.5 13.6-30.5 13.6l.1 14h31.1v4.4H32.3S1.6 31.8 1.6 63.8c0 32 27.2 31.3 27.2 31.3l12.4-.2v-17.5s-.2-15.3 15-15.3h31.8s14.8.4 14.8-15.2V16.3S102.5 1.1 63.9 1.1zm-18.4 20a6.3 6.3 0 1 1 0-12.6 6.3 6.3 0 0 1 0 12.6zm79.1 27.6s-28.5-1.1-28.5 14v17.4H63.9s-14.7-.5-14.7 15v31.7s-1.8 14.1 31.8 14.1c33.5 0 32.2-13.6 32.2-13.6l-.1-14h-31.1v-4.4H114s30.8 1.3 30.8-31.2c0-32-27.1-31.4-27.1-31.4zm-14.8 77.4a6.3 6.3 0 1 1 0-12.6 6.3 6.3 0 0 1 0 12.6z"/%3E%3C/svg%3E' },
    { name: 'TensorFlow', icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"%3E%3Cpath fill="%23FF6F00" d="M64 0L15.3 28.1v56.2L64 128l48.7-28.1V28.1L64 0zm34.2 96.6l-34.2 19.7v-25l23.5-13.5-9.3-16.1L64 70.1v-23l14-8.1 20.2 35v22.6zM64 42l-14 8.1 9.3 16.1-23.5 13.5v25L15.3 85V62.4l20.2-35L64 16.3v25.7z"/%3E%3C/svg%3E' },
    { name: 'Flutter', icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"%3E%3Cpath fill="%2342A5F5" d="M121 27.2l-32.9 33-14.7-14.8L106.1 12.5a6.5 6.5 0 019.2 0l5.7 5.7a6.5 6.5 0 010 9zm-70.3 32L64.2 46l11 11-24.5 24.5L6.6 37.6a6.5 6.5 0 010-9.2l5.7-5.7a6.5 6.5 0 019.2 0L64.2 65.5 50.7 79 36 64.3 50.7 59.2zM64.2 81l14.7 14.8L50.7 114.5a6.5 6.5 0 01-9.2 0l-5.7-5.7a6.5 6.5 0 010-9.2L64.2 81z"/%3E%3C/svg%3E' },
    { name: 'React', icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"%3E%3Cpath fill="%2361DAFB" d="M64 92.5c-15.7 0-28.5-12.8-28.5-28.5S48.3 35.5 64 35.5 92.5 48.3 92.5 64 79.7 92.5 64 92.5zM64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z"/%3E%3Cpath fill="%2361DAFB" d="M64 121.5c-20 0-37-2.6-50.5-7.7-6-2.3-9.5-5.2-9.5-8.8s3.5-6.5 9.5-8.8c12-4.6 27-7 42-7 2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5c-14.2 0-28.5 2.2-39.5 6.4-3.5 1.4-4 2-4 2.4s.5 1 4 2.4C28 114 44.5 117 64 117s36-3 48-7.7c3.5-1.4 4-2 4-2.4s-.5-1-4-2.4c-11-4.2-25.2-6.4-39.5-6.4-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c15 0 30 2.4 42 7 6 2.3 9.5 5.2 9.5 8.8s-3.5 6.5-9.5 8.8c-13.5 5.1-30.5 7.7-50.5 7.7z"/%3E%3Cpath fill="%2361DAFB" d="M96 98c-11 0-20.5-8-27-21-6-12-7-25-3.5-35 1.5-4.5 4-8.5 7.5-11 3.2-2.3 7-3.5 11-3.5 14.5 0 25.5 12 30.5 28 4.2 13 3 26-3 36-3.8 6.5-10 12-18 12zm-3-63c-2.5 0-5.5 1-8 2.5-3 2-5 5.5-6 9.5-3 8.5-2 20.5 3 31.5 5 11 13 18 22.5 18 6 0 11-4 14-9.5 5-8.5 6-20.5 2.5-31.5-4-12-13.5-20.5-25-20.5z"/%3E%3Cpath fill="%2361DAFB" d="M32 98c-8 0-14.2-5.5-18-12-6-10-7.2-23-3-36C16 34 27 22 41.5 22c4 0 7.8 1.2 11 3.5 3.5 2.5 6 6.5 7.5 11 3.5 10 2.5 23-3.5 35-6.5 13-16 21-27 21-2 0-4 0-5.5-1zM41.5 31c-11.5 0-21 8.5-25 20.5-3.5 11-2.5 23 2.5 31.5 3 5.5 8 9.5 14 9.5 9.5 0 17.5-7 22.5-18 5-11 6-23 3-31.5-1-4-3-7.5-6-9.5-2.5-1.5-5.5-2.5-8-2.5z"/%3E%3C/svg%3E' },
    { name: 'FastAPI', icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"%3E%3Ccircle cx="64" cy="64" r="64" fill="%23009688"/%3E%3Cpath fill="%23FFF" d="M64 12.8L20.5 64 64 115.2 107.5 64z"/%3E%3Cpath fill="%23004D40" d="M64 12.8v102.4L107.5 64z"/%3E%3Cpath fill="%23FFF" d="M64 38.4l-20.5 25.6L64 89.6l20.5-25.6z"/%3E%3C/svg%3E' },
    { name: 'Firebase', icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"%3E%3Cpath fill="%23FFCA28" d="M96.7 114.5L108 55.4a4.1 4.1 0 00-6.4-4l-37.1 21.6-11.4-11.7L96.7 114.5z"/%3E%3Cpath fill="%23FFA000" d="M96.7 114.5L53.1 61.3 22.2 92.5l5.3 29.5a8.1 8.1 0 0012 5.5l57.2-13z"/%3E%3Cpath fill="%23F57C00" d="M53.1 61.3L72.2 4.1c1.3-3.6 6.5-3.8 8.1-.3L96.7 114.5z"/%3E%3Cpath fill="%23FFCA28" d="M22.2 92.5L34.1 27c.8-4 6.4-4.5 7.9-.7l11.1 35L53.1 61.3 22.2 92.5z"/%3E%3C/svg%3E' },
    { name: 'Docker', icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"%3E%3Cpath fill="%232496ED" d="M125 56.4s-5.7-18.6-18.6-18.6c-4.5 0-8.6 1.3-12 3.6-2.5-20.8-21.7-20.8-21.7-20.8v12s12.5.3 12.5 13.5v5h-13v12h17.5v-3.7c3.1-2 7-3.1 11.2-3.1 8.6 0 13 8.3 13 8.3L125 56.4z"/%3E%3Cpath fill="%232496ED" d="M60.2 46.4H47V33.2h13.2v13.2zm-14.8 0H32.2V33.2h13.2v13.2zm0-14.8H32.2V18.4h13.2v13.2zm-14.8 14.8H17.4V33.2h13.2v13.2zm0-14.8H17.4V18.4h13.2v13.2zm-14.8 14.8H2.6V33.2h13.2v13.2z"/%3E%3Cpath fill="%232496ED" d="M125.4 69.4H2.6c0 18.2 14.8 33 33 33h59c17 0 30.8-14.8 30.8-33z"/%3E%3C/svg%3E' },
    { name: 'Git', icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"%3E%3Cpath fill="%23F05032" d="M125 61l-58-58c-4-4-10.4-4-14.4 0L19 36l20.4 20.4c3.4-1.2 7.4-.5 10.1 2.3s3.5 6.7 2.3 10.1l17.4 17.4c3.4-1.2 7.4-.5 10.1 2.3 4 4 4 10.4 0 14.4-4 4-10.4 4-14.4 0-2.8-2.8-3.5-6.7-2.3-10.1L45.2 75.4v-23l-3-3L3 80.6c-4 4-4 10.4 0 14.4l58 58c4 4 10.4 4 14.4 0l49.6-49.6c4-4 4-10.4 0-14.4z"/%3E%3C/svg%3E' },
    { name: 'MySQL', icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"%3E%3Cpath fill="%234479A1" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 115c-28.1 0-51-22.9-51-51S35.9 13 64 13s51 22.9 51 51-22.9 51-51 51z"/%3E%3Cpath fill="%23F29111" d="M48 38v52h11V53h6v37h11V53h6v37h11V38H48z"/%3E%3C/svg%3E' }
  ];

  // Function to create an icon card
  function createCard(skill) {
    return `
      <div class="skill-icon-card" data-cursor="button">
        <img src='${skill.icon}' alt="${skill.name}">
        <span class="skill-icon-label">${skill.name}</span>
      </div>
    `;
  }

  // Generate HTML for skills
  let html = '';
  skills.forEach(skill => { html += createCard(skill); });
  
  // Duplicate for seamless infinite scroll (append enough copies to fill width x2)
  const fullHtml = html + html + html + html;
  
  marqueeContainer.innerHTML = fullHtml;

  // Adjust animation duration based on content width to maintain speed
  window.addEventListener('load', () => {
    const totalWidth = marqueeContainer.scrollWidth / 2; // half because it's duplicated
    const speed = 50; // pixels per second
    const duration = totalWidth / speed;
    
    // Apply calculated duration to match visual consistency
    if (totalWidth > 0) {
      marqueeContainer.style.animationDuration = `${duration}s`;
    }
  });

})();
