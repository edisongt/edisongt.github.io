import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-job',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './job.html',
  styleUrl: './job.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Job {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-prosperity', label: '約伯的豐盛' },
    { id: 'scene-suffering', label: '約伯的苦難' },
    { id: 'scene-friends', label: '三友辯論' },
    { id: 'scene-whirlwind', label: '神從旋風中回答' },
    { id: 'scene-restoration', label: '約伯的復興' },
  ];
}
