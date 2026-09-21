(function () {
  'use strict';

  // Safety: Guarantee loader is dismissed quickly
  const dismissLoader = () => {
    const loaderEl = document.getElementById('loader');
    if (loaderEl && !loaderEl.classList.contains('hidden')) {
      loaderEl.classList.add('hidden');
    }
  };
  setTimeout(dismissLoader, 600);

  // ==========================================
  // 1. FLAVORS CONFIGURATION
  // ==========================================
  const FLAVORS = [
    {
      name: 'DOUBLE LITCHI',
      sub: 'EXOTIC ENERGY BLEND',
      color1: '#4A0E8F',
      color2: '#D91E8A',
      color3: '#180B2B',
      accent: '#FF33B8',
      tags: ['4g SUCRE DE CANNE', 'SANS TAURINE', '80mg CAFÉINE NATURELLE', '100% VÉGÉTAL']
    },
    {
      name: 'COCO CITRON VERT',
      sub: 'TROPICAL ELECTROLYTES',
      color1: '#015B52',
      color2: '#00E599',
      color3: '#041E1C',
      accent: '#00FFA3',
      tags: ['EAU DE COCO', 'CITRON VERT BIO', 'VITAMINES B & C', '4g SUCRE']
    },
    {
      name: 'KIWI CONCOMBRE',
      sub: 'ULTRA REFRESH MATRIX',
      color1: '#12632A',
      color2: '#30E660',
      color3: '#05210D',
      accent: '#39FF14',
      tags: ['ARÔMES NATURELS', 'SUPER REFRESH', 'ZÉRO COLORANT', 'BIO CERTIFIED']
    },
    {
      name: 'PÊCHE BLANCHE',
      sub: 'VELVET WHITE PEACH',
      color1: '#8A2D04',
      color2: '#FFA224',
      color3: '#260B02',
      accent: '#FFC83B',
      tags: ['EXTRAIT DE THÉ', 'GOÛT SUBTIL', 'ANTIOXYDANTS', 'FRUITS FRAIS']
    },
    {
      name: 'POMME RHUBARBE',
      sub: 'CRIMSON BERRY PUNCH',
      color1: '#6E081F',
      color2: '#FF2453',
      color3: '#210208',
      accent: '#FF4D79',
      tags: ['PUR JUS DE POMME', 'RHUBARBE ACIDULÉE', 'ÉNERGIE NATURELLE', 'SANS COLORANT']
    },
    {
      name: 'ABRICOT FRAMBOISE',
      sub: 'SUNSET CITRUS FUSION',
      color1: '#851249',
      color2: '#FF6326',
      color3: '#250412',
      accent: '#FF7B39',
      tags: ['DOUCEUR ABRICOT', 'ÉCLAT FRAMBOISE', 'SOURCE NATURELLE', '4g SUCRE']
    }
  ];

  // ==========================================
  // 2. ULTRA-HD PROCEDURAL CAN LABEL & TEXTURE
  // ==========================================
  function createUltraHDLabel(flavor) {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d');

    // 1. Base Rich Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 2048, 2048);
    bgGrad.addColorStop(0, flavor.color1);
    bgGrad.addColorStop(0.45, flavor.color2);
    bgGrad.addColorStop(0.85, flavor.color1);
    bgGrad.addColorStop(1, flavor.color3);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 2048, 2048);

    // 2. Fine brushed aluminum texture streaks
    ctx.fillStyle = 'rgba(255, 255, 255, 0.035)';
    for (let i = 0; i < 240; i++) {
      const y = Math.random() * 2048;
      const h = 1 + Math.random() * 3;
      ctx.fillRect(0, y, 2048, h);
    }
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    for (let i = 0; i < 180; i++) {
      const y = Math.random() * 2048;
      const h = 1 + Math.random() * 3;
      ctx.fillRect(0, y, 2048, h);
    }

    // 3. Cybernetic grid / micro geometric accents
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 2;
    for (let x = 80; x < 2048; x += 160) {
      ctx.beginPath();
      ctx.moveTo(x, 150);
      ctx.lineTo(x, 1900);
      ctx.stroke();
    }

    // Top Brand Badge
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.fillRect(200, 180, 1648, 60);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.strokeRect(200, 180, 1648, 60);

    ctx.font = '700 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.letterSpacing = '8px';
    ctx.fillText('★ 100% CLEAN ENERGY • SANS TAURINE • 250ML ★', 1024, 210);
    ctx.restore();

    // 4. Large Vertical "CIAO" Typography (Iconic Italic Stencil Chrome Look)
    ctx.save();
    ctx.translate(1024, 1024);
    ctx.rotate(-Math.PI / 2);

    // Deep drop shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
    ctx.shadowBlur = 45;
    ctx.shadowOffsetX = 16;
    ctx.shadowOffsetY = 16;

    // Outer Neon Glow
    ctx.lineWidth = 32;
    ctx.strokeStyle = flavor.accent;
    ctx.font = 'italic 900 360px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeText('CIAO', 0, -20);

    // Chrome Metallic Gradient Fill
    const chromeGrad = ctx.createLinearGradient(-500, -150, 500, 150);
    chromeGrad.addColorStop(0, '#ffffff');
    chromeGrad.addColorStop(0.25, '#eaeaea');
    chromeGrad.addColorStop(0.48, '#a8a8a8');
    chromeGrad.addColorStop(0.52, '#fcfcfc');
    chromeGrad.addColorStop(0.75, '#e0e0e0');
    chromeGrad.addColorStop(1, '#ffffff');
    ctx.fillStyle = chromeGrad;
    ctx.fillText('CIAO', 0, -20);

    // Inner bright specular highlight stroke
    ctx.shadowColor = 'transparent';
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#ffffff';
    ctx.strokeText('CIAO', 0, -20);

    // "ENERGY" subtext in bold modern geometric font
    ctx.font = '900 85px sans-serif';
    ctx.letterSpacing = '24px';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0,0,0,0.7)';
    ctx.shadowBlur = 20;
    ctx.fillText('ENERGY', 0, 200);

    ctx.restore();

    // 5. Flavor Pill Banner at bottom
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
    ctx.fillRect(160, 1720, 1728, 180);
    ctx.strokeStyle = flavor.accent;
    ctx.lineWidth = 4;
    ctx.strokeRect(160, 1720, 1728, 180);

    // Flavor Main Title
    ctx.font = '900 64px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.letterSpacing = '6px';
    ctx.fillText(flavor.name, 1024, 1800);

    // Flavor Subtitle
    ctx.font = '600 32px sans-serif';
    ctx.fillStyle = flavor.accent;
    ctx.letterSpacing = '8px';
    ctx.fillText(flavor.sub, 1024, 1860);
    ctx.restore();

    // 6. Condensation Dew Droplets (hyper-realistic water droplets on cold aluminum)
    ctx.save();
    for (let i = 0; i < 90; i++) {
      const x = Math.random() * 2048;
      const y = Math.random() * 2048;
      const r = 3 + Math.random() * 9;

      // Shadow below droplet
      ctx.beginPath();
      ctx.arc(x + 2, y + 2, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
      ctx.fill();

      // Translucent droplet body
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.fill();

      // Sharp specular highlight point
      ctx.beginPath();
      ctx.arc(x - r * 0.3, y - r * 0.3, r * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.fill();
    }
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16;
    texture.needsUpdate = true;
    return texture;
  }

  // ==========================================
  // 3. AUDIO SYSTEM (WEB AUDIO + SFX)
  // ==========================================
  class SoundManager {
    constructor() {
      this.ctx = null;
      this.isMuted = false;
      this.sfxSwoosh = document.getElementById('sfx-swoosh');
      this.sfxClick = document.getElementById('sfx-click');
      this.unlocked = false;

      const unlock = () => {
        if (this.unlocked) return;
        this.init();
        this.unlocked = true;
        window.removeEventListener('pointerdown', unlock);
        window.removeEventListener('keydown', unlock);
      };
      window.addEventListener('pointerdown', unlock);
      window.addEventListener('keydown', unlock);
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.ctx = new AudioContext();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playSwoosh() {
      if (this.isMuted) return;
      if (this.sfxSwoosh && this.sfxSwoosh.readyState >= 2) {
        this.sfxSwoosh.currentTime = 0;
        this.sfxSwoosh.volume = 0.4;
        this.sfxSwoosh.play().catch(() => this.synthSwoosh());
      } else {
        this.synthSwoosh();
      }
    }

    playClick() {
      if (this.isMuted) return;
      if (this.sfxClick && this.sfxClick.readyState >= 2) {
        this.sfxClick.currentTime = 0;
        this.sfxClick.volume = 0.5;
        this.sfxClick.play().catch(() => this.synthClick());
      } else {
        this.synthClick();
      }
    }

    synthSwoosh() {
      if (this.isMuted || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(70, this.ctx.currentTime + 0.22);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.22);
      } catch (e) {}
    }

    synthClick() {
      if (this.isMuted || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(750, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {}
    }

    toggleMute() {
      this.isMuted = !this.isMuted;
      return this.isMuted;
    }
  }

  const sound = new SoundManager();

  // ==========================================
  // 4. THREE.JS SCENE SETUP & STUDIO ENVIRONMENT
  // ==========================================
  const canvas = document.getElementById('webgl-canvas');
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(23, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 11.5);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  if (THREE.ACESFilmicToneMapping) {
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
  }

  // Create High-End Studio Softbox Environment Map
  function createStudioEnvironment() {
    const envScene = new THREE.Scene();

    // Soft top light
    const topGeo = new THREE.PlaneGeometry(12, 12);
    const topMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const topMesh = new THREE.Mesh(topGeo, topMat);
    topMesh.position.set(0, 8, 0);
    topMesh.rotation.x = Math.PI / 2;
    envScene.add(topMesh);

    // Left vertical softbox strip (sharp metallic streak along left side of can)
    const leftGeo = new THREE.PlaneGeometry(1.8, 14);
    const leftMat = new THREE.MeshBasicMaterial({ color: 0xf4f7ff });
    const leftMesh = new THREE.Mesh(leftGeo, leftMat);
    leftMesh.position.set(-6, 0, 3);
    leftMesh.rotation.y = Math.PI / 3;
    envScene.add(leftMesh);

    // Right vertical softbox strip (warm metallic streak along right side)
    const rightGeo = new THREE.PlaneGeometry(1.4, 14);
    const rightMat = new THREE.MeshBasicMaterial({ color: 0xfff3e8 });
    const rightMesh = new THREE.Mesh(rightGeo, rightMat);
    rightMesh.position.set(6, 0, 3);
    rightMesh.rotation.y = -Math.PI / 3;
    envScene.add(rightMesh);

    // Back rim light
    const backGeo = new THREE.PlaneGeometry(8, 8);
    const backMat = new THREE.MeshBasicMaterial({ color: 0x90b0ff });
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.position.set(0, 3, -7);
    envScene.add(backMesh);

    if (THREE.PMREMGenerator) {
      const pmrem = new THREE.PMREMGenerator(renderer);
      pmrem.compileEquirectangularShader();
      const rt = pmrem.fromScene(envScene);
      pmrem.dispose();
      return rt.texture;
    }
    return null;
  }

  const studioEnv = createStudioEnvironment();
  if (studioEnv) {
    scene.environment = studioEnv;
  }

  // Lights
  const ambient = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambient);

  const topSpot = new THREE.SpotLight(0xffffff, 6, 22, Math.PI / 4, 0.4, 0.2);
  topSpot.position.set(0, 5.5, 2.5);
  topSpot.target.position.set(0, 0, 0);
  scene.add(topSpot);
  scene.add(topSpot.target);

  const bottomSpot = new THREE.SpotLight(0xffffff, 4, 16, Math.PI / 3.5, 0.4, 0.2);
  bottomSpot.position.set(0, -4.5, 2);
  bottomSpot.target.position.set(0, -0.5, 0);
  scene.add(bottomSpot);
  scene.add(bottomSpot.target);

  const flavorLight = new THREE.PointLight(FLAVORS[0].color1, 5, 14);
  flavorLight.position.set(0, 0, 3.5);
  scene.add(flavorLight);

  const rimLight = new THREE.DirectionalLight(0xffffff, 2.2);
  rimLight.position.set(0, 2, -4);
  scene.add(rimLight);

  // Sparkling Energy Particles
  const pCount = 140;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount * 3; i += 3) {
    pPos[i] = (Math.random() - 0.5) * 9;
    pPos[i + 1] = (Math.random() - 0.5) * 6.5;
    pPos[i + 2] = (Math.random() - 0.5) * 4.5;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.04,
    transparent: true,
    opacity: 0.65
  });
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  // ==========================================
  // 5. HYPER-REALISTIC CAN & UFO GEOMETRY
  // ==========================================
  const CAN_SPACING = 3.6;
  const cans = [];
  let baseModel = null;
  let currentIndex = 0;
  let carouselTarget = 0;
  let carouselPosition = 0;
  let isDragging = false;
  let startX = 0;
  let startPos = 0;
  let velocity = 0;
  let lastPointerX = 0;
  let mouseParallax = { x: 0, y: 0, targetX: 0, targetY: 0 };

  // Master Aluminum Material (Realistic Rolled Aluminum Rim)
  const masterAluminumMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xd8d8d8,
    metalness: 0.98,
    roughness: 0.12,
    clearcoat: 1.0,
    clearcoatRoughness: 0.08,
    reflectivity: 1.0
  });

  // Create High-Fidelity 3D Energy Drink Can
  function createHyperRealisticCan(labelMaterial) {
    const group = new THREE.Group();

    // 1. Central cylindrical body with label
    const bodyGeo = new THREE.CylinderGeometry(0.72, 0.72, 2.22, 128, 1, true);
    const bodyMesh = new THREE.Mesh(bodyGeo, labelMaterial);
    bodyMesh.name = 'Shell';
    group.add(bodyMesh);

    // 2. Tapered upper neck shoulder (curves inward toward top rim)
    const neckGeo = new THREE.CylinderGeometry(0.66, 0.72, 0.16, 128);
    const neckMesh = new THREE.Mesh(neckGeo, masterAluminumMaterial);
    neckMesh.position.y = 1.19;
    group.add(neckMesh);

    // 3. Iconic rolled top aluminum rim lip
    const topRimGeo = new THREE.TorusGeometry(0.675, 0.042, 20, 128);
    topRimGeo.rotateX(Math.PI / 2);
    const topRim = new THREE.Mesh(topRimGeo, masterAluminumMaterial);
    topRim.position.y = 1.27;
    group.add(topRim);

    // 4. Recessed lid
    const lidGeo = new THREE.CylinderGeometry(0.645, 0.645, 0.03, 128);
    const lid = new THREE.Mesh(lidGeo, masterAluminumMaterial);
    lid.position.y = 1.25;
    group.add(lid);

    // 5. Aluminum Pull Tab with cutout rivet
    const tabGroup = new THREE.Group();
    const tabPlateGeo = new THREE.BoxGeometry(0.22, 0.022, 0.38);
    const tabPlate = new THREE.Mesh(tabPlateGeo, masterAluminumMaterial);
    tabGroup.add(tabPlate);

    // Tab ring hole
    const tabRingGeo = new THREE.TorusGeometry(0.065, 0.02, 12, 32);
    tabRingGeo.rotateX(Math.PI / 2);
    const tabRing = new THREE.Mesh(tabRingGeo, masterAluminumMaterial);
    tabRing.position.set(0, 0.01, 0.1);
    tabGroup.add(tabRing);

    tabGroup.position.set(0, 1.275, 0.12);
    tabGroup.rotation.x = 0.05;
    group.add(tabGroup);

    // 6. Lower tapered base (curves inward toward bottom)
    const bottomTaperGeo = new THREE.CylinderGeometry(0.72, 0.62, 0.22, 128);
    const bottomTaper = new THREE.Mesh(bottomTaperGeo, masterAluminumMaterial);
    bottomTaper.position.y = -1.22;
    group.add(bottomTaper);

    // 7. Bottom Rim Lip
    const bottomLipGeo = new THREE.TorusGeometry(0.62, 0.038, 20, 128);
    bottomLipGeo.rotateX(Math.PI / 2);
    const bottomLip = new THREE.Mesh(bottomLipGeo, masterAluminumMaterial);
    bottomLip.position.y = -1.33;
    group.add(bottomLip);

    // 8. Concave Bottom Dome (recessed inside the base)
    const domeGeo = new THREE.SphereGeometry(0.58, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45);
    domeGeo.rotateX(Math.PI);
    const dome = new THREE.Mesh(domeGeo, masterAluminumMaterial);
    dome.position.y = -1.24;
    group.add(dome);

    return group;
  }

  // Create High-Tech UFO Saucer Emitter & Glowing Pedestal Base
  function createHyperRealisticBase() {
    const group = new THREE.Group();

    const saucerMetalMat = new THREE.MeshPhysicalMaterial({
      color: 0x9e9e9e,
      metalness: 0.95,
      roughness: 0.15,
      clearcoat: 1.0
    });

    const neonRingMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95
    });

    // Top UFO Saucer Emitter
    const topDiscGeo = new THREE.CylinderGeometry(1.7, 0.35, 0.32, 64);
    const topDisc = new THREE.Mesh(topDiscGeo, saucerMetalMat);
    topDisc.position.y = 2.45;
    group.add(topDisc);

    // Upper Concentric Neon Glow Rings
    const neonRing1 = new THREE.Mesh(new THREE.TorusGeometry(1.42, 0.038, 16, 64), neonRingMat);
    neonRing1.rotateX(Math.PI / 2);
    neonRing1.position.y = 2.38;
    group.add(neonRing1);

    const neonRing2 = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.028, 16, 64), neonRingMat);
    neonRing2.rotateX(Math.PI / 2);
    neonRing2.position.y = 2.42;
    group.add(neonRing2);

    // Lower Pedestal Platform
    const bottomPlatformGeo = new THREE.CylinderGeometry(1.55, 1.85, 0.28, 64);
    const bottomPlatform = new THREE.Mesh(bottomPlatformGeo, saucerMetalMat);
    bottomPlatform.position.y = -2.25;
    group.add(bottomPlatform);

    // Lower Glowing Energy Rings
    const botRing1 = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.038, 16, 64), neonRingMat);
    botRing1.rotateX(Math.PI / 2);
    botRing1.position.y = -2.11;
    group.add(botRing1);

    const botRing2 = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.028, 16, 64), neonRingMat);
    botRing2.rotateX(Math.PI / 2);
    botRing2.position.y = -2.11;
    group.add(botRing2);

    // Soft Volumetric Light Beam Cylinder connecting Top & Bottom
    const beamGeo = new THREE.CylinderGeometry(1.35, 1.45, 4.4, 48, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.04,
      side: THREE.DoubleSide
    });
    const beamMesh = new THREE.Mesh(beamGeo, beamMat);
    beamMesh.position.y = 0.1;
    group.add(beamMesh);

    return group;
  }

  // Setup Scene Content
  function initContent() {
    const isHttp = window.location.protocol.startsWith('http');
    const texLoader = isHttp ? new THREE.TextureLoader() : null;

    // Build 6 cans with the Ultra-HD procedural label
    FLAVORS.forEach((flavor, i) => {
      const ultraHDTex = createUltraHDLabel(flavor);

      // High-End Physical Label Material with Clearcoat Gloss
      const labelMaterial = new THREE.MeshPhysicalMaterial({
        map: ultraHDTex,
        metalness: 0.88,
        roughness: 0.16,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        reflectivity: 1.0
      });

      const can = createHyperRealisticCan(labelMaterial);
      can.userData = { flavorIndex: i, shellMaterial: labelMaterial };
      scene.add(can);
      cans.push(can);

      // If running on HTTP server, upgrade to photo texture
      if (texLoader) {
        texLoader.load(
          flavor.texture,
          (loadedTex) => {
            loadedTex.wrapS = THREE.RepeatWrapping;
            loadedTex.wrapT = THREE.ClampToEdgeWrapping;
            labelMaterial.map = loadedTex;
            labelMaterial.needsUpdate = true;
          },
          undefined,
          () => {}
        );
      }
    });

    // Add Base UFO Saucer & Pedestal
    baseModel = createHyperRealisticBase();
    scene.add(baseModel);

    buildUI();
    updateFlavorHUD(0, false);
    dismissLoader();
  }

  // ==========================================
  // 6. UI & HUD SYNCHRONIZATION
  // ==========================================
  const flavorNameEl = document.getElementById('flavor-name');
  const flavorDotsContainer = document.getElementById('flavor-dots');
  const progressThumb = document.getElementById('progress-thumb');

  function buildUI() {
    flavorDotsContainer.innerHTML = '';
    FLAVORS.forEach((f, idx) => {
      const dot = document.createElement('div');
      dot.className = `flavor-dot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        goToIndex(idx);
      });
      flavorDotsContainer.appendChild(dot);
    });

    document.getElementById('arrow-prev').addEventListener('click', () => {
      goToIndex(currentIndex - 1);
      sound.playClick();
    });

    document.getElementById('arrow-next').addEventListener('click', () => {
      goToIndex(currentIndex + 1);
      sound.playClick();
    });

    document.getElementById('btn-action').addEventListener('click', () => {
      sound.playClick();
      alert(`Ajouté au panier: ${FLAVORS[currentIndex].name}`);
    });

    document.getElementById('btn-menu').addEventListener('click', () => {
      sound.playClick();
    });

    document.getElementById('progress-track').addEventListener('click', (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      const targetIdx = Math.round(ratio * (FLAVORS.length - 1));
      goToIndex(targetIdx);
    });
  }

  function updateFlavorHUD(index, playSound = true) {
    const flavor = FLAVORS[index];
    if (!flavor) return;

    if (playSound) {
      sound.playSwoosh();
    }

    document.documentElement.style.setProperty('--tint1', flavor.color1);
    document.documentElement.style.setProperty('--tint2', flavor.color2);

    if (window.gsap) {
      gsap.to(flavorLight.color, {
        r: new THREE.Color(flavor.accent || flavor.color1).r,
        g: new THREE.Color(flavor.accent || flavor.color1).g,
        b: new THREE.Color(flavor.accent || flavor.color1).b,
        duration: 0.8
      });

      gsap.to(flavorNameEl, {
        opacity: 0,
        y: -15,
        duration: 0.2,
        onComplete: () => {
          flavorNameEl.textContent = flavor.name;
          gsap.to(flavorNameEl, {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: 'power2.out'
          });
        }
      });
    } else {
      flavorNameEl.textContent = flavor.name;
      flavorLight.color.set(flavor.accent || flavor.color1);
    }

    const tagsContainer = document.querySelector('.flavor-tags');
    if (tagsContainer && flavor.tags) {
      tagsContainer.innerHTML = flavor.tags
        .map((tag) => `<span class="tag-badge">${tag}</span>`)
        .join('');
    }

    const dots = document.querySelectorAll('.flavor-dot');
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });

    if (progressThumb) {
      const percent = (index / (FLAVORS.length - 1)) * (100 - 16.666);
      progressThumb.style.left = `${percent}%`;
    }
  }

  function goToIndex(idx) {
    const normalizedIndex = ((idx % FLAVORS.length) + FLAVORS.length) % FLAVORS.length;
    carouselTarget = normalizedIndex;
  }

  // ==========================================
  // 7. INTERACTION LISTENERS (DRAG, SWIPE, RAYCAST)
  // ==========================================
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onPointerDown(e) {
    isDragging = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    startPos = carouselPosition;
    lastPointerX = startX;
    velocity = 0;
  }

  function onPointerMove(e) {
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const currentY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    mouseParallax.targetX = (currentX / window.innerWidth - 0.5) * 0.8;
    mouseParallax.targetY = (currentY / window.innerHeight - 0.5) * 0.5;

    if (!isDragging) return;

    const diffX = currentX - lastPointerX;
    lastPointerX = currentX;
    velocity = diffX * 0.005;

    const totalDelta = (currentX - startX) / (window.innerWidth * 0.35);
    carouselPosition = startPos - totalDelta;
    carouselTarget = carouselPosition;
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;

    const finalPos = carouselPosition - velocity * 15;
    const closestIdx = Math.round(finalPos);
    goToIndex(closestIdx);
  }

  function onCanvasClick(e) {
    if (Math.abs(lastPointerX - startX) > 8) return;

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(cans, true);

    if (intersects.length > 0) {
      let topGroup = intersects[0].object;
      while (topGroup.parent && topGroup.parent !== scene) {
        topGroup = topGroup.parent;
      }
      if (topGroup.userData && topGroup.userData.flavorIndex !== undefined) {
        goToIndex(topGroup.userData.flavorIndex);
        sound.playClick();
      }
    }
  }

  let wheelTimeout = null;
  function onWheel(e) {
    e.preventDefault();
    if (wheelTimeout) return;

    if (e.deltaY > 20 || e.deltaX > 20) {
      goToIndex(currentIndex + 1);
    } else if (e.deltaY < -20 || e.deltaX < -20) {
      goToIndex(currentIndex - 1);
    }

    wheelTimeout = setTimeout(() => {
      wheelTimeout = null;
    }, 280);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      goToIndex(currentIndex - 1);
      sound.playClick();
    } else if (e.key === 'ArrowRight') {
      goToIndex(currentIndex + 1);
      sound.playClick();
    }
  });

  canvas.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);
  canvas.addEventListener('click', onCanvasClick);

  canvas.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp, { passive: true });
  canvas.addEventListener('wheel', onWheel, { passive: false });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // ==========================================
  // 8. ANIMATION LOOP & PHYSICS
  // ==========================================
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    carouselPosition += (carouselTarget - carouselPosition) * 0.085;

    const snappedIndex = ((Math.round(carouselPosition) % FLAVORS.length) + FLAVORS.length) % FLAVORS.length;
    if (snappedIndex !== currentIndex) {
      currentIndex = snappedIndex;
      updateFlavorHUD(currentIndex, true);
    }

    mouseParallax.x += (mouseParallax.targetX - mouseParallax.x) * 0.05;
    mouseParallax.y += (mouseParallax.targetY - mouseParallax.y) * 0.05;

    camera.position.x = mouseParallax.x * 0.8;
    camera.position.y = -mouseParallax.y * 0.5;
    camera.lookAt(0, 0, 0);

    // Position cans along the 3D horizontal curve
    cans.forEach((can, i) => {
      let offset = i - carouselPosition;
      const total = FLAVORS.length;
      while (offset > total / 2) offset -= total;
      while (offset < -total / 2) offset += total;

      can.position.x = offset * CAN_SPACING;

      const dist = Math.abs(offset);
      can.position.z = -Math.pow(dist, 1.4) * 0.85;

      const levitation = Math.sin(elapsedTime * 2.2 + i * 0.6) * 0.12;
      can.position.y = levitation;

      can.rotation.z = -offset * 0.12 + Math.sin(elapsedTime * 1.5 + i) * 0.02;
      can.rotation.x = mouseParallax.y * 0.3;
      can.rotation.y = elapsedTime * 0.5 + offset * 0.3;

      const scale = Math.max(0.75, 1 - dist * 0.12);
      can.scale.set(scale, scale, scale);
    });

    if (baseModel) {
      baseModel.rotation.y = elapsedTime * 0.2;
      baseModel.position.y = Math.sin(elapsedTime * 1.8) * 0.04;
    }

    if (particles) {
      particles.rotation.y = elapsedTime * 0.05;
    }

    renderer.render(scene, camera);
  }

  // Launch Experience
  initContent();
  animate();
})();
