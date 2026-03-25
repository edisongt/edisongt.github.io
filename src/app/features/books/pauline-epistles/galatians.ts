import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-galatians',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './galatians.html',
  styleUrl: './galatians.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Galatians {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-gospel', label: '獨一的福音' },
    { id: 'scene-faith', label: '因信稱義' },
    { id: 'scene-freedom', label: '基督釋放的自由' },
    { id: 'scene-fruit', label: '聖靈的果子' },
    { id: 'scene-new', label: '新造的人' },
  ];
}
