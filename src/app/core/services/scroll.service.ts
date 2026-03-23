import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly activeSceneIndex = signal(0);

  setActiveScene(index: number): void {
    this.activeSceneIndex.set(index);
  }

  scrollToScene(sceneId: string): void {
    const el = document.getElementById(sceneId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
