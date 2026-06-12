/* ============================================================
   NOYAL SURYA — MAIN APP HANDLER & ANIMATION CHOREOGRAPHY
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // ─── DYNAMIC RENDERING ────────────────────────────────────
  renderHeroRoles();
  renderDesignPortfolio();
  renderReelFolders();
  renderFullVideos();
  renderAboutStats();
  renderSkills();
  renderContactLinks();

  // ─── INTERACTIVE SYSTEMS ──────────────────────────────────
  initCustomCursor();
  initNavigation();
  initTabSystem();
  initLightbox();
  initHoverPlayVideos();

  // ─── ANIMATION SYSTEM (GSAP + SCROLLTRIGGER) ──────────────
  initScrollAnimations();
}

// ─── DYNAMIC RENDER FUNCTIONS ───────────────────────────────

function renderHeroRoles() {
  const container = document.getElementById('hero-roles');
  if (!container) return;

  container.innerHTML = PORTFOLIO.personal.roles
    .map(role => `<span class="hero__role hover-target">${role}</span>`)
    .join('');
}

function renderDesignPortfolio() {
  const grid = document.getElementById('design-grid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO.designs
    .map(design => `
      <div class="design-card hover-target reveal" data-id="${design.id}">
        <img src="${design.image}" alt="${design.title}" loading="lazy">
        <div class="design-card__info">
          <h3 class="design-card__title">${design.title}</h3>
          <div class="design-card__tags">
            ${design.tags.map(tag => `<span class="design-card__tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `)
    .join('');

  // Register lightbox trigger
  grid.querySelectorAll('.design-card').forEach(card => {
    card.addEventListener('click', () => {
      const designId = card.getAttribute('data-id');
      const item = PORTFOLIO.designs.find(d => d.id === designId);
      if (item) openLightbox('image', item.image, item.title, item.description);
    });
  });
}

function renderReelFolders() {
  const folderContainer = document.getElementById('reel-folders');
  if (!folderContainer) return;

  // Render folder navigation tabs
  folderContainer.innerHTML = PORTFOLIO.reelFolders
    .map((folder, index) => `
      <div class="reel-folder hover-target ${index === 0 ? 'active' : ''}" data-category="${folder.id}">
        <div class="reel-folder__thumb">
          <img src="${folder.thumbnail}" alt="${folder.name}" loading="lazy">
        </div>
        <div class="reel-folder__name">${folder.name}</div>
      </div>
    `)
    .join('');

  // Register folder clicks
  folderContainer.querySelectorAll('.reel-folder').forEach(folder => {
    folder.addEventListener('click', () => {
      folderContainer.querySelectorAll('.reel-folder').forEach(f => f.classList.remove('active'));
      folder.classList.add('active');
      loadReels(folder.getAttribute('data-category'));
    });
  });

  // Load first folder by default
  if (PORTFOLIO.reelFolders.length > 0) {
    loadReels(PORTFOLIO.reelFolders[0].id);
  }
}

function loadReels(category) {
  const grid = document.getElementById('reel-grid');
  if (!grid) return;

  const data = PORTFOLIO.reels[category] || [];
  if (data.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No reels found in this category.</div>`;
    return;
  }

  grid.innerHTML = data
    .map(reel => {
      return `
        <div class="reel-card hover-target reveal">
          <video src="${reel.src}" loop preload="metadata" playsinline></video>
          <a href="${reel.link}" target="_blank" rel="noopener" class="reel-card__link-btn hover-target" aria-label="Open on Instagram">↗</a>
          <div class="reel-card__label">${reel.label}</div>
        </div>
      `;
    })
    .join('');

  // Register hover actions for autoplay, click actions to play/pause on touch
  grid.querySelectorAll('.reel-card').forEach(card => {
    const video = card.querySelector('video');

    // Desktop Hover Play
    card.addEventListener('mouseenter', async () => {
      try {
        video.currentTime = 0;
        video.muted = false;
        await video.play();
      } catch (err) {
        // Fallback to muted playback if audio is blocked by user gesture requirements
        video.muted = true;
        await video.play();
      }
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });

    // Touch/Click to toggle play/pause (instead of auto-navigating)
    card.addEventListener('click', (e) => {
      // If clicking the link button, let the link action handle it
      if (e.target.closest('.reel-card__link-btn')) return;

      if (video.paused) {
        // Pause any other playing reels
        document.querySelectorAll('.reel-grid video').forEach(v => {
          if (v !== video) v.pause();
        });
        
        video.muted = false;
        video.play().catch(() => {
          video.muted = true;
          video.play();
        });
      } else {
        video.pause();
      }
    });
  });

  // Re-trigger reveal animations if elements are rendered post-load
  gsap.fromTo(grid.querySelectorAll('.reel-card'), 
    { opacity: 0, y: 30 }, 
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
  );
}

function renderFullVideos() {
  const container = document.getElementById('video-showcase');
  if (!container) return;

  container.innerHTML = PORTFOLIO.videos
    .map(video => `
      <div class="video-card hover-target reveal">
        <video src="${video.src}" controls preload="metadata" playsinline></video>
        <div class="video-card__title">${video.title}</div>
      </div>
    `)
    .join('');
}

function renderAboutStats() {
  const container = document.getElementById('about-stats');
  if (!container) return;

  container.innerHTML = PORTFOLIO.stats
    .map(stat => `
      <div class="stat-card reveal">
        <div class="stat-card__value" data-target="${stat.value}">${stat.value}${stat.suffix}</div>
        <div class="stat-card__label">${stat.label}</div>
      </div>
    `)
    .join('');
}

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO.skills
    .map(module => `
      <div class="skill-module reveal">
        <span class="skill-module__icon">${module.icon}</span>
        <h3 class="skill-module__category">${module.category}</h3>
        <div class="skill-module__tags">
          ${module.items.map(skill => `
            <span class="skill-tag hover-target">${skill.name}</span>
          `).join('')}
        </div>
      </div>
    `)
    .join('');
}

function renderContactLinks() {
  const container = document.getElementById('contact-links');
  if (!container) return;

  container.innerHTML = `
    <a href="${PORTFOLIO.social.whatsapp}" target="_blank" rel="noopener" class="contact-link hover-target reveal">
      <div class="contact-link__icon">💬</div>
      <div class="contact-link__details">
        <div class="contact-link__label">WhatsApp Chat</div>
        <div class="contact-link__value">${PORTFOLIO.social.phone}</div>
      </div>
      <div class="contact-link__arrow">→</div>
    </a>
    
    <a href="${PORTFOLIO.social.email}" class="contact-link hover-target reveal">
      <div class="contact-link__icon">✉️</div>
      <div class="contact-link__details">
        <div class="contact-link__label">Direct Email</div>
        <div class="contact-link__value">noyalsurya@gmail.com</div>
      </div>
      <div class="contact-link__arrow">→</div>
    </a>

    <a href="${PORTFOLIO.social.linkedin}" target="_blank" rel="noopener" class="contact-link hover-target reveal">
      <div class="contact-link__icon">💼</div>
      <div class="contact-link__details">
        <div class="contact-link__label">LinkedIn Profile</div>
        <div class="contact-link__value">surya-noyal</div>
      </div>
      <div class="contact-link__arrow">→</div>
    </a>
  `;
}


// ─── INTERACTIVE SYSTEMS ───────────────────────────────────

function initCustomCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'cursor-dot';
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouse = { x: 0, y: 0 };
  let dotPos = { x: 0, y: 0 };
  let ringPos = { x: 0, y: 0 };

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Smooth lerp following
  function updateCursor() {
    dotPos.x += (mouse.x - dotPos.x) * 0.3;
    dotPos.y += (mouse.y - dotPos.y) * 0.3;
    dot.style.left = `${dotPos.x}px`;
    dot.style.top = `${dotPos.y}px`;

    ringPos.x += (mouse.x - ringPos.x) * 0.15;
    ringPos.y += (mouse.y - ringPos.y) * 0.15;
    ring.style.left = `${ringPos.x}px`;
    ring.style.top = `${ringPos.y}px`;

    requestAnimationFrame(updateCursor);
  }
  updateCursor();

  // Hover states
  document.addEventListener('mouseover', e => {
    if (e.target.closest('.hover-target') || e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      ring.classList.add('hovering');
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest('.hover-target') || e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      ring.classList.remove('hovering');
    }
  });
}

function initNavigation() {
  const nav = document.getElementById('navbar');
  const menuBtn = document.getElementById('menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  // Sticky border & background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile menu button
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }
}

function initTabSystem() {
  const buttons = document.querySelectorAll('.filter-btn');
  const sections = {
    design: document.getElementById('design-section'),
    reels: document.getElementById('reels-section'),
    videos: document.getElementById('videos-section')
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.dataset.tab;
      
      // Hide all sub-sections
      Object.values(sections).forEach(sec => {
        if (sec) sec.classList.remove('active');
      });

      // Show target sub-section
      if (sections[target]) {
        sections[target].classList.add('active');
        
        // Refresh ScrollTrigger so calculations remain accurate
        ScrollTrigger.refresh();
      }
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.getElementById('lightbox-close');
  const mediaContainer = document.getElementById('lightbox-media');
  const title = document.getElementById('lightbox-title');
  const desc = document.getElementById('lightbox-desc');

  if (!lightbox || !closeBtn || !mediaContainer) return;

  window.openLightbox = (type, src, itemTitle, itemDesc) => {
    mediaContainer.innerHTML = '';
    title.innerText = itemTitle || '';
    desc.innerText = itemDesc || '';

    if (type === 'image') {
      const img = document.createElement('img');
      img.src = src;
      img.alt = itemTitle || '';
      mediaContainer.appendChild(img);
    } else if (type === 'video') {
      const video = document.createElement('video');
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      mediaContainer.appendChild(video);
    }

    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    mediaContainer.innerHTML = '';
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
}

function initHoverPlayVideos() {
  // Setup inline video cards in full-video section to pause/resume or control visually
  const videos = document.querySelectorAll('.video-card video');
  videos.forEach(v => {
    v.addEventListener('mouseenter', () => {
      v.play().catch(() => {});
    });
    v.addEventListener('mouseleave', () => {
      v.pause();
    });
  });
}


// ─── SCROLL ANIMATIONS (GSAP + SCROLLTRIGGER) ───────────────

function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Entrance Animations (on page load)
  const heroTl = gsap.timeline();
  
  heroTl.from('.hero__avatar', {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)'
  })
  .from('.hero__name', {
    y: 20,
    opacity: 0,
    duration: 0.6
  }, '-=0.5')
  .from('.hero__headline', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .from('.hero__role', {
    scale: 0.8,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: 'back.out(1.5)'
  }, '-=0.4')
  .from('.hero__actions', {
    y: 20,
    opacity: 0,
    duration: 0.6
  }, '-=0.3')
  .from('.hero__scroll', {
    opacity: 0,
    y: -10,
    duration: 0.5
  }, '-=0.2');

  // 2. Reveal Sections & Stagger Items on Scroll
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // 3. Staggered reveal for skills tags
  const skillModules = document.querySelectorAll('.skill-module');
  skillModules.forEach(module => {
    const tags = module.querySelectorAll('.skill-tag');
    gsap.fromTo(tags,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: module,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // 4. Staggered reveal for stat cards & counter animations
  const stats = document.querySelectorAll('.stat-card__value');
  stats.forEach(stat => {
    const targetVal = parseInt(stat.getAttribute('data-target'), 10);
    
    gsap.fromTo(stat,
      { textContent: 0 },
      {
        textContent: targetVal,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%'
        },
        onUpdate: function() {
          const suffix = stat.textContent.endsWith('+') || targetVal > 50 ? '+' : '';
          stat.innerHTML = Math.ceil(this.targets()[0].textContent) + (targetVal === 50 || targetVal === 15 || targetVal === 3 ? '+' : '');
        }
      }
    );
  });

  // 5. Parallax effect for ambient orbs
  gsap.to('.ambient-orb--cyan', {
    y: -100,
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1
    }
  });

  gsap.to('.ambient-orb--magenta', {
    y: 100,
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.5
    }
  });
}