import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-2timothy',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './2timothy.html',
  styleUrl: './2timothy.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondTimothy {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-ashamed', label: '不以為恥' },
    { id: 'scene-soldier', label: '精兵之道' },
    { id: 'scene-word', label: '正確分解' },
    { id: 'scene-times', label: '末後的危難' },
    { id: 'scene-finish', label: '跑完全程' },
  ];
}
