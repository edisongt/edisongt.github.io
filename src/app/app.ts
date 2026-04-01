import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VersionBadge } from './shared/components/version-badge/version-badge';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VersionBadge],
  template: `
    <router-outlet />
    <app-version-badge />
  `,
  styles: ':host { display: block; }'
})
export class App {}
