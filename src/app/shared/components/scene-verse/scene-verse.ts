import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-scene-verse',
  template: '<div class="scene-verse">{{ text() }}</div>',
  styleUrl: './scene-verse.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneVerse {
  text = input('');
}
