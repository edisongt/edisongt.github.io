import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-numbers',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './numbers.html',
  styleUrl: './numbers.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Numbers {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-census', label: '數點人民' },
    { id: 'scene-spies', label: '十二探子' },
    { id: 'scene-korah', label: '可拉的叛變' },
    { id: 'scene-serpent', label: '銅蛇' },
    { id: 'scene-promised', label: '望向應許之地' },
  ];
}
