import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-hebrews',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './hebrews.html',
  styleUrl: './hebrews.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hebrews {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-son', label: '神子的超越' },
    { id: 'scene-priest', label: '大祭司' },
    { id: 'scene-covenant', label: '更美之約' },
    { id: 'scene-faith', label: '信心偉人' },
    { id: 'scene-race', label: '奔跑賽程' },
  ];
}
