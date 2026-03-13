(function () {
  const el = {
    viewer: document.querySelector("#viewer"),
    text: document.querySelector("#textInput"),
    size: document.querySelector("#sizeInput"),
    depth: document.querySelector("#depthInput"),
    shine: document.querySelector("#shineInput"),
    shadow: document.querySelector("#shadowInput"),
    detail: document.querySelector("#detailInput"),
    apply: document.querySelector("#applyTextBtn"),
    reset: document.querySelector("#resetBtn")
  };

  const defaults = {
    text: "A",
    size: 118,
    depth: 7,
    shine: 72,
    shadow: 44,
    detail: 6
  };

  const state = {
    text: defaults.text,
    size: defaults.size,
    depth: defaults.depth,
    shine: defaults.shine,
    shadow: defaults.shadow,
    detail: defaults.detail,
    rotX: -0.2,
    rotY: -0.55,
    zoom: 1,
    drag: false,
    lastX: 0,
    lastY: 0
  };

  const ctx = el.viewer.getContext("2d", { alpha: true });
  const off = document.createElement("canvas");
  const offCtx = off.getContext("2d", { willReadFrequently: true });

  const model = {
    faces: [],
    bounds: { minX: -1, maxX: 1, minY: -1, maxY: 1, minZ: -1, maxZ: 1 }
  };
  let renderQueued = false;

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function resizeCanvas() {
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const w = Math.max(700, el.viewer.clientWidth);
    const h = Math.max(320, el.viewer.clientHeight || 420);
    el.viewer.width = Math.round(w * dpr);
    el.viewer.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function colorFor(faceType, light) {
    const l = clamp(light, 0, 1);
    const shineBoost = state.shine / 100;

    if (faceType === "front") {
      const r = Math.round(175 + l * 72 + shineBoost * 8);
      const g = Math.round(122 + l * 80 + shineBoost * 12);
      const b = Math.round(30 + l * 38 + shineBoost * 4);
      return `rgb(${clamp(r, 0, 255)}, ${clamp(g, 0, 255)}, ${clamp(b, 0, 255)})`;
    }

    if (faceType === "back") {
      const r = Math.round(95 + l * 36);
      const g = Math.round(62 + l * 26);
      const b = Math.round(16 + l * 12);
      return `rgb(${clamp(r, 0, 255)}, ${clamp(g, 0, 255)}, ${clamp(b, 0, 255)})`;
    }

    const r = Math.round(132 + l * 50);
    const g = Math.round(88 + l * 44);
    const b = Math.round(21 + l * 19);
    return `rgb(${clamp(r, 0, 255)}, ${clamp(g, 0, 255)}, ${clamp(b, 0, 255)})`;
  }

  function buildTextModel() {
    const text = (state.text || "").trim() || defaults.text;
    const detail = state.detail;
    const extrude = Math.max(2, Math.round(state.depth));

    // Keep source raster moderate to avoid huge voxel grids on long titles.
    off.width = 1500;
    off.height = 430;
    offCtx.clearRect(0, 0, off.width, off.height);
    offCtx.fillStyle = "#000";
    offCtx.textAlign = "left";
    offCtx.textBaseline = "middle";
    offCtx.font = `700 ${Math.round(state.size * 1.95)}px Georgia, Times New Roman, serif`;
    offCtx.fillText(text, 50, off.height / 2 + 6);

    const image = offCtx.getImageData(0, 0, off.width, off.height).data;
    const gw = Math.floor(off.width / detail);
    const gh = Math.floor(off.height / detail);
    const grid = new Uint8Array(gw * gh);

    let minX = gw;
    let maxX = 0;
    let minY = gh;
    let maxY = 0;

    for (let gy = 0; gy < gh; gy++) {
      for (let gx = 0; gx < gw; gx++) {
        const px = Math.floor(gx * detail + detail * 0.5);
        const py = Math.floor(gy * detail + detail * 0.5);
        const idx = (py * off.width + px) * 4 + 3;
        if (image[idx] > 90) {
          const gi = gy * gw + gx;
          grid[gi] = 1;
          if (gx < minX) minX = gx;
          if (gx > maxX) maxX = gx;
          if (gy < minY) minY = gy;
          if (gy > maxY) maxY = gy;
        }
      }
    }

    if (minX > maxX || minY > maxY) {
      model.faces = [];
      return;
    }

    const voxelW = 1;
    const voxelH = 1;
    const voxelD = 1;

    const textW = maxX - minX + 1;
    const textH = maxY - minY + 1;

    const originX = -textW * 0.5;
    const originY = textH * 0.5;
    const originZ = -extrude * 0.5;

    const isSolid2D = (x, y) => {
      if (x < minX || x > maxX || y < minY || y > maxY) return false;
      return grid[y * gw + x] === 1;
    };

    const faces = [];

    function addFace(vertices, normal, type) {
      faces.push({ vertices, normal, type });
    }

    for (let gy = minY; gy <= maxY; gy++) {
      for (let gx = minX; gx <= maxX; gx++) {
        if (grid[gy * gw + gx] !== 1) continue;

        const baseX = originX + (gx - minX) * voxelW;
        const baseY = originY - (gy - minY + 1) * voxelH;

        const z0 = originZ;
        const z1 = originZ + extrude * voxelD;

        // Front face
        addFace([
          { x: baseX, y: baseY, z: z0 },
          { x: baseX + voxelW, y: baseY, z: z0 },
          { x: baseX + voxelW, y: baseY + voxelH, z: z0 },
          { x: baseX, y: baseY + voxelH, z: z0 }
        ], { x: 0, y: 0, z: -1 }, "front");

        // Back face
        addFace([
          { x: baseX + voxelW, y: baseY, z: z1 },
          { x: baseX, y: baseY, z: z1 },
          { x: baseX, y: baseY + voxelH, z: z1 },
          { x: baseX + voxelW, y: baseY + voxelH, z: z1 }
        ], { x: 0, y: 0, z: 1 }, "back");

        // Side faces only on silhouette edges, spanning full depth.
        if (!isSolid2D(gx - 1, gy)) {
          addFace([
            { x: baseX, y: baseY, z: z1 },
            { x: baseX, y: baseY, z: z0 },
            { x: baseX, y: baseY + voxelH, z: z0 },
            { x: baseX, y: baseY + voxelH, z: z1 }
          ], { x: -1, y: 0, z: 0 }, "side");
        }

        if (!isSolid2D(gx + 1, gy)) {
          addFace([
            { x: baseX + voxelW, y: baseY, z: z0 },
            { x: baseX + voxelW, y: baseY, z: z1 },
            { x: baseX + voxelW, y: baseY + voxelH, z: z1 },
            { x: baseX + voxelW, y: baseY + voxelH, z: z0 }
          ], { x: 1, y: 0, z: 0 }, "side");
        }

        if (!isSolid2D(gx, gy - 1)) {
          addFace([
            { x: baseX, y: baseY + voxelH, z: z0 },
            { x: baseX + voxelW, y: baseY + voxelH, z: z0 },
            { x: baseX + voxelW, y: baseY + voxelH, z: z1 },
            { x: baseX, y: baseY + voxelH, z: z1 }
          ], { x: 0, y: 1, z: 0 }, "side");
        }

        if (!isSolid2D(gx, gy + 1)) {
          addFace([
            { x: baseX, y: baseY, z: z1 },
            { x: baseX + voxelW, y: baseY, z: z1 },
            { x: baseX + voxelW, y: baseY, z: z0 },
            { x: baseX, y: baseY, z: z0 }
          ], { x: 0, y: -1, z: 0 }, "side");
        }
      }
    }

    model.faces = faces;
    model.bounds = {
      minX: originX,
      maxX: originX + textW,
      minY: originY - textH,
      maxY: originY,
      minZ: originZ,
      maxZ: originZ + extrude
    };
  }

  function rotate(v) {
    const cx = Math.cos(state.rotX);
    const sx = Math.sin(state.rotX);
    const cy = Math.cos(state.rotY);
    const sy = Math.sin(state.rotY);

    let x = v.x;
    let y = v.y;
    let z = v.z;

    const x1 = x * cy + z * sy;
    const z1 = -x * sy + z * cy;
    x = x1;
    z = z1;

    const y1 = y * cx - z * sx;
    const z2 = y * sx + z * cx;

    return { x, y: y1, z: z2 };
  }

  function project(v, w, h, cameraDist, scale) {
    const p = rotate(v);
    const z = p.z + cameraDist;
    const inv = scale / Math.max(0.001, z);
    return {
      x: w * 0.5 + p.x * inv,
      y: h * 0.5 - p.y * inv,
      z,
      rz: p.z,
      rx: p.x,
      ry: p.y
    };
  }

  function render() {
    const w = el.viewer.clientWidth;
    const h = el.viewer.clientHeight;

    ctx.clearRect(0, 0, w, h);

    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, "#edd799");
    grad.addColorStop(1, "#c99936");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    if (!model.faces.length) return;

    const bounds = model.bounds;
    const sizeX = bounds.maxX - bounds.minX;
    const sizeY = bounds.maxY - bounds.minY;
    const sizeZ = bounds.maxZ - bounds.minZ;
    const maxSize = Math.max(sizeX, sizeY, sizeZ);

    const cameraDist = 28 / state.zoom;
    const scale = Math.min(w, h) * (11.5 / maxSize);

    const lightDirBase = { x: -0.34, y: 0.62, z: -0.71 };
    const lLen = Math.hypot(lightDirBase.x, lightDirBase.y, lightDirBase.z) || 1;
    const lightDir = { x: lightDirBase.x / lLen, y: lightDirBase.y / lLen, z: lightDirBase.z / lLen };

    const shadow = state.shadow / 100;
    const projectedFaces = [];

    for (const face of model.faces) {
      const pts = face.vertices.map((v) => project(v, w, h, cameraDist, scale));
      const avgZ = (pts[0].z + pts[1].z + pts[2].z + pts[3].z) * 0.25;

      const rn = rotate(face.normal);
      const nl = Math.max(0, rn.x * lightDir.x + rn.y * lightDir.y + rn.z * lightDir.z);
      const light = 0.2 + nl * 0.95;

      const ax = pts[1].x - pts[0].x;
      const ay = pts[1].y - pts[0].y;
      const bx = pts[2].x - pts[0].x;
      const by = pts[2].y - pts[0].y;
      const cross = ax * by - ay * bx;
      if (cross >= 0) continue;

      projectedFaces.push({ pts, avgZ, light, type: face.type });
    }

    projectedFaces.sort((a, b) => b.avgZ - a.avgZ);

    if (shadow > 0.01) {
      ctx.save();
      ctx.globalAlpha = shadow * 0.45;
      ctx.filter = `blur(${2 + shadow * 8}px)`;
      ctx.fillStyle = "#4f2d06";
      for (const f of projectedFaces) {
        if (f.type === "front") continue;
        ctx.beginPath();
        ctx.moveTo(f.pts[0].x + 6, f.pts[0].y + 8);
        for (let i = 1; i < 4; i++) ctx.lineTo(f.pts[i].x + 6, f.pts[i].y + 8);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }

    for (const f of projectedFaces) {
      ctx.beginPath();
      ctx.moveTo(f.pts[0].x, f.pts[0].y);
      for (let i = 1; i < 4; i++) ctx.lineTo(f.pts[i].x, f.pts[i].y);
      ctx.closePath();
      ctx.fillStyle = colorFor(f.type, f.light);
      ctx.fill();

      if (f.type === "front") {
        ctx.strokeStyle = "rgba(255, 228, 152, 0.42)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }

    const shine = state.shine / 100;
    if (shine > 0.01) {
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      const shineGrad = ctx.createLinearGradient(w * 0.2, h * 0.15, w * 0.7, h * 0.18);
      shineGrad.addColorStop(0, "rgba(255,255,255,0)");
      shineGrad.addColorStop(0.45, `rgba(255,255,255,${(shine * 0.4).toFixed(3)})`);
      shineGrad.addColorStop(0.5, `rgba(255,255,255,${(shine * 0.7).toFixed(3)})`);
      shineGrad.addColorStop(0.55, `rgba(255,255,255,${(shine * 0.4).toFixed(3)})`);
      shineGrad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = shineGrad;
      ctx.fillRect(0, 0, w, h);

      ctx.filter = "blur(4px)";
      ctx.fillStyle = `rgba(255,255,245,${(shine * 0.34).toFixed(3)})`;
      ctx.beginPath();
      ctx.ellipse(w * 0.2, h * 0.3, 28 + shine * 38, 8 + shine * 9, -0.22, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(w * 0.77, h * 0.28, 22 + shine * 28, 7 + shine * 8, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function queueRender() {
    if (renderQueued) return;
    renderQueued = true;
    requestAnimationFrame(() => {
      renderQueued = false;
      render();
    });
  }

  function syncFromInputs() {
    state.text = el.text.value;
    state.size = Number(el.size.value);
    state.depth = Number(el.depth.value);
    state.shine = Number(el.shine.value);
    state.shadow = Number(el.shadow.value);
    state.detail = Number(el.detail.value);
  }

  function syncToInputs() {
    el.text.value = state.text;
    el.size.value = String(state.size);
    el.depth.value = String(state.depth);
    el.shine.value = String(state.shine);
    el.shadow.value = String(state.shadow);
    el.detail.value = String(state.detail);
  }

  function rebuildAndRender() {
    buildTextModel();
    queueRender();
  }

  function apply() {
    syncFromInputs();
    rebuildAndRender();
  }

  function reset() {
    Object.assign(state, defaults);
    state.rotX = -0.2;
    state.rotY = -0.55;
    state.zoom = 1;
    syncToInputs();
    rebuildAndRender();
  }

  el.apply.addEventListener("click", apply);
  el.reset.addEventListener("click", reset);
  el.text.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      apply();
    }
  });

  [el.size, el.depth, el.shine, el.shadow, el.detail].forEach((input) => {
    input.addEventListener("input", apply);
  });

  el.viewer.addEventListener("mousedown", (e) => {
    state.drag = true;
    state.lastX = e.clientX;
    state.lastY = e.clientY;
  });

  window.addEventListener("mouseup", () => {
    state.drag = false;
  });

  window.addEventListener("mousemove", (e) => {
    if (!state.drag) return;
    const dx = e.clientX - state.lastX;
    const dy = e.clientY - state.lastY;
    state.lastX = e.clientX;
    state.lastY = e.clientY;
    state.rotY += dx * 0.008;
    state.rotX = clamp(state.rotX + dy * 0.006, -1.2, 1.2);
    queueRender();
  });

  el.viewer.addEventListener("wheel", (e) => {
    e.preventDefault();
    state.zoom = clamp(state.zoom + (e.deltaY > 0 ? -0.07 : 0.07), 0.55, 2.2);
    queueRender();
  }, { passive: false });

  function onResize() {
    resizeCanvas();
    queueRender();
  }

  window.addEventListener("resize", onResize);

  syncToInputs();
  resizeCanvas();
  buildTextModel();
  render();
})();
