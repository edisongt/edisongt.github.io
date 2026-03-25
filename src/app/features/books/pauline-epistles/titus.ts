import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-titus',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './titus.html',
  styleUrl: './titus.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Titus {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-elder', label: '長老的品格' },
    { id: 'scene-doctrine', label: '純正的教導' },
    { id: 'scene-ages', label: '各齡的呼召' },
    { id: 'scene-grace', label: '恩典的教訓' },
    { id: 'scene-good', label: '善行的生命' },
  ];
}
