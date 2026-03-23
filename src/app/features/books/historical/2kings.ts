import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-2kings',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './2kings.html',
  styleUrl: './2kings.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondKings {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-chariot', label: '以利亞升天' },
    { id: 'scene-miracles', label: '以利沙的神蹟' },
    { id: 'scene-fall', label: '以色列亡國' },
    { id: 'scene-prayer', label: '希西家的禱告' },
    { id: 'scene-exile', label: '耶路撒冷陷落' },
  ];
}
