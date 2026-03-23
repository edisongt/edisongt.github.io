import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-scroll-hint',
  template: '<div class="scroll-hint">↓ 向下滾動探索 · Scroll to explore</div>',
  styleUrl: './scroll-hint.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollHint {}
