import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-philemon',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './philemon.html',
  styleUrl: './philemon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Philemon {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-love', label: '愛與信心' },
    { id: 'scene-onesimus', label: '阿尼西母' },
    { id: 'scene-appeal', label: '代求的心' },
    { id: 'scene-brother', label: '超越主僕' },
    { id: 'scene-grace', label: '恩典的釋放' },
  ];
}
