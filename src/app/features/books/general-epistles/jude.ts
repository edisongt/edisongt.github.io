import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-jude',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './jude.html',
  styleUrl: './jude.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Jude {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-contend', label: '為真道爭辯' },
    { id: 'scene-warning', label: '假教師的警告' },
    { id: 'scene-history', label: '歷史的鑑戒' },
    { id: 'scene-build', label: '在至聖的真道上' },
    { id: 'scene-doxology', label: '頌讚歸主' },
  ];
}
