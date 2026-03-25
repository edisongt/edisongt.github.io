import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-1john',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './1john.html',
  styleUrl: './1john.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstJohn {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-light', label: '神就是光' },
    { id: 'scene-children', label: '神的兒女' },
    { id: 'scene-love', label: '彼此相愛' },
    { id: 'scene-godlove', label: '神就是愛' },
    { id: 'scene-life', label: '永生的確據' },
  ];
}
