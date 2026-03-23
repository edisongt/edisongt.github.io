import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, inject, ElementRef } from '@angular/core';
import { BackButton } from '../../shared/components/back-button/back-button';

interface Star {
  x: number;
  y: number;
  r: number;
  tw: number;
  sp: number;
}

@Component({
  selector: 'app-wiki',
  imports: [BackButton],
  templateUrl: './wiki.html',
  styleUrl: './wiki.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Wiki implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);

  private animFrameId = 0;
  private stars: Star[] = [];
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private W = 0;
  private H = 0;

  private skillObserver?: IntersectionObserver;
  private tocObserver?: IntersectionObserver;
  private readonly resizeHandler = (): void => this.resizeCanvas();

  ngOnInit(): void {
    this.initStars();
    this.initSkillBars();
    this.initTocTracking();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animFrameId);
    window.removeEventListener('resize', this.resizeHandler);
    this.skillObserver?.disconnect();
    this.tocObserver?.disconnect();
  }

  private initStars(): void {
    this.canvas = this.el.nativeElement.querySelector('#stars-bg');
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;
    this.ctx = ctx;

    this.resizeCanvas();
    window.addEventListener('resize', this.resizeHandler);

    this.stars = Array.from({ length: 260 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.25,
      tw: Math.random() * Math.PI * 2,
      sp: Math.random() * 0.8 + 0.4,
    }));

    this.drawStars();
  }

  private resizeCanvas(): void {
    this.W = this.canvas.width = window.innerWidth;
    this.H = this.canvas.height = window.innerHeight;
  }

  private drawStars(): void {
    this.ctx.clearRect(0, 0, this.W, this.H);
    const now = Date.now() / 1000;
    for (const s of this.stars) {
      const a = 0.22 + 0.28 * Math.sin(now * s.sp + s.tw);
      this.ctx.beginPath();
      this.ctx.arc(s.x * this.W, s.y * this.H, s.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255,255,220,${a})`;
      this.ctx.fill();
    }
    this.animFrameId = requestAnimationFrame(() => this.drawStars());
  }

  private initSkillBars(): void {
    const fills: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.bar-fill');
    this.skillObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement;
            target.style.width = target.dataset['w'] + '%';
            this.skillObserver!.unobserve(target);
          }
        }
      },
      { threshold: 0.25 },
    );
    fills.forEach((f) => this.skillObserver!.observe(f));
  }

  private initTocTracking(): void {
    const dots: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.toc-dot');
    const sections = Array.from(dots).map((d) =>
      this.el.nativeElement.querySelector('#' + d.dataset['section']),
    );

    this.tocObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const id = e.target.id;
            dots.forEach((d) => d.classList.toggle('active', d.dataset['section'] === id));
          }
        }
      },
      { threshold: 0.35 },
    );

    sections.forEach((s: Element | null) => s && this.tocObserver!.observe(s));
  }
}
