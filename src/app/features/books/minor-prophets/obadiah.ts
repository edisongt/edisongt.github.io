import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-obadiah',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './obadiah.html',
  styleUrl: './obadiah.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Obadiah {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-pride', label: '以東的驕傲' },
    { id: 'scene-betrayal', label: '背叛弟兄' },
    { id: 'scene-judgment', label: '審判臨到' },
    { id: 'scene-zion', label: '錫安得勝' },
    { id: 'scene-kingdom', label: '神的國度' },
  ];
}
