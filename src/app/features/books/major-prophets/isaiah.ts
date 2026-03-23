import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-isaiah',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './isaiah.html',
  styleUrl: './isaiah.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Isaiah {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-calling', label: '先知蒙召' },
    { id: 'scene-immanuel', label: '以馬內利預言' },
    { id: 'scene-servant', label: '受苦的僕人' },
    { id: 'scene-comfort', label: '安慰我民' },
    { id: 'scene-newearth', label: '新天新地' },
  ];
}
