import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-1peter',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './1peter.html',
  styleUrl: './1peter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPeter {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-hope', label: '活潑的盼望' },
    { id: 'scene-stones', label: '活石聖殿' },
    { id: 'scene-suffering', label: '為義受苦' },
    { id: 'scene-trials', label: '火煉的試驗' },
    { id: 'scene-humble', label: '謙卑交託' },
  ];
}
