import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-scene-heading',
  template: `
    <div class="scene-heading">
      <h2>{{ title() }}</h2>
      <p>{{ subtitle() }}</p>
    </div>
  `,
  styleUrl: './scene-heading.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneHeading {
  title = input('');
  subtitle = input('');
}
