import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-colossians',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './colossians.html',
  styleUrl: './colossians.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Colossians {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-supremacy', label: '基督的超越' },
    { id: 'scene-fullness', label: '神本性的豐盛' },
    { id: 'scene-hidden', label: '與基督同藏' },
    { id: 'scene-newself', label: '穿上新人' },
    { id: 'scene-word', label: '基督的道' },
  ];
}
