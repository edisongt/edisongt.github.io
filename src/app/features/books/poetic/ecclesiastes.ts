import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-ecclesiastes',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './ecclesiastes.html',
  styleUrl: './ecclesiastes.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ecclesiastes {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-vanity', label: '虛空的虛空' },
    { id: 'scene-seasons', label: '凡事都有定期' },
    { id: 'scene-sun', label: '日光之下' },
    { id: 'scene-wisdom', label: '智慧的價值' },
    { id: 'scene-remember', label: '當記念造你的主' },
  ];
}
