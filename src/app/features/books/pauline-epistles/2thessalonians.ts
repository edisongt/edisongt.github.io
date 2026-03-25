import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-2thessalonians',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './2thessalonians.html',
  styleUrl: './2thessalonians.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondThessalonians {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-endure', label: '忍耐的報賞' },
    { id: 'scene-day', label: '主的大日' },
    { id: 'scene-lawless', label: '不法之人' },
    { id: 'scene-stand', label: '持守根基' },
    { id: 'scene-faithful', label: '信實的主' },
  ];
}
