/* =========================================================
   ElmoTech — logo mark (2D SVG + real-time 3D via Three.js)
   Three.js is lazy-loaded only when a 3D logo is requested.
   ========================================================= */
(() => {
  const PATH = "M11.1717 -0.0342018C11.3186 -0.0353888 11.4656 -0.0365758 11.6169 -0.0377988C12.0955 -0.0407788 12.5741 -0.0418373 13.0527 -0.0421344C13.2969 -0.0423057 13.2969 -0.0423057 13.5461 -0.0424805C16.0463 -0.0396871 18.4704 0.0668744 20.9357 0.507866C21.1053 0.536007 21.2748 0.564148 21.4496 0.593142C26.2187 1.39117 30.7773 2.82637 34.5527 5.92325C34.6631 6.00746 34.7734 6.09166 34.8871 6.17842C37.7791 8.46039 39.426 12.1463 39.9131 15.7102C40.2323 18.5573 40.5243 22.5576 38.808 25.0463C37.8567 24.9432 36.9482 24.7819 36.0208 24.5492C35.8999 24.5205 35.779 24.4918 35.6544 24.4623C34.7645 24.2415 34.7645 24.2415 34.3825 23.8617C34.264 23.4104 34.1598 22.9637 34.0633 22.5079C33.1669 18.5594 30.7963 15.6859 27.4038 13.5386C27.3476 13.5386 27.2914 13.5386 27.2336 13.5386C27.3775 13.6471 27.5214 13.7555 27.6697 13.8672C30.2327 15.8055 32.7655 17.8155 33.3612 21.154C33.6427 24.5127 31.2928 27.5131 29.5859 30.2105C29.5017 30.3443 29.4174 30.4782 29.3306 30.6161C29.1538 30.8941 28.9722 31.169 28.7887 31.4427C28.3783 32.2336 28.5179 33.1722 28.7123 34.0156C29.0057 34.4602 29.2866 34.5309 29.7867 34.6925C29.8991 34.8042 30.0114 34.9159 30.1272 35.0309C30.0891 35.8977 29.5831 36.6627 29.1804 37.4107C29.1036 37.5542 29.0268 37.6976 28.9477 37.8454C28.3273 38.9889 27.6582 40.0685 26.8931 41.1232C26.7766 41.2853 26.6601 41.4474 26.5401 41.6144C21.8152 48.0325 15.2276 53.2679 7.14419 54.5642C6.46589 54.665 5.78729 54.7541 5.10589 54.8309C4.96129 54.8473 4.81669 54.8636 4.66759 54.8804C3.86719 54.9656 3.08219 55.0201 2.27609 55.0107C2.10189 55.0092 1.92769 55.0077 1.74819 55.0061C1.62049 55.0042 1.49279 55.0022 1.36119 55.0002C1.36119 54.1844 1.52429 54.0519 2.03139 53.4348C2.98239 52.2325 3.70409 50.9319 4.42499 49.5848C4.53229 49.3893 4.63959 49.1939 4.75019 48.9925C6.09259 46.4581 6.81819 43.7626 7.31869 40.954C7.35729 40.7455 7.39589 40.5369 7.43569 40.322C7.71259 38.5403 7.68329 36.7593 7.66159 34.961C7.65919 34.7539 7.65689 34.5468 7.65439 34.3335C7.64979 34.0523 7.64979 34.0523 7.64519 33.7654C7.65909 33.3386 7.65909 33.3386 7.82929 33.1694C8.10669 33.1488 8.38489 33.139 8.66309 33.1337C8.83789 33.1293 9.0128 33.1249 9.193 33.1203C9.3819 33.1156 9.57079 33.1108 9.76549 33.1059C12.554 33.0122 15.1206 32.6042 17.7927 31.8136C18.3825 31.6463 18.3825 31.6463 18.7229 31.6463C18.6306 31.3491 18.534 31.0532 18.4357 30.7579C18.3824 30.5929 18.329 30.428 18.2741 30.2581C17.8927 29.4801 17.3955 29.191 16.6019 28.8686C16.3807 28.7976 16.1585 28.7294 15.9357 28.6636C15.8168 28.6279 15.698 28.5922 15.5755 28.5555C13.1687 27.8644 10.6196 27.5324 8.33989 28.7694C6.72629 29.8447 5.84919 31.4801 5.44629 33.3386C5.32919 34.0038 5.26589 34.6505 5.25219 35.3245C5.24889 35.4634 5.24559 35.6024 5.24219 35.7455C5.23639 36.0333 5.23329 36.3211 5.23289 36.6089C5.22099 37.0019 5.20029 37.3567 5.10589 37.7386C4.73089 38.0672 4.73089 38.0672 4.25479 38.2463C4.10209 38.3116 3.94939 38.3768 3.79209 38.444C3.63579 38.5009 3.47959 38.5579 3.31869 38.6165C3.16239 38.6748 3.00619 38.733 2.84529 38.793C2.38259 38.9232 2.00929 38.9482 1.53139 38.9232C0.315695 36.6253 0.0759937 34.3091 0.105894 31.7627C0.107194 31.5791 0.107193 31.5791 0.108493 31.3918C0.123693 29.5158 0.217795 27.7169 0.680395 25.8925C0.717895 25.7384 0.755394 25.5844 0.794094 25.4257C1.96919 20.6848 3.72959 15.761 6.97819 12.0156C7.10759 11.8559 7.10759 11.8559 7.23949 11.693C7.48889 11.5079 7.48889 11.5079 7.86119 11.5607C7.96299 11.5991 8.0648 11.6375 8.16969 11.6771C8.2043 11.8924 8.20429 11.8924 8.23949 12.1121C8.98999 16.1777 11.565 18.5083 14.8324 20.7792C16.1304 21.6642 17.4589 22.3778 18.8931 23.0156C19.086 23.105 19.2789 23.1944 19.4776 23.2866C20.619 23.7983 21.7759 24.2124 22.9676 24.5915C23.1026 24.6346 23.2376 24.6777 23.3767 24.7222C24.152 24.961 24.895 25.1248 25.7016 25.2156C25.514 25.1047 25.3264 24.9939 25.1332 24.8797C22.4612 23.2878 19.9347 21.6324 17.7016 19.4617C17.5698 19.3391 17.4379 19.2165 17.302 19.0902C14.7802 16.6934 12.1996 13.3794 10.5527 10.3232C10.5527 10.0999 10.5527 9.87648 10.5527 9.64633C11.3953 9.64633 12.2378 9.64633 13.1059 9.64633C12.7682 8.86019 12.4303 8.07416 12.0921 7.28825C11.974 7.01371 11.8559 6.73915 11.7379 6.46457C10.6667 3.97359 10.6667 3.97359 9.54569 1.50449C9.32559 1.0245 9.19099 0.704373 9.19099 0.169404C9.85219 -0.0497263 10.4823 -0.0305585 11.1717 -0.0342018Z";
  const CDN = "https://cdn.jsdelivr.net/npm/three@0.147.0/";

  const svg = (cls = "") =>
    `<svg class="${cls}" viewBox="0 0 40 55" fill="none" aria-hidden="true"><path fill="currentColor" d="${PATH}"/></svg>`;

  let threeP;
  const loadScript = (src) =>
    new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = src; s.async = true; s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  const loadThree = () =>
    (threeP ||= (window.THREE ? Promise.resolve() : loadScript(CDN + "build/three.min.js"))
      .then(() => (THREE.SVGLoader ? null : loadScript(CDN + "examples/js/loaders/SVGLoader.js"))));

  const webgl = () => {
    try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch { return false; }
  };

  function glowTexture(T, inner, outer) {
    const c = document.createElement("canvas"); c.width = c.height = 256;
    const g = c.getContext("2d"), r = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    r.addColorStop(0, inner); r.addColorStop(0.35, outer); r.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = r; g.fillRect(0, 0, 256, 256);
    const t = new T.CanvasTexture(c); t.encoding = T.sRGBEncoding; return t;
  }

  async function create(canvas, opts = {}) {
    if (!webgl()) throw new Error("no-webgl");
    await loadThree();
    const T = THREE;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new T.Scene();
    const camera = new T.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 10);

    /* --- studio environment for reflections (no HDR file needed) --- */
    const pm = new T.PMREMGenerator(renderer);
    const env = new T.Scene();
    env.add(new T.Mesh(new T.BoxGeometry(24, 24, 24), new T.MeshBasicMaterial({ color: 0x050f24, side: T.BackSide })));
    const panel = (hex, k, pos, size) => {
      const m = new T.Mesh(new T.PlaneGeometry(size[0], size[1]), new T.MeshBasicMaterial({ color: new T.Color(hex).multiplyScalar(k), side: T.DoubleSide }));
      m.position.set(...pos); m.lookAt(0, 0, 0); env.add(m);
    };
    panel(0xffffff, 4, [0, 7, 6], [12, 3]);
    panel(0x36d6f5, 5, [-9, 0, 3], [3, 12]);
    panel(0x2f7bff, 6, [9, -1, 3], [3, 12]);
    panel(0xffffff, 1.4, [0, -7, -5], [14, 2]);
    panel(0x8fb6ff, 2, [0, 0, 10], [6, 6]);
    scene.environment = pm.fromScene(env, 0.04).texture;

    /* --- extruded logo --- */
    const data = new T.SVGLoader().parse(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 55"><path d="${PATH}"/></svg>`);
    const shapes = [];
    data.paths.forEach((p) => shapes.push(...T.SVGLoader.createShapes(p)));
    const geo = new T.ExtrudeGeometry(shapes, { depth: 7, bevelEnabled: true, bevelThickness: 1.5, bevelSize: 0.9, bevelSegments: 10, curveSegments: 40 });
    geo.center(); geo.rotateX(Math.PI); geo.scale(0.08, 0.08, 0.08);

    const cap = new T.MeshPhysicalMaterial({
      color: 0xbcd6ff, metalness: 1, roughness: 0.14, clearcoat: 1, clearcoatRoughness: 0.06,
      iridescence: 0.55, iridescenceIOR: 1.3, envMapIntensity: 1.5,
    });
    const side = new T.MeshPhysicalMaterial({
      color: 0x2f7bff, metalness: 0.85, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1,
      emissive: 0x0b2f8f, emissiveIntensity: 0.45, envMapIntensity: 1.3,
    });
    const mesh = new T.Mesh(geo, [cap, side]);

    /* --- halo: particle ring + orbit line + glow sprite --- */
    const N = 1400, pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const a = Math.random() * Math.PI * 2;
      const sparse = Math.random() < 0.22;
      const r = sparse ? 3.6 + Math.random() * 3.2 : 3.05 + (Math.random() - 0.5) * 0.7 * Math.random();
      pos[i * 3] = Math.cos(a) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * (sparse ? 4 : 0.18);
      pos[i * 3 + 2] = Math.sin(a) * r;
    }
    const pGeo = new T.BufferGeometry(); pGeo.setAttribute("position", new T.BufferAttribute(pos, 3));
    const pMat = new T.PointsMaterial({ size: 0.035, color: 0x8be9ff, transparent: true, opacity: 0.85, depthWrite: false, blending: T.AdditiveBlending });
    const ring = new T.Points(pGeo, pMat);
    const orbit = new T.Mesh(new T.TorusGeometry(3.05, 0.008, 8, 260), new T.MeshBasicMaterial({ color: 0x36d6f5, transparent: true, opacity: 0.45 }));
    orbit.rotation.x = Math.PI / 2;
    const halo = new T.Group(); halo.add(ring, orbit); halo.rotation.set(1.18, 0, 0.32);

    const glow = new T.Sprite(new T.SpriteMaterial({ map: glowTexture(T, "rgba(80,150,255,.9)", "rgba(47,123,255,.25)"), transparent: true, depthWrite: false, blending: T.AdditiveBlending, opacity: 0.75 }));
    glow.scale.set(9, 9, 1); glow.position.z = -2;

    /* --- lights --- */
    scene.add(new T.AmbientLight(0x335577, 0.35));
    const key = new T.DirectionalLight(0xffffff, 1.1); key.position.set(3, 4, 6); scene.add(key);
    const c1 = new T.PointLight(0x36d6f5, 2.4, 16), c2 = new T.PointLight(0x2f7bff, 3, 16);
    scene.add(c1, c2);

    /* --- hierarchy: root (layout) > spin (intro/scroll) > tilt (pointer) > mesh --- */
    const root = new T.Group(), spin = new T.Group(), tilt = new T.Group();
    tilt.add(mesh); spin.add(tilt); root.add(glow, halo, spin); scene.add(root);
    root.scale.setScalar(0.001);

    const state = { intro: -Math.PI * 2.4, scroll: 0, extra: 0, vel: 0, haloOpacity: 0 };
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e) => { mouse.tx = (e.clientX / innerWidth) * 2 - 1; mouse.ty = (e.clientY / innerHeight) * 2 - 1; };
    addEventListener("pointermove", onMove);
    const onDown = () => (state.vel += 0.22);
    canvas.addEventListener("pointerdown", onDown);

    /* --- size --- */
    const resize = () => {
      const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
      renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize); ro.observe(canvas); resize();

    /* --- loop (paused off-screen) --- */
    let visible = true, raf = 0, t = 0, alive = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !raf) tick(); });
    io.observe(canvas);
    const clock = new T.Clock();
    function tick() {
      raf = 0;
      if (!alive || !visible) return;
      const dt = Math.min(clock.getDelta(), 0.05); t += dt;
      mouse.x += (mouse.tx - mouse.x) * 0.06; mouse.y += (mouse.ty - mouse.y) * 0.06;
      state.extra += state.vel; state.vel *= 0.95;
      spin.rotation.y = state.intro + state.scroll + state.extra;
      tilt.rotation.y = mouse.x * 0.55 + (reduce ? 0 : Math.sin(t * 0.6) * 0.18);
      tilt.rotation.x = mouse.y * 0.32;
      tilt.position.y = reduce ? 0 : Math.sin(t * 1.1) * 0.09;
      halo.rotation.y += dt * 0.12;
      pMat.opacity = 0.85 * state.haloOpacity; orbit.material.opacity = 0.45 * state.haloOpacity; glow.material.opacity = 0.75 * state.haloOpacity;
      c1.position.set(Math.cos(t * 0.7) * 5, 2, Math.sin(t * 0.7) * 5 + 2);
      c2.position.set(Math.cos(t * 0.5 + 3) * 5, -2, Math.sin(t * 0.5 + 3) * 5 + 2);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    }
    tick();

    const visibleSize = () => {
      const h = 2 * camera.position.z * Math.tan(T.MathUtils.degToRad(camera.fov / 2));
      return { w: h * camera.aspect, h };
    };

    return {
      visibleSize,
      /** place logo: x/y in world units, s = scale */
      setLayout({ x = 0, y = 0, s = 1 }, dur = 0) {
        if (!dur || !window.gsap) { root.position.set(x, y, 0); root.scale.setScalar(s); return; }
        gsap.to(root.position, { x, y, duration: dur, ease: "expo.inOut" });
        gsap.to(root.scale, { x: s, y: s, z: s, duration: dur, ease: "expo.inOut" });
      },
      intro({ s = 1, x = 0, y = 0, dur = 2.2 } = {}) {
        root.position.set(x, y, 0);
        if (!window.gsap || reduce) { root.scale.setScalar(s); state.intro = 0; state.haloOpacity = 1; return; }
        gsap.fromTo(root.scale, { x: 0.001, y: 0.001, z: 0.001 }, { x: s, y: s, z: s, duration: dur * 0.8, ease: "back.out(1.4)" });
        gsap.fromTo(state, { intro: -Math.PI * 2.4 }, { intro: 0, duration: dur, ease: "expo.out" });
        gsap.fromTo(state, { haloOpacity: 0 }, { haloOpacity: 1, duration: dur, delay: dur * 0.3, ease: "power2.out" });
        gsap.fromTo(halo.scale, { x: 0.4, y: 0.4, z: 0.4 }, { x: 1, y: 1, z: 1, duration: dur * 1.1, ease: "expo.out" });
      },
      /** p: 0..1 as the host section scrolls away */
      setScroll(p) { state.scroll = p * Math.PI * 1.4; root.position.z = -p * 5; },
      spinBoost(v = 0.35) { state.vel += v; },
      dispose() {
        alive = false; cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
        removeEventListener("pointermove", onMove); canvas.removeEventListener("pointerdown", onDown);
        renderer.dispose(); renderer.forceContextLoss && renderer.forceContextLoss();
      },
    };
  }

  window.ELMO_LOGO = { path: PATH, svg, create, preload: loadThree, supported: webgl };
})();
