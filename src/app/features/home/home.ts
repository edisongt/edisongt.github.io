import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  ElementRef,
  inject,
} from '@angular/core';
import { NavDropdown } from '../../layout/nav-dropdown/nav-dropdown';

@Component({
  selector: 'app-home',
  imports: [NavDropdown],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private animId = 0;
  private startTime = 0;
  private starList: { x: number; y: number; r: number; tw: number }[] = [];
  private breezeList: {
    x: number; y: number; r: number;
    vx: number; vy: number; wo: number; ws: number;
    hue: number; sat: number; lit: number; base: number;
  }[] = [];
  private starsCv!: HTMLCanvasElement;
  private starsCtx!: CanvasRenderingContext2D;
  private breezeCv!: HTMLCanvasElement;
  private breezeCtx!: CanvasRenderingContext2D;
  private readonly resizeHandler = () => this.onResize();

  private readonly DAY_NIGHT_CYCLE_MS = 90000;
  private readonly DAWN_T = 0.24;

  private readonly LIFE_COLORS = ['#d4fff2', '#6dffd2', '#2db87c', '#baffea', '#46d27c', '#a8ffd8'];
  private readonly KNOW_COLORS = ['#7a3090', '#4a1860', '#9b50c0', '#5c3570', '#c070f0', '#3d1040'];

  /* Sky gradient keyframes: [t, topRGB, midRGB, botRGB] */
  private readonly SKY_KF: [number, number[], number[], number[]][] = [
    [0.00, [4, 4, 16],     [8, 8, 28],      [5, 6, 22]],
    [0.20, [8, 6, 35],     [25, 15, 55],    [55, 25, 25]],
    [0.27, [28, 38, 78],   [170, 75, 28],   [210, 120, 45]],
    [0.35, [75, 130, 215], [130, 180, 235], [190, 215, 235]],
    [0.50, [25, 95, 215],  [65, 145, 225],  [120, 195, 235]],
    [0.65, [55, 115, 195], [125, 175, 225], [195, 215, 235]],
    [0.73, [35, 45, 95],   [195, 75, 28],   [225, 115, 28]],
    [0.80, [18, 12, 52],   [55, 22, 65],    [38, 18, 48]],
    [1.00, [4, 4, 16],     [8, 8, 28],      [5, 6, 22]],
  ];

  ngOnInit(): void {
    const root = this.el.nativeElement as HTMLElement;

    this.starsCv = root.querySelector('#stars') as HTMLCanvasElement;
    this.starsCtx = this.starsCv.getContext('2d')!;
    this.breezeCv = root.querySelector('#breeze') as HTMLCanvasElement;
    this.breezeCtx = this.breezeCv.getContext('2d')!;

    this.resizeCanvases();
    this.initStars();
    this.initBreeze();
    this.buildCube(root);
    this.buildFireflies(root);
    this.bindTreeClicks(root);

    window.addEventListener('resize', this.resizeHandler);

    this.startTime = Date.now() - this.DAY_NIGHT_CYCLE_MS * this.DAWN_T;
    this.tick();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.resizeHandler);
  }

  /* ── Canvas resize ── */
  private onResize(): void {
    this.resizeCanvases();
    this.initStars();
  }

  private resizeCanvases(): void {
    this.starsCv.width = window.innerWidth;
    this.starsCv.height = window.innerHeight;
    this.breezeCv.width = window.innerWidth;
    this.breezeCv.height = window.innerHeight;
  }

  /* ── Stars ── */
  private initStars(count = 220): void {
    this.starList = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random() * 0.65,
      r: Math.random() * 1.4 + 0.3,
      tw: Math.random() * Math.PI * 2,
    }));
  }

  private drawStars(alpha: number): void {
    const ctx = this.starsCtx;
    const cv = this.starsCv;
    ctx.clearRect(0, 0, cv.width, cv.height);
    if (alpha < 0.01) return;
    const now = Date.now() / 1000;
    for (const s of this.starList) {
      const a = alpha * (0.5 + 0.5 * Math.sin(now + s.tw));
      ctx.beginPath();
      ctx.arc(s.x * cv.width, s.y * cv.height, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,220,${a})`;
      ctx.fill();
    }
  }

  /* ── Breeze particles ── */
  private initBreeze(count = 70): void {
    this.breezeList = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 2.2 + 0.5,
      vx: (Math.random() * 0.5 + 0.15) * 0.00018,
      vy: -(Math.random() * 0.4 + 0.12) * 0.00028,
      wo: Math.random() * Math.PI * 2,
      ws: Math.random() * 1.2 + 0.3,
      hue: 85 + Math.floor(Math.random() * 55),
      sat: 28 + Math.floor(Math.random() * 30),
      lit: 74 + Math.floor(Math.random() * 22),
      base: Math.random() * 0.32 + 0.07,
    }));
  }

  private drawBreeze(alpha: number): void {
    const ctx = this.breezeCtx;
    const W = this.breezeCv.width;
    const H = this.breezeCv.height;
    ctx.clearRect(0, 0, W, H);
    if (alpha < 0.01) return;
    const now = Date.now() / 1000;
    for (const p of this.breezeList) {
      const wobble = Math.sin(now * p.ws + p.wo) * 0.00007;
      p.x += p.vx + wobble;
      p.y += p.vy;
      if (p.y < -0.05) { p.y = 1.05; p.x = Math.random(); }
      if (p.x > 1.05) { p.x = -0.05; }
      const a = alpha * p.base * (0.55 + 0.45 * Math.sin(now * p.ws * 0.7 + p.wo));
      ctx.beginPath();
      ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue},${p.sat}%,${p.lit}%,${a})`;
      ctx.fill();
    }
  }

  /* ── Colour helpers ── */
  private lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
  }
  private clamp01(v: number): number {
    return Math.max(0, Math.min(1, v));
  }
  private lerpC(c1: number[], c2: number[], t: number): number[] {
    return [
      Math.round(this.lerp(c1[0], c2[0], t)),
      Math.round(this.lerp(c1[1], c2[1], t)),
      Math.round(this.lerp(c1[2], c2[2], t)),
    ];
  }
  private rgb(c: number[]): string {
    return `rgb(${c[0]},${c[1]},${c[2]})`;
  }

  private getSkyColors(t: number): { top: number[]; mid: number[]; bot: number[] } {
    let i = 0;
    while (i < this.SKY_KF.length - 1 && this.SKY_KF[i + 1][0] <= t) i++;
    const a = this.SKY_KF[i];
    const b = this.SKY_KF[i + 1];
    const lt = (t - a[0]) / (b[0] - a[0]);
    return {
      top: this.lerpC(a[1], b[1], lt),
      mid: this.lerpC(a[2], b[2], lt),
      bot: this.lerpC(a[3], b[3], lt),
    };
  }

  private celestialPos(
    t: number, riseT: number, setT: number,
  ): { x: number; y: number; norm: number } | null {
    if (t < riseT || t > setT) return null;
    const norm = (t - riseT) / (setT - riseT);
    const vx = window.innerWidth * (0.03 + norm * 0.94);
    const vy = window.innerHeight * (0.88 - 0.75 * Math.sin(norm * Math.PI));
    return { x: vx, y: vy, norm };
  }

  private moonPos(t: number): { x: number; y: number; norm: number } | null {
    const mt = (t + 0.5) % 1;
    return this.celestialPos(mt, this.DAWN_T, 1 - this.DAWN_T);
  }

  /* ── Main animation loop ── */
  private tick(): void {
    const root = this.el.nativeElement as HTMLElement;
    const skyEl = root.querySelector('#sky') as HTMLElement;
    const sunEl = root.querySelector('#sun') as HTMLElement;
    const moonEl = root.querySelector('#moon') as HTMLElement;

    const t = ((Date.now() - this.startTime) % this.DAY_NIGHT_CYCLE_MS) / this.DAY_NIGHT_CYCLE_MS;
    const sc = this.getSkyColors(t);

    /* Sky */
    skyEl.style.background =
      `linear-gradient(180deg, ${this.rgb(sc.top)} 0%, ${this.rgb(sc.mid)} 55%, ${this.rgb(sc.bot)} 100%)`;

    /* Stars */
    let starA = 0;
    if (t < 0.20) starA = 1;
    else if (t < 0.30) starA = 1 - (t - 0.20) / 0.10;
    else if (t >= 0.70 && t < 0.80) starA = (t - 0.70) / 0.10;
    else if (t >= 0.80) starA = 1;
    this.drawStars(this.clamp01(starA));

    /* Breeze */
    let breezeA = 0;
    if (t >= 0.30 && t < 0.35) breezeA = (t - 0.30) / 0.05;
    else if (t >= 0.35 && t < 0.65) breezeA = 1;
    else if (t >= 0.65 && t < 0.70) breezeA = 1 - (t - 0.65) / 0.05;
    this.drawBreeze(this.clamp01(breezeA));

    /* Sun */
    const sp = this.celestialPos(t, this.DAWN_T, 1 - this.DAWN_T);
    if (sp) {
      sunEl.style.display = 'block';
      sunEl.style.left = sp.x + 'px';
      sunEl.style.top = sp.y + 'px';
      const low = sp.norm < 0.13 || sp.norm > 0.87;
      const hue = low ? 22 : 45;
      const inner = low ? '#ffe0b2' : '#fffde7';
      sunEl.style.background =
        `radial-gradient(circle, ${inner} 15%, hsl(${hue},100%,62%) 50%, hsl(${hue - 10},90%,50%) 78%, transparent)`;
      sunEl.style.boxShadow = low
        ? '0 0 45px 18px rgba(255,155,55,.75)'
        : '0 0 65px 28px rgba(255,210,0,.65)';
    } else {
      sunEl.style.display = 'none';
    }

    /* Moon */
    const mp = this.moonPos(t);
    if (mp) {
      moonEl.style.display = 'block';
      moonEl.style.left = mp.x + 'px';
      moonEl.style.top = mp.y + 'px';
      moonEl.style.background = 'radial-gradient(circle at 42% 38%, #fffde7 42%, #d4d8e8 78%, #8888a8)';
      moonEl.style.boxShadow = '0 0 32px 10px rgba(200,215,255,.38)';
    } else {
      moonEl.style.display = 'none';
    }

    /* Life-tree glow */
    const dayness =
      t > this.DAWN_T && t < 1 - this.DAWN_T
        ? Math.sin((t - this.DAWN_T) / (1 - 2 * this.DAWN_T) * Math.PI)
        : 0;
    const lifeWrap = root.querySelector('#life-wrap') as HTMLElement | null;
    if (lifeWrap) {
      lifeWrap.style.filter =
        `drop-shadow(0 0 ${22 + dayness * 20}px rgba(109,255,210,${0.38 + dayness * 0.22}))`;
    }

    this.animId = requestAnimationFrame(() => this.tick());
  }

  /* ── Build 3D cube ── */
  private buildCube(root: HTMLElement): void {
    const grid = root.querySelector('#cube-grid');
    if (!grid) return;
    const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
    const wrap = document.createElement('div');
    wrap.className = 'cube-wrap';
    const cube = document.createElement('div');
    cube.className = 'cube-3d';
    for (const f of faces) {
      const face = document.createElement('div');
      face.className = 'face ' + f;
      cube.appendChild(face);
    }
    wrap.appendChild(cube);
    grid.appendChild(wrap);
  }

  /* ── Fireflies ── */
  private buildFireflies(root: HTMLElement): void {
    const ffBox = root.querySelector('#fireflies');
    if (!ffBox) return;
    for (let i = 0; i < 30; i++) {
      const ff = document.createElement('div');
      ff.className = 'ff';
      const r = (a: number, b: number) => +(a + Math.random() * (b - a)).toFixed(1);
      ff.style.cssText = `
        left:${r(5, 92)}%; bottom:${r(18, 65)}%;
        animation:
          ffMove ${r(7, 15)}s ease-in-out ${r(-12, 0)}s infinite,
          ffGlow ${r(1.4, 3)}s ease-in-out ${r(-3, 0)}s infinite;
        --a:${r(-30, 30)}px; --b:${r(-45, 5)}px;
        --c:${r(-45, 45)}px; --d:${r(-65, -8)}px;
        --e:${r(-20, 55)}px; --f:${r(-50, -5)}px;
      `;
      ffBox.appendChild(ff);
    }
  }

  /* ── Tree click interactions ── */
  private bindTreeClicks(root: HTMLElement): void {
    const particlesEl = root.querySelector('#particles') as HTMLElement;
    const lifeWrap = root.querySelector('#life-wrap');
    const knowWrap = root.querySelector('#know-wrap');

    lifeWrap?.addEventListener('click', () => {
      const r = lifeWrap.getBoundingClientRect();
      const pr = particlesEl.getBoundingClientRect();
      this.spawnLeaves(
        particlesEl,
        r.left + r.width * 0.5 - pr.left,
        r.top + r.height * 0.28 - pr.top,
        this.LIFE_COLORS,
        22,
      );
    });

    knowWrap?.addEventListener('click', () => {
      const r = knowWrap.getBoundingClientRect();
      const pr = particlesEl.getBoundingClientRect();
      const cx = r.left + r.width * 0.5 - pr.left;
      const cy = r.top + r.height * 0.28 - pr.top;
      this.spawnLeaves(particlesEl, cx, cy, this.KNOW_COLORS, 16);
      this.spawnApples(particlesEl, cx, cy, 7);
    });
  }

  private rand(a: number, b: number): number {
    return +(a + Math.random() * (b - a)).toFixed(1);
  }

  private spawnLeaves(
    container: HTMLElement, cx: number, cy: number, colors: string[], count: number,
  ): void {
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'leaf-p';
      const dur = this.rand(3.5, 6.5);
      el.style.cssText = `
        width:${this.rand(9, 15)}px; height:${this.rand(6, 10)}px;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        left:${cx}px; top:${cy}px;
        --dx:${this.rand(-90, 90)}px;
        --dy:${this.rand(70, 170)}px;
        --rot:${this.rand(-540, 540)}deg;
        --dur:${dur}s;
        animation-delay:${this.rand(0, 0.5)}s;
      `;
      container.appendChild(el);
      setTimeout(() => el.remove(), (dur + 1) * 1000);
    }
  }

  private spawnApples(container: HTMLElement, cx: number, cy: number, count: number): void {
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'apple-p';
      const dur = this.rand(2.5, 4.5);
      el.style.cssText = `
        left:${cx + this.rand(-30, 30)}px; top:${cy + this.rand(0, 30)}px;
        --dx:${this.rand(-50, 50)}px;
        --dy:${this.rand(120, 200)}px;
        --rot:${this.rand(-240, 240)}deg;
        --dur:${dur}s;
      `;
      container.appendChild(el);
      setTimeout(() => el.remove(), (dur + 1) * 1000);
    }
  }
}
