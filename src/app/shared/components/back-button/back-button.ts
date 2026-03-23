import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-button',
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="back-button" aria-label="Back to home">
      ← 返回
    </a>
  `,
  styleUrl: './back-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackButton {}
