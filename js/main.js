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
  initScrollSpy();
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
          <video src="${reel.src}" loop preload="metadata" playsinline muted></video>
          <button class="reel-card__mute-btn hover-target" aria-label="Toggle Volume">
            <svg class="icon-muted" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.63 3.63L2.05 5.21 7.84 11H3v2h4l5 5v-4.17l4.96 4.96c-.63.46-1.34.82-2.12.98v2.03c1.32-.24 2.51-.83 3.51-1.66l2.05 2.05 1.58-1.58L3.63 3.63zM12 4L9.91 6.09 12 8.18V4zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71z"/>
            </svg>
            <svg class="icon-unmuted" viewBox="0 0 24 24" fill="currentColor" style="display: none;">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          </button>
          <a href="${reel.link}" target="_blank" rel="noopener" class="reel-card__link-btn hover-target" aria-label="Open on Instagram">↗</a>
          <div class="reel-card__label">${reel.label}</div>
        </div>
      `;
    })
    .join('');

  // Register hover actions for autoplay, click actions to play/pause on touch
  grid.querySelectorAll('.reel-card').forEach(card => {
    const video = card.querySelector('video');
    const muteBtn = card.querySelector('.reel-card__mute-btn');
    const iconMuted = muteBtn.querySelector('.icon-muted');
    const iconUnmuted = muteBtn.querySelector('.icon-unmuted');

    const setMuteState = (isMuted) => {
      video.muted = isMuted;
      if (isMuted) {
        iconMuted.style.display = 'block';
        iconUnmuted.style.display = 'none';
      } else {
        iconMuted.style.display = 'none';
        iconUnmuted.style.display = 'block';
      }
    };

    // Mute button click
    muteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent card click (play/pause)
      
      // If video is paused, start playing it when unmuted
      if (video.paused) {
        // Pause any other playing reels
        document.querySelectorAll('.reel-grid video').forEach(v => {
          if (v !== video) v.pause();
        });
        setMuteState(false);
        video.play().catch(() => {
          setMuteState(true);
          video.play();
        });
      } else {
        setMuteState(!video.muted);
      }
    });

    // Desktop Hover Play
    card.addEventListener('mouseenter', async () => {
      try {
        video.currentTime = 0;
        setMuteState(true);
        await video.play();
      } catch (err) {
        setMuteState(true);
        await video.play().catch(() => {});
      }
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });

    // Touch/Click to toggle play/pause (instead of auto-navigating)
    card.addEventListener('click', (e) => {
      // If clicking the link button or mute button, let their actions handle it
      if (e.target.closest('.reel-card__link-btn') || e.target.closest('.reel-card__mute-btn')) return;

      if (video.paused) {
        // Pause any other playing reels
        document.querySelectorAll('.reel-grid video').forEach(v => {
          if (v !== video) v.pause();
        });
        
        // On mobile click, try to play with sound!
        setMuteState(false);
        video.play().catch(() => {
          setMuteState(true);
          video.play();
        });
      } else {
        // If it is playing but muted, unmute it! This is very intuitive on mobile!
        if (video.muted) {
          setMuteState(false);
        } else {
          // If already unmuted, pause it
          video.pause();
        }
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

  // Select existing HTML cursor elements to avoid duplication
  let dot = document.querySelector('.cursor-dot');
  let ring = document.querySelector('.cursor-ring');
  
  if (!dot || !ring) {
    dot = document.createElement('div');
    ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);
  }

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
    const isInteractive = e.target.closest('a') || e.target.closest('button') || e.target.tagName === 'A' || e.target.tagName === 'BUTTON';

    if (isInteractive) {
      ring.classList.remove('has-text');
      ring.removeAttribute('data-text');
      dot.classList.remove('hide');
      ring.classList.add('hovering');
      return;
    }

    const designCard = e.target.closest('.design-card');
    const reelCard = e.target.closest('.reel-card');
    const videoCard = e.target.closest('.video-card');

    if (designCard) {
      ring.classList.add('has-text');
      ring.setAttribute('data-text', 'VIEW ✦');
      dot.classList.add('hide');
    } else if (reelCard) {
      ring.classList.add('has-text');
      ring.setAttribute('data-text', 'PLAY 🔊');
      dot.classList.add('hide');
    } else if (videoCard) {
      ring.classList.add('has-text');
      ring.setAttribute('data-text', 'WATCH 🎬');
      dot.classList.add('hide');
    } else if (e.target.closest('.hover-target')) {
      ring.classList.add('hovering');
    }
  });

  document.addEventListener('mouseout', e => {
    const isInteractive = e.target.closest('a') || e.target.closest('button') || e.target.tagName === 'A' || e.target.tagName === 'BUTTON';
    const designCard = e.target.closest('.design-card');
    const reelCard = e.target.closest('.reel-card');
    const videoCard = e.target.closest('.video-card');

    if (isInteractive) {
      ring.classList.remove('hovering');
    }

    if (designCard || reelCard || videoCard) {
      ring.classList.remove('has-text');
      ring.removeAttribute('data-text');
      dot.classList.remove('hide');
    } else if (e.target.closest('.hover-target')) {
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

function initScrollSpy() {
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav__link, .mobile-nav a');

  const options = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (!id) return;

        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, options);

  sections.forEach(section => {
    if (section.getAttribute('id')) {
      observer.observe(section);
    }
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