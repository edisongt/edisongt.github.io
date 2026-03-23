import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-ezra',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './ezra.html',
  styleUrl: './ezra.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ezra {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-decree', label: '古列的詔書' },
    { id: 'scene-return', label: '歸回故土' },
    { id: 'scene-foundation', label: '立聖殿根基' },
    { id: 'scene-complete', label: '聖殿落成' },
    { id: 'scene-reform', label: '以斯拉的改革' },
  ];
}
