import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  template: '<div class="glass-card"><ng-content /></div>',
  styleUrl: './glass-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlassCard {}
