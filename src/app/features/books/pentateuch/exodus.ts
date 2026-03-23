import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-exodus',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './exodus.html',
  styleUrl: './exodus.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Exodus {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-bush', label: '火焚荊棘' },
    { id: 'scene-plagues', label: '十災' },
    { id: 'scene-passover', label: '逾越節' },
    { id: 'scene-redsea', label: '分開紅海' },
    { id: 'scene-sinai', label: '西奈山' },
  ];
}
