import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-esther',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './esther.html',
  styleUrl: './esther.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Esther {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-queen', label: '以斯帖被立為后' },
    { id: 'scene-plot', label: '哈曼的陰謀' },
    { id: 'scene-courage', label: '以斯帖的勇氣' },
    { id: 'scene-reversal', label: '命運逆轉' },
    { id: 'scene-purim', label: '普珥節' },
  ];
}
