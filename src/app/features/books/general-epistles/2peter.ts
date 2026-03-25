import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-2peter',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './2peter.html',
  styleUrl: './2peter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondPeter {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-nature', label: '神聖品性' },
    { id: 'scene-prophecy', label: '確定的預言' },
    { id: 'scene-false', label: '假師傅' },
    { id: 'scene-day', label: '主的日子' },
    { id: 'scene-grow', label: '長進恩典' },
  ];
}
