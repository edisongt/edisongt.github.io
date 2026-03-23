import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { SceneInfo } from '../../../core/models/book.model';
import { ScrollService } from '../../../core/services/scroll.service';

@Component({
  selector: 'app-nav-dots',
  template: `
    <nav class="nav-dots" aria-label="Scene navigation">
      @for (scene of scenes(); track scene.id; let i = $index) {
        <button
          class="nav-dot"
          [class.active]="i === activeIndex()"
          [attr.aria-label]="scene.label"
          [title]="scene.label"
          (click)="onDotClick(i, scene.id)"
        ></button>
      }
    </nav>
  `,
  styleUrl: './nav-dots.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDots {
  scenes = input.required<SceneInfo[]>();
  activeIndex = input(0);

  private scrollService = inject(ScrollService);

  onDotClick(index: number, sceneId: string): void {
    this.scrollService.setActiveScene(index);
    this.scrollService.scrollToScene(sceneId);
  }
}
