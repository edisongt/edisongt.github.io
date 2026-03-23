import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wiki',
  template: '<p>Wiki works</p>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Wiki {}
