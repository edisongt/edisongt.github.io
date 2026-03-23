import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-starfield',
  template: '<div class="starfield"></div>',
  styleUrl: './starfield.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Starfield {}
