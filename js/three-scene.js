/* ============================================================
   THREE.JS INTERACTIVE BACKGROUND SCENE
   Particle Constellation & Ambient Light Orbs
   ============================================================ */

class InteractiveBackground {
  constructor() {
    this.canvas = document.getElementById('three-canvas');
    if (!this.canvas) return;

    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.particles = null;
    this.particleCount = window.innerWidth < 768 ? 150 : 600;
    
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scroll = { y: 0, targetY: 0 };
    
    this.positions = [];
    this.velocities = [];
    
    this.init();
  }

  init() {
    // Scene & Camera
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.z = 30;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create Particles
    this.createParticles();

    // Event Listeners
    window.addEventListener('resize', this.onResize.bind(this));
    
    // Mouse interaction (only desktop)
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', this.onMouseMove.bind(this));
    }

    window.addEventListener('scroll', this.onScroll.bind(this));

    // Start Loop
    this.animate();
  }

  createParticles() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);

    const colorPalette = [
      new THREE.Color('#00d4ff'), // Cyan
      new THREE.Color('#7b2dff'), // Violet
      new THREE.Color('#ff006e'), // Magenta
      new THREE.Color('#ffffff')  // White
    ];

    for (let i = 0; i < this.particleCount; i++) {
      // Random coordinates in a cube space
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 60;
      const z = (Math.random() - 0.5) * 40;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Velocities
      this.velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.01
      });

      // Color selection
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Texture for Rounded Particles
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);
    
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      map: texture,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  onMouseMove(e) {
    // Normalize coordinates to -1 to +1
    this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  onScroll() {
    this.scroll.targetY = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    // Lerp mouse coordinates
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.08;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.08;

    // Lerp scroll coordinates
    this.scroll.y += (this.scroll.targetY - this.scroll.y) * 0.08;

    // Update positions based on velocities & mouse hover
    const positions = this.particles.geometry.attributes.position.array;
    
    for (let i = 0; i < this.particleCount; i++) {
      const idx = i * 3;
      
      // Basic drift
      positions[idx] += this.velocities[i].x;
      positions[idx + 1] += this.velocities[i].y;
      positions[idx + 2] += this.velocities[i].z;

      // Bound checks (keep particles in limits)
      if (Math.abs(positions[idx]) > 30) this.velocities[i].x *= -1;
      if (Math.abs(positions[idx + 1]) > 30) this.velocities[i].y *= -1;
      if (Math.abs(positions[idx + 2]) > 20) this.velocities[i].z *= -1;

      // Mouse repulsion (if desktop)
      if (window.matchMedia('(pointer: fine)').matches) {
        // Project mouse position to approximate scene coords
        const mouseWorldX = this.mouse.x * 25;
        const mouseWorldY = this.mouse.y * 15;

        const dx = positions[idx] - mouseWorldX;
        const dy = positions[idx + 1] - mouseWorldY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 8) {
          const force = (8 - dist) * 0.005;
          positions[idx] += (dx / dist) * force;
          positions[idx + 1] += (dy / dist) * force;
        }
      }
    }
    
    this.particles.geometry.attributes.position.needsUpdate = true;

    // Rotate particles subtly based on scroll
    this.particles.rotation.y = this.scroll.y * 0.4;
    this.particles.rotation.x = this.mouse.y * 0.15;
    this.particles.rotation.z = this.mouse.x * 0.15;

    this.renderer.render(this.scene, this.camera);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new InteractiveBackground();
});
