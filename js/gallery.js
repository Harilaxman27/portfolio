/* ============================================
   Gallery — Tabs, Filters & Modal Modals
   ============================================ */

(function() {
  // Gallery Tabs Switching
  const galleryTabs = document.querySelectorAll('.gallery-tab');
  const galleryPanels = document.querySelectorAll('.gallery-panel');

  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      galleryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show target panel
      const target = tab.dataset.gallery;
      galleryPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `gallery-${target}`) {
          panel.classList.add('active');
          
          // Trigger animations in new panel
          setTimeout(() => {
            const fades = panel.querySelectorAll('.fade-up:not(.visible)');
            fades.forEach((f, i) => {
              setTimeout(() => f.classList.add('visible'), i * 60);
            });
          }, 50);
        }
      });
    });
  });

  // Photo Category Filtering
  const photoFilters = document.querySelectorAll('.photo-category-btn');
  const photoCards = document.querySelectorAll('.photo-card');

  photoFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      photoFilters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.category;

      // Filter cards
      photoCards.forEach(card => {
        // Reset animation states for clean reflow
        card.classList.remove('visible');
        card.style.display = 'none';

        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
          // Trigger animation
          setTimeout(() => {
            card.classList.add('visible');
          }, 10);
        }
      });
    });
  });

  // ==========================================
  // Project Modal
  // ==========================================
  const projectModal = document.getElementById('projectModal');
  const projectContent = document.getElementById('projectModalContent');
  const projectCards = document.querySelectorAll('.project-card');

  // Project Data
  const projectsData = {
    ecofarm: {
      title: "Eco Farm AI",
      subtitle: "Smart farming assistant for Crop, Dairy, and Poultry farmers",
      problem: "Farmers struggle with identifying crop diseases early and lack unified platforms for managing different types of farming (crop, dairy, poultry) along with financial tracking.",
      solution: "A comprehensive AI-powered assistant that provides real-time crop disease detection using computer vision, personalized crop recommendations, and a complete farm management dashboard.",
      features: [
        "Real-time crop disease detection using trained ML models",
        "Personalized crop recommendations based on soil and weather data",
        "Financial tracking module for expenses and income",
        "Dairy and poultry management dashboards",
        "Offline-first capability with Firebase synchronization"
      ],
      tech: ["Flutter", "Firebase", "TensorFlow Lite", "REST APIs", "Provider"],
      challenges: "Optimizing the ML models to run efficiently on low-end mobile devices without internet connectivity required significant quantization and model architecture adjustments."
    },
    eduverse: {
      title: "EduVerse",
      subtitle: "AI-powered personalized learning platform",
      problem: "Traditional education platforms offer a one-size-fits-all approach, leading to lower engagement and suboptimal learning outcomes for students with different learning paces.",
      solution: "An adaptive learning environment that uses AI to analyze student performance and dynamically adjusts content difficulty, learning paths, and quiz generation.",
      features: [
        "AI-generated adaptive quizzes based on weak areas",
        "Personalized learning path generation",
        "Interactive coding practice environment",
        "Detailed progress tracking and analytics dashboard",
        "Gamification elements to boost engagement"
      ],
      tech: ["React", "FastAPI", "PostgreSQL", "OpenAI API", "TailwindCSS"],
      challenges: "Designing a prompt engineering architecture that could consistently generate high-quality, syllabus-aligned questions without hallucination."
    },
    urbanhero: {
      title: "UrbanHero",
      subtitle: "AI-powered waste reporting and civic engagement platform",
      problem: "Citizens lack an efficient way to report civic issues like illegal dumping, and municipalities struggle to categorize and prioritize these reports.",
      solution: "A mobile application where users can snap photos of civic issues. The app uses AI to automatically categorize the issue, assess severity, and route it to the appropriate department.",
      features: [
        "One-click issue reporting with automatic location tagging",
        "AI image analysis for automatic categorization (waste, pothole, etc.)",
        "Severity assessment using computer vision",
        "Public dashboard for tracking issue resolution",
        "Gamified citizen reward system"
      ],
      tech: ["Flutter", "Google Maps API", "Python", "Computer Vision", "Supabase"],
      challenges: "Handling poor network connectivity during image uploads and ensuring the computer vision model accurately identified issues even in poor lighting conditions."
    },
    docmind: {
      title: "DocMind",
      subtitle: "Offline-first healthcare application for medical documents",
      problem: "Healthcare professionals in remote areas often face internet connectivity issues, making it difficult to access and update critical patient records reliably.",
      solution: "An offline-first document management system that allows full access and editing capabilities without internet, syncing seamlessly in the background when connectivity is restored.",
      features: [
        "Robust offline access to all patient documents",
        "Conflict resolution during background synchronization",
        "Secure local encryption of medical records",
        "Document OCR for quick data extraction",
        "Intuitive folder structure and tag-based search"
      ],
      tech: ["Flutter", "SQLite", "Firebase Offline Capabilities", "AES Encryption", "Google ML Kit"],
      challenges: "Implementing a reliable conflict resolution strategy for concurrent offline edits across different devices by the same user."
    }
  };

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    // Generate tech tags HTML
    const techHtml = data.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join('');

    const html = `
      <button class="modal-close" id="closeProjectModal" aria-label="Close modal">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      
      <div class="modal-header">
        <h3 class="modal-title">${data.title}</h3>
        <div class="modal-subtitle">${data.subtitle}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Problem Statement</div>
        <div class="modal-section-body">${data.problem}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Solution</div>
        <div class="modal-section-body">${data.solution}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Key Features</div>
        <div class="modal-section-body">
          <ul>
            ${data.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Challenges Overcome</div>
        <div class="modal-section-body">${data.challenges}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Tech Stack</div>
        <div class="modal-tech-tags">
          ${techHtml}
        </div>
      </div>

      <div class="modal-links">
        <a href="#" class="modal-link-btn" data-cursor="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"/></svg>
          GitHub Repository
        </a>
        <a href="#" class="modal-link-btn" data-cursor="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
          Live Demo
        </a>
      </div>
    `;

    projectContent.innerHTML = html;
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    // Setup close listeners
    document.getElementById('closeProjectModal').addEventListener('click', closeProjectModal);
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      openProjectModal(card.dataset.project);
    });
  });

  // Close on overlay click
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  // ==========================================
  // Photo Modal (Cinematic)
  // ==========================================
  const photoModal = document.getElementById('photoModal');
  const photoContent = document.getElementById('photoModalContent');

  function openPhotoModal(card) {
    const title = card.querySelector('.photo-card-title').textContent;
    const date = card.querySelector('.photo-card-date').textContent;

    const html = `
      <button class="modal-close" id="closePhotoModal" aria-label="Close modal">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      
      <div class="modal-header" style="margin-bottom: var(--space-xl)">
        <h3 class="modal-title">${title}</h3>
        <div class="modal-subtitle">${date}</div>
      </div>

      <div style="width: 100%; aspect-ratio: 16/9; background: #222; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-xl);">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" width="48" height="48" style="opacity:0.3"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"/></svg>
      </div>

      <p class="photo-modal-desc">
        A memorable moment from ${title}. This represents a milestone in my journey, collaborating with amazing people and pushing the boundaries of what we could build together.
      </p>

      <div class="photo-modal-achievement">
        <div style="width:40px; height:40px; border-radius:8px; background:var(--surface); border:1px solid var(--border); display:flex; align-items:center; justify-content:center; color:var(--accent);">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-.925.237m.925-.237a48.97 48.97 0 01-.925.237m-.925-.237a48.97 48.97 0 01-7.35 0"/></svg>
        </div>
        <div>
          <div class="photo-modal-achievement-label">Related Event</div>
          <div class="photo-modal-achievement-title">${title}</div>
        </div>
      </div>
    `;

    photoContent.innerHTML = html;
    photoModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    document.getElementById('closePhotoModal').addEventListener('click', closePhotoModal);
  }

  function closePhotoModal() {
    photoModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  photoCards.forEach(card => {
    card.addEventListener('click', () => openPhotoModal(card));
  });

  photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) closePhotoModal();
  });

  // Global ESC key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal.classList.contains('active')) closeProjectModal();
      if (photoModal.classList.contains('active')) closePhotoModal();
    }
  });

})();
