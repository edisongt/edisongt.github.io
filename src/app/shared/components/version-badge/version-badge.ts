import { Component, ChangeDetectionStrategy } from '@angular/core';
import { APP_VERSION } from '../../../../version';

@Component({
  selector: 'app-version-badge',
  template: `<span class="version-badge">{{ version }}</span>`,
  styleUrl: './version-badge.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionBadge {
  readonly version = APP_VERSION;
}
