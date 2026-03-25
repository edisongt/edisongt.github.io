import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-philippians',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './philippians.html',
  styleUrl: './philippians.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Philippians {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-joy', label: '患難中的喜樂' },
    { id: 'scene-humility', label: '基督的謙卑' },
    { id: 'scene-goal', label: '向著標竿直跑' },
    { id: 'scene-peace', label: '出人意外的平安' },
    { id: 'scene-strength', label: '靠主凡事都能' },
  ];
}
