import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<p>Home works - Garden of Eden</p>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
