import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-1corinthians',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './1corinthians.html',
  styleUrl: './1corinthians.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstCorinthians {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-unity', label: '合一的呼籲' },
    { id: 'scene-wisdom', label: '十架的智慧' },
    { id: 'scene-body', label: '基督的身體' },
    { id: 'scene-love', label: '愛的真諦' },
    { id: 'scene-resurrection', label: '復活的盼望' },
  ];
}
